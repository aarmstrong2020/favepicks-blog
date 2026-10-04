import site from "./index.js";

const amazonTrackingId = "favefinds06-20";
const pinterestUrl = "https://pin.it/3oq0mj3M7";

const productPhotos = [
  { file: "amazon-find-01.png", width: 281, height: 285 },
  { file: "amazon-find-02.png", width: 319, height: 223 },
  { file: "amazon-find-03.png", width: 428, height: 428 },
  { file: "amazon-find-04.png", width: 171, height: 306 },
  { file: "amazon-find-05.png", width: 254, height: 249 },
  { file: "amazon-find-06.png", width: 203, height: 270 },
  { file: "amazon-find-07.png", width: 315, height: 315 },
  { file: "amazon-find-08.png", width: 306, height: 306 },
  { file: "amazon-find-09.png", width: 287, height: 286 },
  { file: "amazon-find-10.png", width: 296, height: 294 },
  { file: "amazon-find-11.png", width: 320, height: 330 },
  { file: "amazon-find-12.png", width: 242, height: 344 },
  { file: "amazon-find-13.png", width: 340, height: 295 },
  { file: "amazon-find-14.png", width: 293, height: 283 },
  { file: "amazon-find-15.png", width: 361, height: 361 },
  { file: "amazon-find-16.png", width: 319, height: 319 },
  { file: "amazon-find-17.png", width: 299, height: 299 },
  { file: "amazon-find-18.png", width: 224, height: 305 },
  { file: "amazon-find-19.png", width: 343, height: 343 },
  { file: "amazon-find-20.png", width: 328, height: 287 },
  { file: "amazon-find-21.png", width: 405, height: 288 },
  { file: "amazon-find-22.png", width: 273, height: 270 },
  { file: "amazon-find-23.png", width: 293, height: 289 },
  { file: "amazon-find-24.png", width: 323, height: 326 },
  { file: "amazon-find-25.png", width: 351, height: 354 }
];

export default {
  async fetch(request, env, ctx) {
    let response = await site.fetch(request, env, ctx);

    if (!response.headers.get("content-type")?.includes("text/html")) {
      return response;
    }

    let logoAdded = false;
    let productIndex = 0;
    const articlePath = "/blog/25-amazon-finds-youll-wish-you-bought-sooner/";
    const path = new URL(request.url).pathname.replace(/\/?$/, "/");
    const showProductPhotos = path === articlePath;

    if (showProductPhotos) {
      let html = await response.text();

      html = html.replace(
        "<h3>23. A reusable lint brush</h3>",
        "<h3>23. A reusable pet-hair removal glove</h3>"
      );

      html = html.replace(
        "<p>Sometimes an outfit looks perfectly fine until you step into better lighting and notice the pet hair. A lint brush near the door or in your bag makes those last-minute touch-ups easier. Think of this as the clothing companion to the furniture hair remover earlier in the list.</p>",
        "<p>Pet hair has a way of showing up on the couch, your clothes, and just about anything soft. A reusable pet-hair removal glove gives you a wearable option for tackling those furry patches. Check the product’s fabric and care instructions before using it, then keep it near the spot that seems to collect the most fur.</p>"
      );

      response = new Response(html, {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers
      });
    }

    return new HTMLRewriter()
      .on("main article.post h3", {
        element(heading) {
          if (!showProductPhotos) return;

          const photo = productPhotos[productIndex++];
          if (!photo) return;

          heading.after(
            `<figure style="margin:20px 0 24px;text-align:center">
              <img src="/assets/${photo.file}" alt="Product ${productIndex} photo" width="${photo.width}" height="${photo.height}" loading="lazy" decoding="async" style="display:block;width:auto;max-width:100%;height:auto;margin:0 auto">
            </figure>`,
            { html: true }
          );
        }
      })
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
             <a href="${pinterestUrl}" aria-label="Follow us on Pinterest" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:14px;color:#fff;text-decoration:none;font-size:18px;font-weight:700">
               <span style="display:inline-flex;align-items:center;justify-content:center;width:68px;height:68px;background:white;border-radius:50%;flex-shrink:0">
                 <img src="https://cdn.simpleicons.org/pinterest/E60023" alt="" width="54" height="54" style="display:block">
               </span>
               <span>Follow us on Pinterest</span>
             </a>`,
            { html: true }
          );
        }
      })
      .transform(response);
  }
};
