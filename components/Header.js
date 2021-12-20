import html from "html-literal";
import logo from "../assets/Dbl7Logo.png";

export default () => html`
  <header>
    <div>
      <section id="pic1">
        <img src="${logo}" />
      </section>
    </div>
    <div>
      <section id="title">
        <h1>DOUBLE-7</h1>
        <h4>A religious "dominoes-style" card game for all ages!</h4>
      </section>
    </div>

    <div>
      <section id="pic2">
        <img src="${logo}" />
      </section>
    </div>

    <br />
  </header>
`;
