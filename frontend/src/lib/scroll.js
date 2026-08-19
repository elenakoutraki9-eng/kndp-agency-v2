let lenisInstance = null;

export const setLenis = (l) => {
  lenisInstance = l;
};

export const scrollToId = (id) => {
  const el = document.querySelector(id);
  if (!el) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset: -76, duration: 1.4 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
