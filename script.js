function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  const activePage = document.getElementById(pageId);
  activePage.classList.add('active');

  gsap.from(`#${pageId} .card`, {
    duration: 0.8,
    opacity: 0,
    y: 30,
    ease: "power2.out"
  });
}

window.onload = () => {
  gsap.from("#home .card", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power2.out"
  });
};
