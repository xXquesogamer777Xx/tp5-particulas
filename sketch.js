let particles = [];

class EnergyParticle {
    constructor(angle) {
        this.angle = angle;
        this.radius = random(100, 200);
        this.size = random(10, 20);
        this.speed = random(0.01, 0.05);
        this.color = color(random(100, 255), random(100, 255), random(100, 255));
    }

    move() {
        this.angle += this.speed;
        if (this.angle > TWO_PI) {
            this.angle -= TWO_PI;
        }
    }

    display() {
        let x = width / 2 + this.radius * cos(this.angle);
        let y = height / 2 + this.radius * sin(this.angle);
        fill(this.color);
        noStroke();
        ellipse(x, y, this.size, this.size);
    }
}

function setup() {
    createCanvas(800, 600);
    background(255);
    for (let i = 0; i < 50; i++) {
        let angle = random(0, TWO_PI);
        particles.push(new EnergyParticle(angle));
    }
}

function draw() {
    background(255);
    for (let particle of particles) {
        particle.move();
        particle.display();
    }
    if (frameCount >= 360) {
        noLoop();
    }
}
