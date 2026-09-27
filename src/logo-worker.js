import site from "./index.js";

const amazonTrackingId = "favefinds06-20";
const pinterestUrl = "https://pin.it/3oq0mj3M7";

export default {
  async fetch(request, env, ctx) {
    const response = await site.fetch(request, env, ctx);

    if (!response.headers.get("content-type")?.includes("text/html")) {
      return response;
    }

    let logoAdded = false;

    return new HTMLRewriter()
      .on("header a", {
        element(link) {
          if (logoAdded || link.getAttribute("href") !== "/") return;

          logoAdded = true;
          link.setInnerContent(
            '<img src="/assets/Favepicks.blog%20logo.PNG" alt="FavePicks.blog" style="display:block;width:190px;max-width:100%;height:auto">',
            { html: true }
          );
        }
      })
      .on("a[href]", {
        element(link) {
          const href = link.getAttribute("href");
          if (!href) return;

          try {
            const url = new URL(href);
            if (
              (url.hostname === "amazon.com" ||
                url.hostname === "www.amazon.com") &&
              !url.searchParams.has("tag")
            ) {
              url.searchParams.set("tag", amazonTrackingId);
              link.setAttribute("href", url.toString());
            }
          } catch {
            // Internal links do not need an Amazon tracking ID.
          }
        }
      })
      .on("footer .copyright", {
        element(element) {
          element.before(
            `<p style="margin:18px 0;color:#dfd4e9">As an Amazon Associate I earn from qualifying purchases.</p>
             <p style="margin:12px 0"><a href="${pinterestUrl}" target="_blank" rel="noopener noreferrer" style="color:#f2d286">Follow FavePicks on Pinterest →</a></p>`,
            { html: true }
          );
        }
      })
      .on("main", {
        element(element) {
          if (new URL(request.url).pathname !== "/affiliate-disclosure/") return;
            { html: true }
          );
        }
      })
      .transform(response);
  }
};
