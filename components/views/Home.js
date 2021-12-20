import html from "html-literal";

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

// eslint-disable-next-line prettier/prettier
export default (st) => html`
  <section id="Home">
    <h3>
      Temperature in ${st.weather.city} is
      ${kelvinToFahrenheit(st.weather.temp)}F. It feels like
      ${kelvinToFahrenheit(st.weather.temp)}F.
    </h3>
    <div class="boxtop">
      <p>GAME SPACE</p>
    </div>

    <div class="box"></div>
    <br />
    <br />
    <br />
  </section>
`;
