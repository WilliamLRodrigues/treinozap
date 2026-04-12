const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Demo video modal
const demoThumb = document.getElementById("demoThumb");
const demoDialog = document.getElementById("demoDialog");
const demoClose = document.getElementById("demoClose");

if (demoThumb && demoDialog) {
  demoThumb.addEventListener("click", () => {
    demoDialog.showModal();
  });

  demoClose.addEventListener("click", () => {
    demoDialog.close();
    demoDialog.querySelector("video").pause();
  });

  demoDialog.addEventListener("click", (e) => {
    if (e.target === demoDialog) {
      demoDialog.close();
      demoDialog.querySelector("video").pause();
    }
  });
}

