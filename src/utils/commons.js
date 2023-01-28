export function onImageInView(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const element = entry.target;
      const imageSrc = element.getAttribute("data-src");

      element.removeAttribute("data-src");
      element.setAttribute("src", imageSrc);

      observer.unobserve(element);
    }
  });
}
