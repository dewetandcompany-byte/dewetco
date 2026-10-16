// Replaces the former B12 form backend: opens the visitor's email app with the form contents.
(function () {
  var TO = "thys@dewetco.co.nz";
  document.addEventListener("submit", function (e) {
    var f = e.target;
    if (!f || !f.classList || !f.classList.contains("js-form")) return;
    e.preventDefault(); e.stopImmediatePropagation();
    var lines = [];
    f.querySelectorAll("input, textarea, select").forEach(function (el) {
      if (!el.name || el.type === "hidden" || el.type === "submit") return;
      if ((el.type === "checkbox" || el.type === "radio") && !el.checked) return;
      lines.push(el.name + ": " + el.value);
    });
    location.href = "mailto:" + TO + "?subject=" + encodeURIComponent("Website enquiry") +
      "&body=" + encodeURIComponent(lines.join("\n"));
  }, true);
})();
