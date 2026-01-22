async function injectPartial(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;

  const res = await fetch(url, { cache: "no-cache" });
  if (!res.ok) {
    el.innerHTML = `<!-- Failed to load ${url} -->`;
    return;
  }
  el.innerHTML = await res.text();
}

(async () => {
  await injectPartial("#site-header", "/src/partials/header.html");
  await injectPartial("#site-footer", "/src/partials/footer.html");
})();
