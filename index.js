/* eslint-disable no-prototype-builtins */
import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import axios from "axios";

import Navigo from "navigo";
import { capitalize } from "lodash";

import dotenv from "dotenv";
dotenv.config();

const router = new Navigo(window.location.origin);

function render(st) {
  // console.log(st);
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
  `;
  router.updatePageLinks();
  addEventListeners(st);
}

function addEventListeners(st) {
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
      render(state[event.target.title]);
    })
  );

  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );

  // console.log(st.view);
  if (st.view === "Current") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const requestData = {
        playerName: inputList.playerName.value,
        gameNumber: inputList.gameNumber.value,
        gameStatus: inputList.gameStatus.value,
        score: inputList.score.value
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.YOUR_GAME_API_URL}`, requestData)
        .then(response => {
          // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          state.Game.games.push(response.data);
          router.navigate("/Game");
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}

router.hooks({
  before: (done, params) => {
    // console.log("router hooks before it fired");
    // console.log(params.page);
    const page =
      params && params.hasOwnProperty("page")
        ? capitalize(params.page)
        : "Home";

    if (page === "Home") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st.%20louis`
        )
        .then(response => {
          state.Home.weather = {};
          state.Home.weather.city = response.data.name;
          state.Home.weather.temp = response.data.main.temp;
          state.Home.weather.feelsLike = response.data.main.feels_like;
          state.Home.weather.description = response.data.weather[0].main;
          done();
        })
        .catch(err => console.log(err));
    }
    console.log(page);
    if (page === "Game") {
      axios
        .get(`${process.env.YOUR_GAME_API_URL}`)
        .then(response => {
          state.Game.games = response.data;
          done();
        })
        .catch(error => {
          console.log("Not good", error);
        });
      console.log(state.Game.games);
    }
  }
});

router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)])
  })
  .resolve();

function initGame() {
  let deck = [
    { sideA: 0, sideB: 0 },
    { sideA: 0, sideB: 1 },
    { sideA: 0, sideB: 2 },
    { sideA: 0, sideB: 3 },
    { sideA: 0, sideB: 4 },
    { sideA: 0, sideB: 5 },
    { sideA: 0, sideB: 6 },
    { sideA: 0, sideB: 7 },
    { sideA: 1, sideB: 1 },
    { sideA: 1, sideB: 2 },
    { sideA: 1, sideB: 3 },
    { sideA: 1, sideB: 4 },
    { sideA: 1, sideB: 5 },
    { sideA: 1, sideB: 6 },
    { sideA: 1, sideB: 7 },
    { sideA: 2, sideB: 2 },
    { sideA: 2, sideB: 3 },
    { sideA: 2, sideB: 4 },
    { sideA: 2, sideB: 5 },
    { sideA: 2, sideB: 6 },
    { sideA: 2, sideB: 7 },
    { sideA: 3, sideB: 3 },
    { sideA: 3, sideB: 4 },
    { sideA: 3, sideB: 5 },
    { sideA: 3, sideB: 6 },
    { sideA: 3, sideB: 7 },
    { sideA: 4, sideB: 4 },
    { sideA: 4, sideB: 5 },
    { sideA: 4, sideB: 6 },
    { sideA: 4, sideB: 7 },
    { sideA: 5, sideB: 5 },
    { sideA: 5, sideB: 6 },
    { sideA: 5, sideB: 7 },
    { sideA: 6, sideB: 6 },
    { sideA: 6, sideB: 7 },
    { sideA: 7, sideB: 7 }
  ];
}

//shuffle cards (random function)
//deal one card of player's hand, then...
//deal one card of computer's hand (repeat until each player has 9 cards)
//remaining cards are assigned to the boneyard (randomly)
//highest double of either player's hand is identified
//first card played is 7-7, or highest double from either hand
//the player the double is taken from has one less card
//next play must match the number of the double
//card is placed perpendicular to double
