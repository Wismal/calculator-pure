let themeChanger = document.getElementById("toggleButton");

let themes = ["theme1", "theme2", "theme3"];

let currentTheme = parseInt(localStorage.getItem('calculatorTheme')) || 0;

themeChanger.addEventListener("click", () => {
    currentTheme = (currentTheme + 1) % themes.length;
    applyTheme(currentTheme);
    localStorage.setItem("calculatorTheme", currentTheme.toString());

})  

function applyTheme(themeIndex) {
    themes.forEach(theme => {
        document.body.classList.remove(theme)
        document.body.classList.add(themes[themeIndex])
                
    });
}

applyTheme(currentTheme);