const Theme = {
   LIGHT: 'light-theme',
   DARK: 'dark-theme',
};

const themeEl = document.querySelector('#theme-switch-toggle');
themeEl.addEventListener('change', onChangeToggle);
localStorage.setItem('theme', Theme.LIGHT);

function onChangeToggle(e) {
   const checked = e.currentTarget.checked;
   if (checked) {
      setDarkTheme();
   } else { document.body.classList.remove(Theme.DARK); }
}

const theme = localStorage.getItem('theme') || Theme.LIGHT;
document.body.classList.add(theme);
themeEl.checked = theme === Theme.DARK;

function setDarkTheme() {
	document.body.classList.remove(Theme.LIGHT);
	document.body.classList.add(Theme.DARK);
   localStorage.setItem('theme', Theme.DARK);
}