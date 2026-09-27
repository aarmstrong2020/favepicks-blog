const categories = [
  ["Home & Everyday", "Useful finds for daily life."],
  ["Tech & Gadgets", "Practical technology worth considering."],
  ["DIY & Projects", "Tools and ideas for getting things done."],
  ["Digital Products", "Planners, checklists, and guides in development."]
];

const pages = {
  "/": {
    title: "Smart finds. Simple projects.",
    body: `
      <section class="hero">
        <p class="eyebrow">Welcome to FavePicks</p>
        <h1>Good finds for real life.</h1>
        <p>Explore practical product ideas, useful guides, and simple projects. We focus on items that solve everyday problems and offer value for the money.</p>
        <a class="button" href="/categories/">Explore categories</a>
        <a class="text-link" href="/blog/">Read the blog →</a>
      </section>
      <section>
        <p class="eyebrow">Browse by interest</p>
        <h2>Categories</h2>
        <div class="grid">${categoryCards()}</div>
      </section>
      <section class="notice">
        <h2>Independent recommendations</h2>
        <p>FavePicks aims to share useful information in plain language. Some future links may earn us a commission at no additional cost to you.</p>
        <a href="/affiliate-disclosure/">Read our affiliate disclosure →</a>
      </section>`
  },
  "/blog/": {
    title: "Blog",
    body: `
      <h1>FavePicks Blog</h1>
      <p>Product guides, practical ideas, and honest recommendations are coming soon.</p>
      <div class="notice">We’re preparing original articles. Check back for our first published guides.</div>`
  },
  "/categories/": {
    title: "Categories",
    body: `
      <h1>Explore Categories</h1>
      <p>Find ideas organized around the things you use and projects you enjoy.</p>
      <div class="grid">${categoryCards()}</div>`
  },
  "/digital-products/": {
    title: "Digital Products",
    body: `
      <h1>Digital Products</h1>
      <p>We're developing practical planners, checklists, and project guides.</p>
      <div class="notice">These products are in development. There is no checkout or download available yet.</div>
      <a href="/categories/">← Back to categories</a>`
  },
  "/about/": {
    title: "About",
    body: `
      <h1>About FavePicks</h1>
      <p>FavePicks shares practical finds, simple projects, and buying ideas for real budgets.</p>
      <p>Our goal is to make it easier to discover useful products and understand why they may be worth considering.</p>`
  },
  "/contact/": {
    title: "Contact",
    body: `
      <h1>Contact FavePicks</h1>
      <p>Have a question, suggestion, or product idea? Contact details will be added here before the site begins accepting inquiries.</p>`
  },
  "/affiliate-disclosure/": {
    title: "Affiliate Disclosure",
    body: `
      <h1>Affiliate Disclosure</h1>
      <p>FavePicks may earn a commission when you purchase through qualifying affiliate links. This does not add to your purchase price.</p>
      <p>We will identify affiliate relationships where applicable. An affiliate link is not a guarantee that a product is right for you; review its details before buying.</p>`
  },
  "/privacy/": {
    title: "Privacy Policy",
    body: `
      <h1>Privacy Policy</h1>
      <p>This site currently does not provide account registration or checkout. If we add forms, analytics, advertising, or sales features, this policy will be updated to explain what information is collected and how it is used.</p>`
  },
  "/terms/": {
    title: "Terms of Use",
    body: `
      <h1>Terms of Use</h1>
      <p>FavePicks content is provided for general information. Product availability, pricing, and features may change. Confirm details with the seller before purchasing.</p>`
  }
};

function categoryCards() {
  return categories.map(([name, description]) => {
    const href = name === "Digital Products" ? "/digital-products/" : "/blog/";
    return `<a class="card" href="${href}"><h3>${name}</h3><p>${description}</p><span>Explore →</span></a>`;
  }).join("");
}

const css = `
  :root { font-family: Arial, Helvetica, sans-serif; color: #241638; background: #faf8ff; }
  * { box-sizing: border-box; }
  body { margin: 0; line-height: 1.6; }
  a { color: #5b278d; }
  .topbar { background: #29104d; color: #f1d58a; text-align: center; padding: 8px 15px; font-size: 13px; }
  header { background: #fff; border-bottom: 1px solid #e8e1f0; }
  .wrap { max-width: 1120px; margin: auto; padding: 0 22px; }
  .header-inner { min-height: 78px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
  .brand { color: #35106f; font-size: 26px; font-weight: 900; text-decoration: none; letter-spacing: -.7px; }
  .brand span { color: #bd8625; }
  nav { display: flex; flex-wrap: wrap; gap: 20px; }
  nav a { text-decoration: none; font-weight: 700; }
  nav a:hover, .text-link:hover { text-decoration: underline; }
  main { min-height: 60vh; padding-top: 45px; padding-bottom: 80px; }
  h1 { font-size: clamp(36px, 6vw, 64px); line-height: 1.1; color: #35106f; margin: 12px 0 20px; }
  h2 { color: #35106f; font-size: 32px; }
  h3 { color: #35106f; margin-top: 0; }
  p { max-width: 720px; }
  .eyebrow { text-transform: uppercase; color: #a66c18; font-weight: 800; letter-spacing: 2px; font-size: 13px; }
  .hero { padding: 35px 0 70px; }
  .hero > p:not(.eyebrow) { font-size: 20px; }
  .button { display: inline-block; background: #35106f; color: white; padding: 13px 20px; border-radius: 8px; text-decoration: none; font-weight: 700; margin: 12px 18px 12px 0; }
  .text-link { font-weight: 700; text-decoration: none; }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; margin: 25px 0 55px; }
  .card { display: block; padding: 25px; background: white; border: 1px solid #e4dbea; border-radius: 14px; text-decoration: none; box-shadow: 0 5px 18px #35106f0d; }
  .card p { color: #554a62; }
  .card span { color: #8a5813; font-weight: 700; }
  .card:hover { border-color: #ad83d0; transform: translateY(-2px); }
  .notice { background: #f0e8fa; border-left: 5px solid #c29438; border-radius: 8px; padding: 22px 26px; margin: 35px 0; }
  footer { background: #29104d; color: white; padding: 32px 0; }
  footer a { color: #f4d58e; margin-right: 16px; }
  footer p { margin-bottom: 0; }
  @media (max-width: 700px) {
    .header-inner { align-items: flex-start; flex-direction: column; padding-top: 18px; padding-bottom: 18px; }
    nav { gap: 10px 16px; }
    main { padding-top: 28px; }
  }
`;

function layout(page) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${page.title} | FavePicks.blog</title>
  <meta name="description" content="Practical product ideas, simple projects, and useful guides from FavePicks.">
  <style>${css}</style>
</head>
<body>
  <div class="topbar">Independent finds • Practical ideas • Honest recommendations</div>
  <header><div class="wrap header-inner">
    <a class="brand" href="/">Fave<span>Picks</span>.blog</a>
    <nav aria-label="Main navigation">
      <a href="/">Home</a><a href="/blog/">Blog</a><a href="/categories/">Categories</a>
      <a href="/about/">About</a><a href="/contact/">Contact</a>
    </nav>
  </div></header>
  <main class="wrap">${page.body}</main>
  <footer><div class="wrap">
    <strong>FavePicks.blog</strong>
    <p>Smart finds, simple projects, and products worth considering.</p>
    <p><a href="/affiliate-disclosure/">Affiliate Disclosure</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></p>
    <small>© 2026 FavePicks.blog</small>
  </div></footer>
</body>
</html>`;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname === "/" ? "/" : url.pathname.replace(/\/?$/, "/");
    const page = pages[path];

    if (!page) {
      return new Response(layout({
        title: "Page Not Found",
        body: `<h1>Page not found</h1><p>We couldn't find that page.</p><a href="/">Return home</a>`
      }), { status: 404, headers: { "content-type": "text/html; charset=utf-8" } });
    }

    return new Response(layout(page), {
      headers: { "content-type": "text/html; charset=utf-8" }
    });
  }
};
