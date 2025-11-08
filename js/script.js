async function loadHTML(id, file) {
  const el = document.getElementById(id);
  const res = await fetch(file);
  if (res.ok) {
    el.innerHTML = await res.text();
    if (id === "top-bar-thing") highlightActiveLink(); // after header loads
  }
}

// Highlight the current nav link
function highlightActiveLink() {
  const currentPage = location.pathname.split("/").pop();
  document.querySelectorAll("#top-bar-thing .nav-link").forEach(link => {
    if (link.getAttribute("data-page") === currentPage) {
      link.classList.add("active");
    }
  });
}
loadHTML("top-bar-thing", "elements/header.html");
loadHTML("bottom-bar-thing", "elements/footer.html");