const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Course = require("../models/Course");
const Bootcamp = require("../models/Bootcamp");

// @desc    Get all courses
// @route   GET /api/v1/courses
// @route   GET /api/v1/bootcamps/:bootcampId/courses
// @access  Public
exports.getCourses = asyncHandler(async (req, res, next) => {
  if (req.params.bootcampId) {
    const courses = await Course.find({ bootcamp: req.params.bootcampId });
    return res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    });
  } else {
    res.status(200).json(res.advancedResults);
  }
});

// @desc    Get single courses
// @route   GET /api/v1/courses/:id
// @access  Public
exports.getCourse = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const course = await Course.findById(id).populate({
    path: "bootcamp",
    select: "name description",
  });

  if (!course) {
    return next(
      new ErrorResponse(`Course not found with the id of ${id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    count: course.length,
    data: course,
  });
});

// @desc    Create a Course
// @route   POST /api/v1/bootcamps/:bootcampId/courses
// @access  Private
exports.addCourse = asyncHandler(async (req, res, next) => {
  const { bootcampId } = req.params;
  req.body.bootcamp = bootcampId;
  req.body.user = req.user.id;

  const bootcamp = await Bootcamp.findById(bootcampId);

  if (!bootcamp) {
    return next(
      new ErrorResponse(`No bootcamp with the id of ${bootcampId}`),
      404
    );
  }

  // Make sure the user is bootcamp owner
  if (bootcamp.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to add a course to bootcamp ${bootcamp._id}`,
        401
      )
    );
  }

  const course = await Course.create(req.body);

  res.status(201).json({
    success: true,
    data: course,
  });
});

// @desc    Update a Course
// @route   PUT /api/v1/courses/:id
// @access  Private
exports.updateCourse = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  let course = await Course.findById(id);
  if (!course) {
    return next(
      new ErrorResponse(`Course not found with the id of ${id}`, 404)
    );
  }

  // Make sure the user is bootcamp owner
  if (course.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update a course ${course._id}`,
        401
      )
    );
  }

  course = await Course.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    success: true,
    data: course,
  });
});

// @desc    Delete a Course
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteCourse = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const course = await Course.findById(id);
  if (!course) {
    return next(
      new ErrorResponse(`Course not found with the id of ${id}`, 404)
    );
  }

  // Make sure the user is bootcamp owner
  if (course.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to delete a course ${course._id}`,
        401
      )
    );
  }

  await course.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
