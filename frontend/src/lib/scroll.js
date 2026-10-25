export const scrollToId = (id) => {
  const el = document.querySelector(id);
  if (!el) {
    window.location.href = `/${id}`;
    return;
  }
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: 0, duration: 1.6 });
  else el.scrollIntoView({ behavior: "smooth" });
};
