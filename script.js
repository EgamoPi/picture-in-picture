const videoElement = document.getElementById('video')
const button = document.getElementById('button')

//Toggle the Picture in Picture

async function togglePictureInPicture() {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
}

//Prompt to select media stream, pass to video element, then play it
async function selectMediaStream(){
    try {
       const mediaStream = await navigator.mediaDevices.getDisplayMedia();
       videoElement.srcObject = mediaStream;
       videoElement.onloadedmetadata = () => {
           videoElement.play();
       }
    } catch (error){
        //Catching error
        console.log(error)
    }
}

// On load
 button.addEventListener('click', togglePictureInPicture);

selectMediaStream();    