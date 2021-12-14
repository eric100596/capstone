import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "./node_modules/navigo";
import { capitalize } from "lodash";

const router = new Navigo(window.location.origin);

router
  .on({
    "/": () => render(state.Home),
    ":page": params => {
      let page = capitalize(params.page);
      render(state[page]);
    }
  })
  .resolve();

function render(st) {
  document.querySelector("#root").innerHTML = `
    ${Header()}
    ${Nav(state.Links)}
    ${Main()}
    ${Footer()}
  `;
  router.updatePageLinks();
  addEventListeners();
}

render();

function addEventListeners() {
  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );

  // handle form submission with PrintFormOnSubmit module
  // const form = document.querySelector("form");
  // PrintFormOnSubmit(form);
}
