document.getElementById("myInput").value = window.location.href;

function copyLink() {
    setTimeout(function () {
        saveLink();
    }, 1000);
}

function saveLink() {
    let copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");
    document.getElementById('copy-link').innerHTML = "copied";
}