const canvas1 = document.getElementById('frames');
const ctx1 = canvas1.getContext("2d");
const MargemErro = 20;
let imageData1;
let imageData2;
let i = 0;
let diferencaTotal = 0
let diferencaMedia = 0;
const resultado = document.getElementById('resultado');

function capturarFrames(){
    
        ctx1.filter = 'grayscale(100%)';

        ctx1.drawImage(video, 0, 0);
        imageData1 = ctx1.getImageData(0, 0, 1280, 720)
        i = i + 1;

        if (i == 2) {

            for (let x = 0; x < imageData1.data.length; x += 4){
                
                let diferenca = Math.abs(
                    imageData1.data[x] - imageData2.data[x]
                );

                diferencaTotal += diferenca
            } 

            diferencaMedia = diferencaTotal/(imageData1.data.length/4)

            resultado.textContent = diferencaMedia;
            console.log(diferencaMedia);

            diferencaMedia = 0;
            diferencaTotal = 0;

            i = 0;
        } else if (i == 1) {
            imageData2 = ctx1.getImageData(0, 0, 1280, 720);
        }
}

video.addEventListener('canplay', (event) =>{
    setInterval(capturarFrames, 200)
}, {once: true});
