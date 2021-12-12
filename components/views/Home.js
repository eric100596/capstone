import html from "html-literal";
import logo from "../../assets/Dbl7Logo.png";

export default () => html`
  <section id="Home">
    <div class="boxtop">
      <p>GAME SPACE</p>
    </div>

    <div class="box"></div>
    <br />
    <br />
    <br />
    <section>
      <section id="pic1">
        <img src="${logo}" />
      </section>
      <section id="pic2">
        <img src="${logo}" />
      </section>
    </section>
  </section>
`;
