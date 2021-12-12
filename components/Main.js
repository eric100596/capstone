import html from "html-literal";
import * as views from "./views";

export default () => html`
  ${views["About"]()} ${views["Contact"]()} ${views["Strategy"]()}
  ${views["Home"]()} ${views["Instructions"]()}
`;
