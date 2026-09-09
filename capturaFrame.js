const canvas1 = document.getElementById('frames');
const ctx1 = canvas1.getContext("2d");
let imageData1;
let imageData2;
let i = 0;

function capturarFrames(){
        ctx1.drawImage(video, 0, 0);
        imageData1 = ctx1.getImageData(0, 0, 1280, 720)
        i = i + 1;

        if (i == 2) {
            i = 0;
        } else if (i == 1) {
            imageData2 = ctx1.getImageData(0, 0, 1280, 720);
        }
}

video.addEventListener('canlay', (event) =>{
    setInterval(capturarFrames, 200)
}, {once: true});
