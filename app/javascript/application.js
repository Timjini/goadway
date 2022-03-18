// // Entry point for the build script in your package.json
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
btn.addEventListener("click", () => {
	menu.classList.toggle("hidden");
    console.log(menu)
});
