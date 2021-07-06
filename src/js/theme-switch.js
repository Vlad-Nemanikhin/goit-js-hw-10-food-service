const Theme = {
   LIGHT: 'light-theme',
   DARK: 'dark-theme',
};

const themeEl = document.querySelector('#theme-switch-toggle');

themeEl.addEventListener( 'change' , onChangeToggle);

function onChangeToggle(e) {
	const checked = e.currentTarget.checked
      if (checked) {
         setDarkTheme();
		}
	
      if (!checked) {
			setLightTheme();
      }
}

getCurrentTheme();

function getCurrentTheme() {
      const currentTheme = localStorage.getItem('theme');

      if (currentTheme === Theme.LIGHT || currentTheme === null) {
      	setLightTheme()
      }

      if (currentTheme === Theme.DARK) {
         setDarkTheme()
      }
}

function setDarkTheme() {
	document.body.classList.remove(Theme.LIGHT);
	document.body.classList.add(Theme.DARK);
   localStorage.setItem('theme', Theme.DARK);
   themeEl.checked === true
}

function setLightTheme() {
   document.body.classList.remove(Theme.DARK);
   document.body.classList.add(Theme.LIGHT);
   localStorage.setItem('theme', Theme.LIGHT);
   themeEl.checked === false
}