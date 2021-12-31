import html from "html-literal";

export default st => html`
  <table id="games">
    <tr>
      <th>PlayerName</th>
      <th>GameNumber</th>
      <th>GameStatus</th>
      <th>Score</th>
    </tr>
    ${st.games
      .map(game => {
        return `<tr><td>${game.playerName}</td><td>${game.gameNumber}</td><td>${game.Status}</td><td>${game.score}</td></tr>`;
      })
      .join("")}
  </table>
`;
