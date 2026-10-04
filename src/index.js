const categories = [
  ["⌂", "Home & Kitchen", "Comfort, storage & everyday helpers", "/categories/home-kitchen/"],
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
    "Practical finds for kitchen prep, home organization, and life on the go.",
    "/blog/25-amazon-finds-youll-wish-you-bought-sooner/"],
  ["Affordable Finds", "20 Amazing Finds Under $25 That Are Actually Useful",
    "Budget-friendly ideas that can earn their place in your home."],
  ["DIY & Tools", "12 Must-Have Tools for DIY Projects",
    "A practical starter list for repairs, upgrades, and weekend projects."]
];

function articleCards() {
  return `<div class="article-grid">${articlePreviews.map(([tag, title, description, href]) => `
    <article class="article-card">
      <span class="eyebrow">${tag}</span>
      <h3>${href ? `<a href="${href}">${title}</a>` : title}</h3>
      <p>${description}</p>
      ${href ? `<a href="${href}">Read the guide →</a>` : '<span class="coming-soon">Coming soon</span>'}
    </article>`).join("")}</div>`;
}

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
              <span class="eyebrow">From the blog</span>
              <h2>Useful reads for everyday life</h2>
              <p>Explore our latest guide, with more practical finds coming soon.</p>
            </div>
            <a class="section-link" href="/blog/">Visit the blog →</a>
          </div>
          ${articleCards()}
        </div>
      </section>

      <section class="promise">
        <div class="container promise-grid">
          <div>
            <span class="eyebrow">Our promise</span>
            <h2>Recommendations should save time—not waste it.</h2>
            <p>FavePicks exists to make product research feel simpler and more useful. Affiliate links are clearly disclosed.</p>
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
    description: "FavePicks product guides, everyday Amazon finds, and practical ideas.",
    body: `
      <section class="page-intro container">
        <span class="eyebrow">FavePicks Blog</span>
        <h1>Useful finds for everyday life.</h1>
        <p>Explore our latest guide below. Future guides are marked coming soon.</p>
        ${articleCards()}
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
        <p>We won’t present a product as tested or personally recommended unless that claim is true. We disclose affiliate links clearly.</p>
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
        <p>Some links on FavePicks are affiliate links. If you purchase through one, we may earn a commission at no additional cost to you.</p>
        <p>We identify affiliate relationships where applicable. Product details and prices should always be confirmed with the seller before purchase.</p>
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

pages["/categories/home-kitchen/"] = {
  title: "Home & Kitchen",
  description: "Useful home and kitchen finds, organization ideas, and everyday helpers from FavePicks.",
  body: `<section class="page-intro container">
    <span class="eyebrow">Home &amp; Kitchen</span>
    <h1>Small finds for everyday life.</h1>
    <p>Explore practical ideas for kitchen prep, household organization, and the little tasks that fill your day.</p>
    <div class="article-grid"><article class="article-card">
      <span class="eyebrow">Smart Finds</span>
      <h2 style="font-size:23px"><a href="/blog/25-amazon-finds-youll-wish-you-bought-sooner/">25 Amazon Finds You’ll Wish You Bought Sooner</a></h2>
      <p>Practical finds for kitchen prep, home organization, and life on the go.</p>
      <a href="/blog/25-amazon-finds-youll-wish-you-bought-sooner/">Read the guide →</a>
    </article></div>
    <p style="margin-top:30px"><a href="/categories/">← All categories</a></p>
  </section>`
};

pages["/blog/25-amazon-finds-youll-wish-you-bought-sooner/"] = {
  title: "25 Amazon Finds You’ll Wish You Bought Sooner",
  description: "Discover 25 practical Amazon finds for kitchen prep, home organization, cleaning, and car essentials, with tips to help you choose what fits your routine.",
  body: `<article class="page-intro container narrow post">
<nav aria-label="Breadcrumb"><a href="/blog/">Blog</a> / <a href="/categories/home-kitchen/">Home &amp; Kitchen</a></nav>
<h1>25 Amazon Finds You’ll Wish You Bought Sooner</h1>
<p>You know those little annoyances you keep putting up with? The charger that falls behind the nightstand. The crumbs beside the stove that you pretend aren’t there. The cabinet you open carefully because something might fall out.</p>
<p>Those are the kinds of problems this list is here to solve.</p>
<p>At FavePicks, I’m drawn to practical finds that make everyday life a little easier. These 25 Amazon finds are worth a look if you love a cleaner kitchen, a more organized home, or simply having fewer tiny things to deal with.</p>
<p class="info-box">This post contains affiliate links. If you purchase through them, I may earn a commission at no extra cost to you. As an Amazon Associate, I earn from qualifying purchases.</p>
<h2>For the kitchen tasks that somehow never end</h2>
<h3>1. A vegetable chopper with a catch container</h3>
<p>Sometimes deciding what to cook is easy. Finding the motivation to chop everything is another story. A vegetable chopper can help with that pile of onions and peppers waiting between you and dinner, while the container keeps the pieces together. I’d look for one that comes apart easily for cleaning—because nobody needs dinner prep to create another project.</p>
<p><a class="button button-gold" href="https://amzn.to/4AESLTH" target="_blank" rel="sponsored nofollow noopener noreferrer">View on Amazon →</a></p>
<h3>2. Magnetic measuring spoons</h3>
<p>Why does the measuring spoon you need always seem to be the one that’s missing? Magnetic spoons nest together neatly, and you can pull out just the size you need. Look for a set with narrow ends if you’re tired of trying to squeeze a round spoon into a spice jar.</p>
<p><a class="button button-gold" href="https://amzn.to/4ymy9OE" target="_blank" rel="sponsored nofollow noopener noreferrer">View on Amazon →</a></p>
<h3>3. Silicone air fryer liners</h3>
<p>The air fryer makes dinner easier, but scrubbing the basket afterward can take some of the excitement out of it. A reusable silicone liner can help contain messy drips and crumbs. Just choose one that fits your model and follows the appliance’s instructions, so you still get proper airflow.</p>
<p><a class="button button-gold" href="https://amzn.to/3TbQejb" target="_blank" rel="sponsored nofollow noopener noreferrer">View on Amazon →</a></p>
<h3>4. A mini food chopper</h3>
<p>There’s a point where chopping garlic by hand feels tedious, but dragging out a full-size food processor feels excessive. That’s where a mini chopper makes sense. If you regularly need a little chopped onion, herbs, or a quick sauce, this could earn a convenient spot in your kitchen.</p>
<p><a class="button button-gold" href="https://amzn.to/4yet0Ie" target="_blank" rel="sponsored nofollow noopener noreferrer">View on Amazon →</a></p>
<h3>5. A clip-on pot strainer</h3>
<p>If your colander lives under three mixing bowls, you already understand the appeal here. A clip-on strainer attaches to compatible pots so you can drain them without digging through the cabinet. Check the fit before buying, especially if your favorite pot has a thick rim.</p>
<p><a class="button button-gold" href="https://amzn.to/4hxcKea" target="_blank" rel="sponsored nofollow noopener noreferrer">View on Amazon →</a></p>
<h3>6. A digital food scale</h3>
<p>A kitchen scale might sound like something you only need for serious baking, but it’s handy for everyday cooking, too. You can measure ingredients straight into a bowl or divide a batch of meal prep more evenly. I’d choose a slim, easy-to-wipe model that won’t fight for space in the drawer.</p>
<p><a class="button button-gold" href="https://amzn.to/47nVEe2" target="_blank" rel="sponsored nofollow noopener noreferrer">View on Amazon →</a></p>
<h3>7. Stove gap covers</h3>
<p>That tiny space between the stove and the counter catches an impressive amount of food for something so narrow. Gap covers help keep crumbs from disappearing down there in the first place. It’s a simple idea, but if you’ve ever tried cleaning that space with a butter knife and a paper towel, you get it.</p>
<p><a class="button button-gold" href="https://amzn.to/4xQ5EaW" target="_blank" rel="sponsored nofollow noopener noreferrer">View on Amazon →</a></p>
<h3>8. An adjustable under-sink organizer</h3>
<p>Opening the cabinet under the sink shouldn’t require moving six bottles to reach the one in the back. An organizer can give cleaning supplies a more useful home and make it easier to see what you already have. Measure around the pipes first—that awkward plumbing gets a vote in what fits.</p>
<p><a class="button button-gold" href="https://amzn.to/4yhcx63" target="_blank" rel="sponsored nofollow noopener noreferrer">View on Amazon →</a></p>
<h3>9. Reusable food storage bags</h3>
<p>Half an onion, leftover snacks, a few pieces of fruit—there’s always something small that needs storing. Reusable bags are worth considering if you reach for disposable ones all day. My priority would be choosing bags that are easy to open, wash, and dry, because convenience matters just as much as the idea behind them.</p>
<p><a class="button button-gold" href="https://amzn.to/4d6y74W" target="_blank" rel="sponsored nofollow noopener noreferrer">View on Amazon →</a></p>
<h2>For a home that’s easier to keep up with</h2>
<h3>10. A reusable pet hair remover</h3>
<p>You can love your pet completely and still wish their fur would stop becoming part of the furniture. A reusable pet hair roller is handy for quick couch cleanups when you don’t feel like getting the vacuum out. Check which fabrics it’s designed for, then keep it close to your pet’s favorite lounging spot.</p>
<p><a class="button button-gold" href="https://amzn.to/3VebUf6" target="_blank" rel="sponsored nofollow noopener noreferrer">View on Amazon →</a></p>
<h3>11. Microfiber cleaning cloths</h3>
<p>This is one of the least flashy things on the list, but having a clean cloth within reach makes small messes easier to handle. Keep a few where spills actually happen instead of storing every cloth in one cupboard. Different colors are also useful for keeping bathroom cloths separate from kitchen ones.</p>
<p><a class="button button-gold" href="https://amzn.to/4yk4S6W" target="_blank" rel="sponsored nofollow noopener noreferrer">View on Amazon →</a></p>
<h3>12. Rechargeable under-cabinet lights</h3>
<p>Some corners of the house seem determined to stay dark, even with the room lights on. Rechargeable lights can add useful illumination beneath a kitchen cabinet or along a shelf. Before choosing a set, think about how easily you can reach them for charging—that’s the detail you’ll care about later.</p>
<p><a class="button button-gold" href="https://amzn.to/4jv0MUZ" target="_blank" rel="sponsored nofollow noopener noreferrer">View on Amazon →</a></p>
<h3>13. A handheld vacuum</h3>
<p>Crumbs on the couch. Dirt on the car floor. Whatever that is under the booster seat. A handheld vacuum makes sense for the small messes that show up constantly. I’d pay attention to the attachments and how easy the dust bin is to empty, especially if you plan to use it in the car.</p>
<p><a class="button button-gold" href="https://amzn.to/4hkmLfZ" target="_blank" rel="sponsored nofollow noopener noreferrer">View on Amazon →</a></p>
<h3>14. A long-handled shower scrubber</h3>
<p>Cleaning the shower involves more bending and reaching than anyone really wants from a household chore. A long-handled scrubber can help you reach the walls and tub floor more comfortably. Look for a brush head suited to your surfaces and replacement heads you can actually find when you need them.</p>
<p><a class="button button-gold" href="https://amzn.to/4hrGXeF" target="_blank" rel="sponsored nofollow noopener noreferrer">View on Amazon →</a></p>
<h3>15. A sink caddy</h3>
<p>When the sponge, dish brush, and soap are all competing for the same few inches beside the faucet, the sink starts looking messy fast. A caddy gives the smaller items somewhere to go. Choose one with drainage and easy access for cleaning so it doesn’t become another grubby thing beside the sink.</p>
<p><a class="button button-gold" href="https://amzn.to/3TeHpFg" target="_blank" rel="sponsored nofollow noopener noreferrer">View on Amazon →</a></p>
<h3>16. Adhesive cord clips</h3>
<p>Reaching behind the nightstand for your charger is a surprisingly irritating way to end the day. Cord clips help keep the cable where you left it, whether that’s beside the bed or on your desk. Check that the clips fit your cords and that the adhesive is suitable for the surface.</p>
<p><a class="button button-gold" href="https://amzn.to/4huHHjn" target="_blank" rel="sponsored nofollow noopener noreferrer">View on Amazon →</a></p>
<h3>17. Darkness-activated night lights</h3>
<p>Nobody enjoys turning on a bright overhead light during a middle-of-the-night bathroom trip. A darkness-activated night light can give you a little light where you need it. Think about placement before buying so it lights your path without shining straight into the bedroom.</p>
<p><a class="button button-gold" href="https://amzn.to/4hk1PG5" target="_blank" rel="sponsored nofollow noopener noreferrer">View on Amazon →</a></p>
<h3>18. An over-the-door organizer</h3>
<p>When the shelves and drawers are full, the back of a door is easy to overlook. An organizer can give toiletries, accessories, or small household supplies their own pockets. Just check the door clearance first; extra storage is only helpful if you can still close the door.</p>
<p><a class="button button-gold" href="https://amzn.to/4yl8gyD" target="_blank" rel="sponsored nofollow noopener noreferrer">View on Amazon →</a></p>
<h2>For the little things that follow you out the door</h2>
<h3>19. A car trash bin</h3>
<p>A receipt in the cup holder turns into three wrappers and a handful of tissues before you know it. A small car trash bin gives all of that somewhere to go. Pick a size that’s easy to reach and empty without taking up the space your passengers need.</p>
<p><a class="button button-gold" href="https://amzn.to/46LQoRt" target="_blank" rel="sponsored nofollow noopener noreferrer">View on Amazon →</a></p>
<h3>20. A car seat-gap organizer</h3>
<p>There’s a particular kind of frustration that comes from watching your phone slide between the seat and center console. A gap organizer can help fill that space and give small items a place to sit. Fit matters here, so compare the dimensions with your car before adding one to your cart.</p>
<p><a class="button button-gold" href="https://amzn.to/4d4NZ80" target="_blank" rel="sponsored nofollow noopener noreferrer">View on Amazon →</a></p>
<h3>21. A compact portable charger</h3>
<p>A low phone battery always seems to happen when you still need directions or need to make that important phone call. A portable charger is useful to keep in your bag for those longer days away from home. Choose one that works with your devices and is small enough that you’ll actually remember to bring it.</p>
<p><a class="button button-gold" href="https://amzn.to/4AEEDK0" target="_blank" rel="sponsored nofollow noopener noreferrer">View on Amazon →</a></p>
<h3>22. A trunk organizer</h3>
<p>If every turn sends something rolling across the back of your car, a trunk organizer deserves a look. It can help keep reusable shopping bags, sports gear, and everyday supplies together. A collapsible style is especially convenient when you need to make room for a bigger load.</p>
<p><a class="button button-gold" href="https://amzn.to/4z0IWxA" target="_blank" rel="sponsored nofollow noopener noreferrer">View on Amazon →</a></p>
<h3>23. A reusable lint brush</h3>
<p>Sometimes an outfit looks perfectly fine until you step into better lighting and notice the pet hair. A lint brush near the door or in your bag makes those last-minute touch-ups easier. Think of this as the clothing companion to the furniture hair remover earlier in the list.</p>
<p><a class="button button-gold" href="https://amzn.to/4d9jI7U" target="_blank" rel="sponsored nofollow noopener noreferrer">View on Amazon →</a></p>
<h3>24. A compact organizer for tiny essentials</h3>
<p>Hair ties, earrings, and other tiny things have a talent for disappearing at the bottom of a bag. A small compartment organizer makes them easier to find without emptying everything onto the counter. Choose compartments that suit what you actually carry, rather than buying the biggest case available.</p>
<p><a class="button button-gold" href="https://amzn.to/4hko12H" target="_blank" rel="sponsored nofollow noopener noreferrer">View on Amazon →</a></p>
<h3>25. A foldable phone stand</h3>
<p>Propping your phone against a mug works right up until it slides down halfway through the recipe. A foldable stand gives it a more dependable place to sit for cooking, video calls, or watching something while you get ready. Check that it supports your phone with its case on.</p>
<p><a class="button button-gold" href="https://amzn.to/4ABYWbd" target="_blank" rel="sponsored nofollow noopener noreferrer">View on Amazon →</a></p>
<h2>Start with the thing that annoys you most</h2>
<p>You don’t need a cart full of products to make your day a little easier. Start with the problem you keep running into.</p>
<p>Maybe you’re tired of digging through the cabinet. Maybe your charging cable is currently on the floor. Or maybe your couch belongs to the dog and you’d just like it to look a little less obvious.</p>
<p>That’s the kind of find I want to share at FavePicks: something useful enough to become part of your routine.</p>
<p>Spotted something that would help at your house? Check out the linked finds, choose what fits your space, and save this list for later.</p>
<p><a href="/blog/">← Back to the Blog</a> · <a href="/categories/home-kitchen/">More Home &amp; Kitchen ideas</a></p></article>`
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
.post h2{margin-top:48px;font-size:clamp(27px,4vw,36px)}
.post h3{margin-top:32px}
.post p{font-size:18px}
.post nav{font-size:15px}
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
