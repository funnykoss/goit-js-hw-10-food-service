const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const toggleTheme = document.querySelector("#theme-switch-toggle");
const bodyRef = document.querySelector("body");

bodyRef.classList.add(Theme.LIGHT);

toggleTheme.addEventListener('change', onSwitchTheme);

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
      localStorage.setItem('curent-theme', Theme.DARK)  
    }
    if (!switchStatus) {
      localStorage.setItem('curent-theme', Theme.LIGHT)  
    }
}

const savedTheme = localStorage.getItem('curent-theme');
if (savedTheme === Theme.DARK) {
    toggleTheme.chacked = true;
    bodyRef.classList.add(Theme.DARK);
}
