// BOILERPLATE TO SETUP MATTER.JS

const {
  World,
  Engine,
  Runner,
  Render,
  Bodies,
  Mouse,
  MouseConstraint,
} = Matter;
const engine = Engine.create();
const { world } = engine;

const width = 800;
const height = 600;
const x = 200;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width,
    height,
    wireframes: false,
  },
});
Render.run(render);
Runner.run(Runner.create(), engine);

World.add(
  world,
  MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas),
  })
);

// WALLS
const walls = [
  // TOP BORDER
  Bodies.rectangle(width / 2, 0, width, 2, {
    isStatic: true,
  }),
  //   RIGHT BORDER
  Bodies.rectangle(width, height / 2, 2, height, {
    isStatic: true,
  }),
  //   BOTTOM BORDER
  Bodies.rectangle(width / 2, height, width, 2, {
    isStatic: true,
  }),
  //   LEFT BORDER
  Bodies.rectangle(0, height / 2, 2, height, {
    isStatic: true,
  }),
];
World.add(world, walls);

for (let i = 0; i < 50; i++) {
  if (Math.random() > 0.5) {
    World.add(
      world,
      Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50)
    );
  } else {
    World.add(
      world,
      Bodies.circle(Math.random() * width, Math.random() * height, 35, {
        render: {
          fillStyle: "#7692FF",
        },
      })
    );
  }
}
