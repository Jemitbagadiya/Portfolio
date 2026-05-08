/* =========================================================
   HERO PARTICLES
========================================================= */

const canvas =
  document.getElementById("heroCanvas");
const ctx =
  canvas.getContext("2d");
let particles = [];
let animFrameId;

/* =========================================================
   RESIZE CANVAS
========================================================= */

function resize() {
  canvas.width =
    canvas.offsetWidth;
  canvas.height =
    canvas.offsetHeight;
}

/* =========================================================
   PARTICLE CLASS
========================================================= */

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x =
      Math.random() * canvas.width;
    this.y =
      Math.random() * canvas.height;
    this.vx =
      (Math.random() - 0.5) * 0.3;
    this.vy =
      (Math.random() - 0.5) * 0.3;
    this.r =
      Math.random() * 1.5 + 0.5;
    this.alpha =
      Math.random() * 0.4 + 0.1;
    this.color =
      Math.random() > 0.5
        ? "#00d4aa"
        : "#7b61ff";
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (
      this.x < 0 ||
      this.x > canvas.width ||
      this.y < 0 ||
      this.y > canvas.height
    ) {
      this.reset();
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(
      this.x,
      this.y,
      this.r,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.alpha;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

/* =========================================================
   INIT PARTICLES
========================================================= */

function initParticles() {
  particles = [];
  const count =
    Math.floor(
      (canvas.width * canvas.height) /
      6000
    );
  for (
    let i = 0;
    i < Math.min(count, 120);
    i++
  ) {
    particles.push(new Particle());
  }
}

/* =========================================================
   CONNECT PARTICLES
========================================================= */

function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (
      let j = i + 1;
      j < particles.length;
      j++
    ) {
      const dx =
        particles[i].x - particles[j].x;
      const dy =
        particles[i].y - particles[j].y;
      const dist =
        Math.sqrt(dx * dx + dy * dy);

      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(
          particles[i].x,
          particles[i].y
        );
        ctx.lineTo(
          particles[j].x,
          particles[j].y
        );
        ctx.strokeStyle = "#00d4aa";
        ctx.globalAlpha =
          (1 - dist / 100) * 0.08;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    }
  }
}

/* =========================================================
   ANIMATE
========================================================= */

function animateParticles() {
  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );
  particles.forEach((p) => {
    p.update();
    p.draw();
  });
  connectParticles();
  animFrameId =
    requestAnimationFrame(
      animateParticles
    );
}

/* =========================================================
   OBSERVER
========================================================= */

const resizeObserver =
  new ResizeObserver(() => {
    resize();
    initParticles();
  });
resizeObserver.observe(
  canvas.parentElement
);
resize();
initParticles();
animateParticles();