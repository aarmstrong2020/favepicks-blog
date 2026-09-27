import site from "./index.js";

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
            '<img src="/assets/Favepicks.blog%20logo.PNG" alt="FavePicks.blog" style="display:block;width:110px;height:auto">',
            { html: true }
          );
        }
      })
      .transform(response);
  }
};
