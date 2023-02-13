let sitCode = 1;

/* Situational Codes: 

1: Document/File Loaded

*/


document.addEventListener("DOMContentLoaded", () => {
    sitCode = 1;
    console.log(`Content Loaded. [${sitCode}]`)
})

function toggleStuff() {
    document.getElementById("gec-nav").classList.toggle("active");
    document.getElementById("nav-desc").classList.toggle("active");
    document.getElementById("navButton").classList.toggle("active");
    document.querySelector(".desc-title").classList.toggle("active");
    document.querySelector(".navIcon").innerHTML = `keyboard_double_arrow_left`;
}

function changeDesc(title, desc) {
    document.querySelector(".desc-title").innerHTML = title;
    document.querySelector(".desc-text").innerHTML = desc;
}

window.addEventListener("scroll", function() {
    if (document.documentElement.scrollTop > windowHeight) {
        document.getElementById(`gec-nav`).classList.add("active");
    }
})