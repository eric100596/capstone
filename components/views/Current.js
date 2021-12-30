import html from "html-literal";

export default () => html`
  <form id="current" method="POST" action="">
    <h2>Play a game!</h2>
    <div>
      <label for="playerName">Your name:</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter Your Name"
        required
      />
    </div>
    <div>
      <label for="gameNumber">Game number:</label>
      <input
        type="text"
        name="gameNumber"
        id="gameNumber"
        placeholder="Enter Game Number"
        required
      />
    </div>
    <div>
      <label for="gameStatus">Game Status:</label>
      <select id="gameStatus" name="gameStatus">
        <option value="">Did you win?</option>
        <option value="win">I won!</option>
        <option value="lost">I lost!</option>
      </select>
    </div>
    <input type="hidden" name="playerName" id="playerName" value="<Eric B>" />
    <input type="submit" name="submit" value="Submit Game" />
  </form>
`;
