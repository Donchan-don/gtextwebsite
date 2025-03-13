// document.addEventListener("DOMContentLoaded", () => {
//     const menuIcon = document.getElementById("menu");
//     const menuMiddle = document.getElementById("menuMiddle");
//     const logInvest = document.querySelector(".logInvest");

//     menuIcon.addEventListener("click", () => {
//         menuMiddle.classList.toggle("hidden");
//         logInvest.classList.toggle("hidden");
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu");
    const menuMiddle = document.getElementById("menuMiddle");
    const logInvest = document.querySelector(".logInvest");

    menuIcon.addEventListener("click", () => {
        // Wrap both elements in a single box container
        const menuBox = document.createElement("div");
        menuBox.classList.add("menuBox");

        // Check if the menu is open or closed
        if (menuMiddle.classList.contains("hidden")) {
            menuMiddle.classList.remove("hidden");
            logInvest.classList.remove("hidden");

            // Append both elements to the menuBox
            menuBox.appendChild(menuMiddle);
            menuBox.appendChild(logInvest);

            // Add menuBox to the DOM
            menuContainer.appendChild(menuBox);
        } else {
            menuMiddle.classList.add("hidden");
            logInvest.classList.add("hidden");

            // Remove menuBox from the DOM
            document.querySelector(".menuBox")?.remove();
        }
    });
});
