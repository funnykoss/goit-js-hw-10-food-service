const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme"
};

const toggleTheme = document.querySelector("#theme-switch-toggle");
const bodyRef = document.querySelector("body");
const STORAGE_KEY = "curent-theme";

bodyRef.classList.add(Theme.LIGHT);

toggleTheme.addEventListener('change', onSwitchTheme);

document.addEventListener('DOMContentLoaded', getLocalStorageTheme);

function onSwitchTheme(event) {
    if (event.target.id !== "theme-switch-toggle") {
        return;
    }
  bodyRef.classList.toggle(Theme.LIGHT);
 
    bodyRef.classList.toggle(Theme.DARK);

    onThemeSave(event);
}

function onThemeSave(event) {
    const switchStatus = event.target.checked;
    if (switchStatus) {
      localStorage.setItem(STORAGE_KEY, Theme.DARK)  
    }
    if (!switchStatus) {
      localStorage.setItem(STORAGE_KEY, Theme.LIGHT)  
    }
}

function getLocalStorageTheme() {
  const saveTheme = localStorage.getItem(STORAGE_KEY);
  if (saveTheme === Theme.DARK) {
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
    toggleTheme.checked = true;
  }
}


