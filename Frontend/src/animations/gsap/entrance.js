
import gsap from "gsap";

export function heroEntrance({
  badge,
  title,
  description,
  actions,
  stats,
}) {
  const elements = [
    badge,
    title,
    description,
    actions,
    stats,
  ].filter(Boolean);

  gsap.set(elements, {
    opacity: 0,
    y: 25,
  });

  const timeline = gsap.timeline({
    defaults: {
      duration: 0.7,
      ease: "power3.out",
    },
  });

  timeline.to(elements, {
    opacity: 1,
    y: 0,
    stagger: 0.15,
  });

  return timeline;
}
