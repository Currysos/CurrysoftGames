document.getElementById("Hamburger").addEventListener("click", ClassToggle);
document.getElementById("AndroidIcon").addEventListener("click", ToggleAndroidHeight);
document.getElementById("AppleIcon").addEventListener("click", ToggleAppleHeight);
document.getElementById("WindowsIcon").addEventListener("click", ToggleWindowsHeight);

function ClassToggle() {
    document.getElementById("Header").classList.toggle("Close");
}

function ToggleAndroidHeight() {
    console.log("Toggeling Android");

    document.getElementById('AndroidDownloadSteps').style.height = "300px";
    document.getElementById('AppleDownloadSteps').style.height = "0px";
    document.getElementById('WindowsDownloadSteps').style.height = "0px";
}

function ToggleAppleHeight() {
    console.log("Toggeling Apple");

    document.getElementById('AndroidDownloadSteps').style.height = "0px";
    document.getElementById('AppleDownloadSteps').style.height = "300px";
    document.getElementById('WindowsDownloadSteps').style.height = "0px";
}

function ToggleWindowsHeight() {
    console.log("Toggeling Windows");

    document.getElementById('AndroidDownloadSteps').style.height = "0px";
    document.getElementById('AppleDownloadSteps').style.height = "0px";
    document.getElementById('WindowsDownloadSteps').style.height = "300px";
}