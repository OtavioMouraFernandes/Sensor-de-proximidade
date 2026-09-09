const video = document.getElementById('video');

const constraints = {
    video: {
        width: {
            ideal: 1920
        },
        height: {
            ideal: 1080
        }
    },
    audio: false
};

const startStream = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);

        video.srcObject = stream;
    } catch (erro) {
        console.error("Não foi possível acessar a câmera:", erro);
    }
};

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    startStream();
} else {
    alert("Seu navegador não suporta acesso à câmera.");
}