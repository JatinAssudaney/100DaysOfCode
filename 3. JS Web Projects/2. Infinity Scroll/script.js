const imageContainer = document.querySelector("#image-container");
const loader = document.querySelector("#loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Unsplash API Setup
let imageCount = 5;
const apiUrl = `https://api.unsplash.com/photos/random/`;
const key = config.key;

function increaseImagesToLoadCount() {
  imageCount = 30;
}

function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    loader.hidden = true;
    ready = true;
    increaseImagesToLoadCount();
  }
}

function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create Elements For Links & Photos, ADD to DOM
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  photosArray.forEach((photo) => {
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });

    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    img.addEventListener("load", imageLoaded);

    item.append(img);
    imageContainer.append(item);
  });
}

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        client_id: key,
        count: imageCount,
      },
    });
    photosArray = await response.data;
    displayPhotos();
  } catch (error) {
    console.log(error);
  }
}

// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});
getPhotos();
