gsap.from(".perfil", { x: -50, opacity: 0, duration: 1 });
gsap.from(".perfil__texto", { x: 100, opacity: 0, duration: 1 });
gsap.from(".tecnologias", {
  scrollTrigger: ".tecnologias", // start the animation when ".box" enters the viewport (once)
  x: 100,
  opacity: 0,
  duration: 1,
});
gsap.from(".proyectos", {
  scrollTrigger: ".proyectos", // start the animation when ".box" enters the viewport (once)
  y: 100,
  opacity: 0,
  duration: 1,
});
