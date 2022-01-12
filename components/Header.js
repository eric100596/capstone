import html from "html-literal";
import logo from "../assets/Dbl7Logo.png";

export default () => html`
  <header>
    <div class="title-bar">
      <img class="title-img" src="${logo}" />
      <section id="title">
        <h1>DOUBLE-7</h1>
        <h3>A religious "dominoes-style" card game for all ages!</h3>
      </section>

      <img class="title-img" src="${logo}" />
    </div>
    <br />
  </header>
`;
