gsap.registerPlugin(ScrollTrigger);

const fadeOpen2 = gsap.timeline({ defaults: { duration: .35 } });
fadeOpen2.from(".gsap__title", { opacity: 0, x: -100 })
    .from(".gsap__text", { opacity: 0, x: -100 })
    .from(".head__info > button", { opacity: 0, x: -100 })
    .from(".form", { opacity: 0, y: 100 })
    .from(".founder__img", { opacity: 0, y: 100 })
    .from(".founder__bg", { opacity: 0, y: 100 })