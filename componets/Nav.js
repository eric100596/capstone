import html from "html-literal";

export default () => html`
  <nav style="position: relative; top: 60px" ;>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile">
      <a href="Aboutthisgame.html"> About This Game</a>
      <a href="Strategy.html"> Strategy</a>
      <a href="Instructions.html"> Instructions </a>
    </ul>
  </nav>
`;
