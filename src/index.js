const categories = [
  ["⌂", "Home & Kitchen", "Comfort, storage & everyday helpers", "/blog/"],
  ["⌁", "Tech & Gadgets", "Useful tech without the guesswork", "/blog/"],
  ["✦", "Beauty & Self-Care", "Practical routines & thoughtful finds", "/blog/"],
  ["♡", "Family & Kids", "Ideas for busy households", "/blog/"],
  ["↗", "Car & Travel", "Stay prepared on the move", "/blog/"],
  ["⚒", "DIY & Tools", "Tools and projects made approachable", "/blog/"],
  ["●", "Pets", "Helpful picks for happier companions", "/blog/"],
  ["$", "Under $25", "Affordable finds worth buying", "/blog/"],
  ["▣", "Digital Products", "Practical downloads & simple guides", "/digital-products/"]
];

const articlePreviews = [
  ["Smart Finds", "25 Amazon Finds You’ll Wish You Bought Sooner",
    "Everyday problem-solvers selected for usefulness—not novelty alone."],
  ["Affordable Finds", "20 Amazing Finds Under $25 That Are Actually Useful",
    "Budget-friendly ideas that can earn their place in your home."],
  ["DIY & Tools", "12 Must-Have Tools for DIY Projects",
    "A practical starter list for repairs, upgrades, and weekend projects."]
];

function categoryGrid() {
  return `<div class="category-grid">${categories.map(([icon, name, detail, href]) => `
    <a class="category-card" href="${href}">
      <span class="category-icon">${icon}</span>
      <h3>${name}</h3>
      <p>${detail}</p>
      <span class="card-arrow">Explore →</span>
    </a>`).join("")}</div>`;
}

const pages = {
  "/": {
    title: "Smart Finds & Simple Projects",
    description: "Practical product recommendations, affordable home finds, and simple DIY ideas worth sharing.",
    body: `
      <section class="hero">
        <div class="container hero-grid">
          <div>
            <span class="eyebrow">Welcome to FavePicks</span>
            <h1>Good finds for real life.</h1>
            <p>We sort through the noise to share useful products, clever ideas, and simple projects that make everyday life easier, more organized, and more enjoyable.</p>
            <div class="actions">
              <a class="button button-gold" href="/blog/">Explore the latest finds →</a>
              <a class="button button-outline" href="/categories/">Browse categories</a>
            </div>
          </div>
          <aside class="hero-feature">
            <div class="feature-price">$25</div>
            <h2>Smart doesn’t have to mean expensive.</h2>
            <p>Our Under $25 collection focuses on affordable items with a practical purpose—not clutter for the sake of a trend.</p>
            <a href="/blog/">See affordable finds →</a>
          </aside>
        </div>
      </section>

      <section class="section container">
        <div class="section-heading">
          <div>
            <span class="eyebrow">Find your next favorite</span>
            <h2>Shop ideas by category</h2>
            <p>From useful home upgrades to practical gear, start with what matters to you.</p>
          </div>
          <a class="section-link" href="/categories/">View all categories →</a>
        </div>
        ${categoryGrid()}
      </section>

      <section class="section articles">
        <div class="container">
          <div class="section-heading">
            <div>
              <span class="eyebrow">Coming to the blog</span>
              <h2>Useful reads in the works</h2>
              <p>Our first guides are being carefully researched. We’ll publish recommendations only when there’s something useful to say.</p>
            </div>
            <a class="section-link" href="/blog/">Visit the blog →</a>
          </div>
          <div class="article-grid">${articlePreviews.map(([tag, title, description]) => `
            <article class="article-card">
              <span class="eyebrow">${tag}</span>
              <h3>${title}</h3>
              <p>${description}</p>
              <a href="/blog/">Preview the guide →</a>
            </article>`).join("")}</div>
        </div>
      </section>

      <section class="promise">
        <div class="container promise-grid">
          <div>
            <span class="eyebrow">Our promise</span>
            <h2>Recommendations should save time—not waste it.</h2>
            <p>FavePicks exists to make product research feel simpler and more useful. When affiliate links are added, they will be clearly disclosed.</p>
            <a class="button button-light" href="/about/">How we choose</a>
          </div>
          <div class="promise-list">
            <div><strong>✓ Practical first</strong><p>We focus on products and ideas that solve real, everyday problems.</p></div>
            <div><strong>✓ Clear about partnerships</strong><p>Affiliate relationships are disclosed plainly so readers can make informed choices.</p></div>
            <div><strong>✓ Made for real budgets</strong><p>Our coverage includes affordable options—not only premium picks.</p></div>
          </div>
        </div>
      </section>`
  },

  "/blog/": {
    title: "Blog",
    description: "Upcoming FavePicks product guides and practical ideas.",
    body: `
      <section class="page-intro container">
        <span class="eyebrow">FavePicks Blog</span>
        <h1>Useful reads in the works.</h1>
        <p>Our first guides are being researched. These are previews, not published product reviews or buying recommendations.</p>
        <div class="article-grid">${articlePreviews.map(([tag, title, description]) => `
          <article class="article-card"><span class="eyebrow">${tag}</span>
            <h3>${title}</h3><p>${description}</p><span class="coming-soon">Coming soon</span>
          </article>`).join("")}</div>
      </section>`
  },

  "/categories/": {
    title: "Categories",
    description: "Browse FavePicks categories, including digital products.",
    body: `
      <section class="page-intro container">
        <span class="eyebrow">Browse by interest</span>
        <h1>Explore categories.</h1>
        <p>Start with the things you use every day and the projects you enjoy.</p>
        ${categoryGrid()}
      </section>`
  },

  "/digital-products/": {
    title: "Digital Products",
    description: "Practical FavePicks digital downloads and guides in development.",
    body: `
      <section class="page-intro container">
        <span class="eyebrow">Digital Products</span>
        <h1>Practical tools you can use.</h1>
        <p>We’re developing planners, checklists, and simple project guides designed to make everyday tasks easier.</p>
        <div class="info-box">
          <h2>In development</h2>
          <p>Digital products are not available for purchase or download yet. We’ll add details when they’re ready.</p>
        </div>
        <a class="section-link" href="/categories/">← Back to categories</a>
      </section>`
  },

  "/about/": {
    title: "About",
    description: "Learn how FavePicks approaches useful product ideas.",
    body: `
      <section class="page-intro container narrow">
        <span class="eyebrow">About FavePicks</span>
        <h1>Useful ideas without the noise.</h1>
        <p>FavePicks shares smart finds, simple projects, and products worth considering. We focus on practical value and clear explanations.</p>
        <p>We won’t present a product as tested or personally recommended unless that claim is true. When we add affiliate links, we’ll disclose them clearly.</p>
      </section>`
  },

  "/contact/": {
    title: "Contact",
    description: "Contact FavePicks.",
    body: `
      <section class="page-intro container narrow">
        <span class="eyebrow">Contact</span>
        <h1>Get in touch.</h1>
        <p>Have a question or an idea for FavePicks? Contact information will be added before we begin accepting inquiries through this site.</p>
      </section>`
  },

  "/affiliate-disclosure/": {
    title: "Affiliate Disclosure",
    description: "FavePicks affiliate disclosure.",
    body: `
      <section class="page-intro container narrow">
        <h1>Affiliate Disclosure</h1>
        <p>Some future links on FavePicks may be affiliate links. If you purchase through one, we may earn a commission at no additional cost to you.</p>
        <p>We will identify affiliate relationships where applicable. Product details and prices should always be confirmed with the seller before purchase.</p>
      </section>`
  },

  "/privacy/": {
    title: "Privacy Policy",
    description: "FavePicks privacy information.",
    body: `
      <section class="page-intro container narrow">
        <h1>Privacy Policy</h1>
        <p>This version of FavePicks does not offer accounts, checkout, or a contact form. If we add those features, analytics, or advertising, we will update this page to explain how information is collected and used.</p>
      </section>`
  },

  "/terms/": {
    title: "Terms of Use",
    description: "FavePicks terms of use.",
    body: `
      <section class="page-intro container narrow">
        <h1>Terms of Use</h1>
        <p>Content on FavePicks is provided for general information. Availability, prices, and product features can change. Confirm current details with the seller before buying.</p>
      </section>`
  }
};

const css = `
:root{font-family:Arial,Helvetica,sans-serif;color:#231339;background:#fff}
*{box-sizing:border-box}
body{margin:0;line-height:1.65}
a{color:#542396}
.container{width:min(1140px,calc(100% - 40px));margin:auto}
.topbar{background:#260b4d;color:#f5d27c;text-align:center;padding:9px 15px;font-size:13px;font-weight:700}
.site-header{background:#fff;border-bottom:1px solid #eae3f1}
.header-inner{min-height:82px;display:flex;align-items:center;justify-content:space-between;gap:24px}
.brand{font-size:27px;line-height:1;font-weight:900;letter-spacing:-1px;text-decoration:none;color:#35106f;white-space:nowrap}
.brand em{font-style:normal;color:#c59127}
.nav{display:flex;flex-wrap:wrap;gap:24px}
.nav a{color:#35106f;text-decoration:none;font-weight:700}
.nav a:hover,.section-link:hover{text-decoration:underline}
h1,h2,h3{color:#35106f;line-height:1.15}
h1{font-size:clamp(42px,5vw,72px);letter-spacing:-2px;margin:17px 0 23px}
h2{font-size:clamp(30px,3vw,43px);letter-spacing:-1px;margin:12px 0}
h3{font-size:23px;margin:12px 0}
p{margin-top:0}
.eyebrow{display:inline-block;color:#a4680b;text-transform:uppercase;letter-spacing:2px;font-size:12px;font-weight:900}
.hero{background:linear-gradient(135deg,#f5efff,#fff9eb);padding:72px 0}
.hero-grid{display:grid;grid-template-columns:1.3fr .75fr;gap:56px;align-items:center}
.hero p{font-size:19px;max-width:650px}
.hero-feature{background:#35106f;color:#fff;border-radius:20px;padding:35px;box-shadow:0 20px 45px #250b4824}
.hero-feature h2{color:#fff;font-size:31px}
.hero-feature p{font-size:16px}
.hero-feature a{color:#f6d277;font-weight:800}
.feature-price{font-size:44px;color:#f6d277;font-weight:900}
.actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}
.button{display:inline-block;padding:13px 22px;border-radius:9px;text-decoration:none;font-weight:800}
.button-gold{background:#d69e32;color:#27103d}
.button-outline{border:2px solid #35106f;color:#35106f}
.button-light{background:#fff;color:#35106f;margin-top:10px}
.section{padding:78px 0}
.section-heading{display:flex;justify-content:space-between;align-items:end;gap:25px;margin-bottom:30px}
.section-heading p{max-width:620px;color:#62586b}
.section-link{white-space:nowrap;font-weight:800;text-decoration:none}
.category-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.category-card{padding:25px;background:#fff;border:1px solid #e9e0f0;border-radius:14px;text-decoration:none;box-shadow:0 6px 20px #35106f0b}
.category-card:hover,.article-card:hover{border-color:#cba1e2;transform:translateY(-2px)}
.category-icon{display:inline-grid;place-items:center;width:43px;height:43px;border-radius:10px;background:#f2e9fb;color:#6126a0;font-size:23px}
.category-card h3{font-size:19px}
.category-card p{color:#5d5368;margin-bottom:8px}
.card-arrow{font-size:13px;font-weight:800;color:#a26710}
.articles{background:#faf7fd}
.article-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:30px}
.article-card{padding:30px;background:#fff;border:1px solid #e9e0f0;border-radius:15px}
.article-card p{color:#62586b}
.article-card a,.coming-soon{font-weight:800}
.promise{background:#35106f;color:#fff;padding:75px 0}
.promise h2{color:#fff}
.promise .eyebrow{color:#f2c66a}
.promise-grid{display:grid;grid-template-columns:1fr 1fr;gap:70px}
.promise-list>div{padding:15px 0;border-bottom:1px solid #ffffff33}
.promise-list strong{font-size:18px}
.promise-list p{color:#eee4f7;margin:5px 0}
.page-intro{padding:70px 0 100px;min-height:58vh}
.page-intro>p{max-width:760px;font-size:18px;color:#574b64}
.page-intro .category-grid{margin-top:36px}
.narrow{max-width:850px}
.info-box{background:#f6effc;border-left:5px solid #d39a2c;border-radius:8px;padding:22px 28px;margin:32px 0}
.info-box h2{font-size:25px}
.site-footer{background:#210a41;color:#fff;padding:48px 0 24px}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:30px}
.footer-grid h3{color:#fff;font-size:16px}
.footer-grid a{display:block;color:#f2d286;text-decoration:none;margin:7px 0}
.footer-grid p{color:#dfd4e9}
.copyright{border-top:1px solid #ffffff27;margin-top:30px;padding-top:20px;font-size:13px;color:#d9cbe7}
@media(max-width:800px){
 .header-inner{align-items:flex-start;flex-direction:column;padding:20px 0}
 .nav{gap:10px 18px}
 .hero-grid,.promise-grid{grid-template-columns:1fr}
 .category-grid,.article-grid{grid-template-columns:repeat(2,1fr)}
 .section-heading{align-items:start;flex-direction:column}
}
@media(max-width:560px){
 .category-grid,.article-grid,.footer-grid{grid-template-columns:1fr}
 .hero{padding:45px 0}
 .section{padding:55px 0}
 h1{letter-spacing:-1px}
}
`;

function render(page) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${page.title} | FavePicks.blog</title>
<meta name="description" content="${page.description}">
<style>${css}</style>
</head>
<body>
<div class="topbar">Independent finds • Practical ideas • Honest recommendations</div>
<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="/" aria-label="FavePicks home">Fave<em>Picks</em>.blog</a>
    <nav class="nav" aria-label="Main navigation">
      <a href="/">Home</a><a href="/blog/">Blog</a>
      <a href="/categories/">Categories</a><a href="/about/">About</a>
      <a href="/contact/">Contact</a>
    </nav>
  </div>
</header>
<main>${page.body}</main>
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div><div class="brand" style="color:white">Fave<em>Picks</em>.blog</div>
        <p>Smart finds, simple projects, and products worth buying.</p></div>
      <div><h3>Explore</h3><a href="/blog/">Blog</a>
        <a href="/categories/">Categories</a><a href="/about/">About</a>
        <a href="/contact/">Contact</a></div>
      <div><h3>Information</h3>
        <a href="/affiliate-disclosure/">Affiliate Disclosure</a>
        <a href="/privacy/">Privacy Policy</a><a href="/terms/">Terms of Use</a></div>
    </div>
    <div class="copyright">© 2026 FavePicks.blog. All rights reserved.</div>
  </div>
</footer>
</body>
</html>`;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname === "/" ? "/" : url.pathname.replace(/\/?$/, "/");
    const page = pages[path];

    if (!page) {
      return new Response(render({
        title: "Page Not Found",
        description: "This FavePicks page could not be found.",
        body: `<section class="page-intro container"><h1>Page not found</h1>
               <p>We couldn't find that page.</p><a href="/">Return home →</a></section>`
      }), {
        status: 404,
        headers: { "content-type": "text/html; charset=utf-8" }
      });
    }

    return new Response(render(page), {
      headers: { "content-type": "text/html; charset=utf-8" }
    });
  }
};
