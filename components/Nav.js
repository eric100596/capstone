import links from "../store/Links";

export default links => `
  <nav
  <style="position: relative; top: 60px";>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile">
      ${Links.map(
        link => `<li><a href="/${link.title}" data-navigo>${link.text}</a></li>`
      ).join("")}
    </ul>
  </nav>
`;
