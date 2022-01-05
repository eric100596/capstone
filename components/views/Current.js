import html from "html-literal";

export default () => html`
  <form id="current" method="POST" action="">
    <h2>Statistics</h2>
    <div>
      <label for="playerName">Your name:</label>
      <input
        type="text"
        name="playerName"
        id="playerName"
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
      <label for="gameStatus">Game status:</label>
      <select id="gameStatus" name="gameStatus">
        <option value="">Did you win?</option>
        <option value="win">I won!</option>
        <option value="lost">I lost!</option>
      </select>
    </div>
    <div>
      <label for="score">Score:</label>
      <input
        type="text"
        name="score"
        id="score"
        placeholder="Enter your score"
        required
      />
    </div>
    <input type="submit" name="submit" value="Submit" />
  </form>
`;
