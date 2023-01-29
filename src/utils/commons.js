import { css } from "styled-components";

export const limitText = css`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  max-width: 100%;
  white-space: pre-wrap;
  word-break: break-word;
`;

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
