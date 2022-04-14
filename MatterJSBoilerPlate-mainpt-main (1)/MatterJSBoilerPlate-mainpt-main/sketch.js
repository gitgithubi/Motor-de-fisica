const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine, world, plane, block1, block2, block3, obs1, obs2;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	let plane_options = {
		isStatic: true
	}
	let ellipse_options = {
		restitution: 0.70,
		frictionAir: 0.01,
		density: 0.001
	}
	let rect1_options = {
		restitution: 0.60,
		frictionAir: 0.01,
		friction: 0.01,
		density: 0.001,
		timeScale: 0.3
	}
	let rect2_options = {
		restitution: 0.20,
		frictionAir: 0.01,
		friction: 0.01,
		density: 0.01
	}
	let obs1_options = {
		isStatic: true
	}
	plane = Bodies.rectangle(400, 700, 800, 5, plane_options);
	block1 = Bodies.circle(100, 100, 40, ellipse_options);
	block2 = Bodies.rectangle(400, 100, 50, 40, rect1_options);
	block3 = Bodies.rectangle(650, 100, 150, 50, rect2_options);
	obs1 = Bodies.rectangle(100, 250, 250, 50, obs1_options);
	obs2 = Bodies.rectangle(700, 250, 250, 50, obs1_options);
	World.add(world, plane);
	World.add(world, block1);
	World.add(world, block2);
	World.add(world, block3);
	World.add(world, obs1);
	World.add(world, obs2);
	rectMode(CENTER);
	ellipseMode(RADIUS);
}

function draw() {
	background(0);
	Engine.update(engine);
	rect(plane.position.x, plane.position.y, 900, 30);
	ellipse(block1.position.x, block1.position.y, 40, 40);
	rect(block2.position.x, block2.position.y, 50, 50);
	rect(block3.position.x, block3.position.y, 150, 50);
	rect(obs1.position.x, obs1.position.y, 250, 10);
	rect(obs2.position.x, obs1.position.y, 250, 10);
}