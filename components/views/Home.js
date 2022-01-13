import html from "html-literal";
import card1 from "../../assets/players/player1.png";
import card2 from "../../assets/players/player2.png";
import card3 from "../../assets/players/player3.png";
import card4 from "../../assets/players/player4.png";
import card5 from "../../assets/players/player5.png";
import card6 from "../../assets/players/computer.png";

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

    <div class="box">
      <div class="p1">
      <img class="cardPicture1" src="${card1}" />
      </div>
      <!-- <div class="p23">
      <img class="cardPicture2" src="${card2}" />
      <img class="cardPicture3" src="${card3}" />
      </div> -->

        <div class="C">
        <img class="cardPicture4" src="${card6}" />
        </div>
        <!-- <div class="p45">
        <img class="cardPicture5" src="${card5}" />
        <img class="cardPicture6" src="${card6}" />
        </div> -->

      </div>
    </div>
    <div class="buttonBar">
      <button>
        <a href="" onClick="alert('Lets play Double 7!')"
        >New Game</a>
      </button>
      <button>
      <a href="" onClick="alert('You can choose up to 6 players!')"
        >Number of Players</a>
      </button>
      <button>
      <a href="" onClick="alert('Here we go!')"
        >Shuffle & Deal</a>

      </button>
    </div>
  </section>
`;
