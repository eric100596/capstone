import html from "html-literal";
import logo from "../assets/Dbl7Logo.png";

export default () => html`
  <header>
    <div style="position: relative; top: 130px" ;>
      <section id="pic1" height="200" width="auto">
        <img src="${logo}" />
      </section>

      <h1>DOUBLE-7</h1>
    </div>
    <div style="position: relative; top: 40px" ;>
      <h4>A religious "dominoes-style" card game for all ages!</h4>

      <section id="pic2">
        <img src="${logo}" />
      </section>
    </div>

    <br />
  </header>
`;
