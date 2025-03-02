let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let button = document.getElementById("button");

function generateQr() {
    if (qrText.value.length > 0) {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText.value)}`;
        imgBox.classList.add("show-img"); // Ensuring image box expands
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error"); // Fix: remove class instead of adding again
        }, 1000);
    }
}

button.addEventListener("click", function() {
    generateQr();
});
