let user = "Aston Black";
let userImg = "img_0"

let visibility = 0;

if (user == "User") {
    loggedIn = 0;
}

let themes = [1, 2, 3, 4, 5, 6];

document.querySelector(".parallax-title").innerHTML = `Welcome, ${user}!`;
document.getElementById("miniProfilePic").src = `/src/img/custom/${userImg}.png`;

//Prechecks 

document.addEventListener("DOMContentLoaded", () => {
    loggedIn = 1;
})

// Theme - Light/Dark Mode Detection
window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', event => {

        if (event.matches) {
            console.log("Dark Theme Active.");
            document.getElementById("themeLink").href = `/src/css/themes/dark.css`;

            if (user = "User") {
                document.getElementById("miniProfilePic").src = `/src/img/custom/guest.png`;
            }
        } else {
            console.log("Light Theme Active.")
            document.getElementById("themeLink").href = `/src/css/themes/light.css`;
            if (user = "User") {
                document.getElementById("miniProfilePic").src = `/src/img/custom/guest-w.png`;
            }
        }
    })

function toggleWindow(windowId) {
    if (windowId == 1) {
        document.getElementById("loginBar").classList.toggle("active");
    } else if (windowId == 2) {
        document.getElementById("customizeBar").classList.toggle("active");
    } else if (windowId == 8) {
        document.getElementById("infoBack").classList.toggle("active");
    } else if (windowId == 5) {
        document.getElementById("friendsBar").classList.toggle("active");
    } else if (windowId == 7) {
        document.getElementById("settingsHolder").classList.toggle("active");
    } else {
        console.err("Invalid Window Id")
    }
}

function toggleVis() {
    if (visibility == 0) {
        document.getElementById("seePassword").innerHTML = "visibility";
        document.getElementById("userPass").type = "text";
        visibility = 1;
    } else if (visibility == 1) {
        document.getElementById("seePassword").innerHTML = "visibility_off"
        document.getElementById("userPass").type = "password";
        visibility = 0;
    }
}

function changeTheme(themeId) {
    if (themeId == 1 && themes.includes(1)) {
        document.getElementById("themeLink").href = `/src/css/themes/dark.css`;
    } else if (themeId == 2 && themes.includes(2)) {
        document.getElementById("themeLink").href = `/src/css/themes/light.css`;
    } else if (themeId == 3 && themes.includes(3)) {
        document.getElementById("themeLink").href = `/src/css/themes/shadow.css`;
    } else if (themeId == 4 && themes.includes(4)) {
        document.getElementById("themeLink").href = `/src/css/themes/sh-heart.css`;
    } else if (themeId == 5 && themes.includes(5)) {
        document.getElementById("themeLink").href = `/src/css/themes/yannmatrix.css`;
    } else if (themeId == 6 && themes.includes(6)) {
        document.getElementById("themeLink").href = `/src/css/themes/dev.css`;
    }
}

function activateUser(id, status) {
    if (id == 1 && typeof status == "string") {
        document.querySelector(".friend-nameInner").innerHTML = "enzenra";
        document.querySelector(".friendClan").innerHTML = "[五はん]";
        document.querySelector(".miniFriend").classList.remove("offline");
        document.querySelector(".miniFriend").classList.add("online");
        document.querySelector(".friend-status").innerHTML = status;
    }
}