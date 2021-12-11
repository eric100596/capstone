import html from "html-literal";
import * as views from "./views";
import Aboutthisgame from "./views/Aboutthisgame";
import Contact from "./views/Contact";

export default () => html`
  ${views["Aboutthisgame"]()} ${views["Contact"]()} ${views["Strategy"]()}
  ${views["Home"]()} ${views["Instructions"]()}
`;
