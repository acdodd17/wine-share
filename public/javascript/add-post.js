
// upload and render image
const wineImage = document.getElementById('wine-image');
const imgUpload = document.getElementById('image');

async function uploadImg(event) {
    event.preventDefault();
    const files = event.target.files[0];
    const reader = new FileReader
    reader.onload  
    
;}

imgUpload.addEventListener('change', uploadImg);