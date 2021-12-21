import html from "html-literal";

export default () => html`
<div id="strategy">
    <h3>Strategy</h3>
      The object of the game is to be the first player to reach 150 points. So,
      the order in which cards are played matters. For example, to begin the
      game the “7-7” card must be played (unless it is in the Boneyard). Since
      the total amount of the “7-7” card is 14, the next player should consider
      what number can be added to 14 to result in a multiple of 5 (15 or 20).
      Therefore, if the next player has the “7-1” card, OR the “7-6” card, this
      card should be played at this time. Also, if the second player plays the
      “7-1” card, OR the “ 7-6” card, the third player should play a card on the
      OTHER SIDE of the “7-7” card (to eliminate the 14 points available),
      unless this player can play a card from which 14 can be added to equal a
      multiple of 5. This is considered a defensive play (to reduce the ability
      of the next player to score points).
      <br />
      <br />
      Since you can only play on all four sides of the FIRST DOUBLE NUMBER CARD
      played, players should be cautious about opening up a new side to this
      card. Adding new sides to the first double number card should only be done
      if it is the only play a player has, or if the play will result in the
      numbers on the ends of the cards equaling a multiple of 5.
    </p>
    </div>
`;
