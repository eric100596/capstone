import html from "html-literal";

export default () => html`
  <div id="instructions1">
    <h3>Instructions</h3>
    <> First, select the number of players for the game. Next, tap the “DEAL”
    button, and allow the website to create a hand for each player. The player
    with the “7-7” card plays first (taps their card causing it to move the
    center of the screen). The player to the left of the person who plays first
    make the next play. This player MUST play a card that matches at least one
    number of ANY of the cards that have been previously played (in this case, a
    card with a “7”). The program will automatically place this card
    perpendicular (to for a “T”) to the first card played. Play then moves to
    the next player (and so on), who again MUST play a card that matches at
    least one number of ANY of the cards that have been previously played.
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <div id="instructions2">
    <h4>Scoring</h4>

    The object of the game is to be the first player to reach 150 points. Points
    are awarded if the numbers on the ends of the cards (OUTSIDE NUMBERS) from
    ANY of the cards equal a multiple of 5. If a play is made that does not
    result in the numbers on the ends of the cards equalling a multiple of 5,
    play just moves to the next player. Each hand is over once one player plays
    his/her last card, at which time ALL OF THE REMAINING CARDS are awarded to
    this player. The nearest multiple of 5 of the sum of ALL of the numbers on
    each of these cards is added to this player’s score. The game will
    automatically reshuffle the cards and deal a new hand to each player. Play
    resumes with the player who played the last card playing ANY card to begin
    the next hand. Play continues until one player’s score reaches 150 points.
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <div id="instructions3">
    <h4>Special Situations</h4>
    <ul>
      <li>
        If a player cannot match ANY of the numbers on the ends of the cards,
        the player MUST either PASS (play passes to the next player), or choose
        a card from the “Boneyard”. If there are no cards in the Boneyard, play
        automatically passes to the next player.
      </li>
      <li>
        Cards with the same number on each side are ALWAYS played sideways
        (perpendicular) to the number it matches. Cards with the same number
        represent the total amount of both numbers (Example: 5 - 5 card has a
        value of 10.
      </li>
      <li>
        If no one has the “7-7” card at the beginning of the game, the player
        with the HIGHEST DOUBLE NUMBER CARD plays first. Play continues with the
        player to the left of this player playing next. Only the FIRST double
        number card can have cards played on all four sides of it.
      </li>
    </ul>
  </div>
`;
