function togglemenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

//switch function
document.addEventListener('DOMContentLoaded', (event) => {
    const switchTheme = () => {
        const rootElem = document.documentElement;
        let dataTheme = rootElem.getAttribute('data-theme');
        let newTheme = (dataTheme === 'light') ? 'dark' : 'light';

        // Set new HTML attribute
        rootElem.setAttribute('data-theme', newTheme);

        // Set new local storage item
        localStorage.setItem('theme', newTheme);
    }

    // Add event listener for switcher
    const themeSwitcher = document.querySelector('.theme-switcher');
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', switchTheme);
    } else {
        console.error('Element with class "theme-switcher" not found.');
    }
});
