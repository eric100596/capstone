import html from "html-literal";

export default st => html`
  <section>
    <div class="site1">
      <a href="http://www.know-ble.com">Check out this website!</a>
    </div>

    <div>
      <p class="p1">Or, complete the form below</p>
      <form action="https://formspree.io/f/mjvlbabl" method="POST">
        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          required
        />

        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="you@somewhere.com"
        />

        <label for="phone">Phone:</label>
        <input type="tel" name="fone" id="fone" />

        <div>
          <br />
          <label for="msg">Enter your message here:</label>
          <br />
          <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
          <br />
          <input type="submit" value="Submit" />
        </div>

        <br />
      </form>
    </div>
  </section>
`;
