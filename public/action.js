document.getElementById("myInput").value = window.location.href;
document.getElementById('copy-link').innerHTML = "copy link";

function copyLink() {
    let copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.getElementById('copy-link').innerHTML = "link copied!";
}