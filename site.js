const storageKey = "travel-insurance-workshop-progress";
const checkboxes = Array.from(document.querySelectorAll("[data-lab]"));
const progressText = document.querySelector("#progress-text");
const progressBar = document.querySelector("#progress-bar");
const progressTrack = document.querySelector(".progress-track");
const resetButton = document.querySelector("#reset-progress");
const validLabIds = new Set(checkboxes.map((checkbox) => checkbox.dataset.lab));

function readProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return new Set(
      Array.isArray(saved) ? saved.filter((lab) => validLabIds.has(lab)) : [],
    );
  } catch {
    return new Set();
  }
}

function renderProgress(progress) {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = progress.has(checkbox.dataset.lab);
  });

  const complete = progress.size;
  const total = checkboxes.length;
  const percentage = total === 0 ? 0 : (complete / total) * 100;

  progressText.textContent = `${complete} of ${total} labs complete`;
  progressBar.style.width = `${percentage}%`;
  progressTrack.setAttribute("aria-valuenow", String(complete));
}

function saveProgress(progress) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(Array.from(progress)));
  } catch {
    // Progress still works for the current page when browser storage is unavailable.
  }
  renderProgress(progress);
}

let progress = readProgress();
renderProgress(progress);

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      progress.add(checkbox.dataset.lab);
    } else {
      progress.delete(checkbox.dataset.lab);
    }
    saveProgress(progress);
  });
});

resetButton.addEventListener("click", () => {
  progress = new Set();
  saveProgress(progress);
});
