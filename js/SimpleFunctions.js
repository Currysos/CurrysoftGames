function ClassToggle(x) {
    x.classList.toggle("change");
    document.getElementById("Header").classList.toggle("Close");
}

function ToggleAndroidHeight() {
    console.log("Toggeling Android");

    document.getElementById('AndroidDownloadSteps').style.height = "250px";
    document.getElementById('AppleDownloadSteps').style.height = "0px";
    document.getElementById('WindowsDownloadSteps').style.height = "0px";
}

function ToggleAppleHeight() {
    console.log("Toggeling Apple");

    document.getElementById('AndroidDownloadSteps').style.height = "0px";
    document.getElementById('AppleDownloadSteps').style.height = "250px";
    document.getElementById('WindowsDownloadSteps').style.height = "0px";
}

function ToggleWindowsHeight() {
    console.log("Toggeling Windows");

    document.getElementById('AndroidDownloadSteps').style.height = "0px";
    document.getElementById('AppleDownloadSteps').style.height = "0px";
    document.getElementById('WindowsDownloadSteps').style.height = "250px";
}