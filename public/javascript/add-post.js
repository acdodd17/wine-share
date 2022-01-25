
// upload and render image
const wineImage = document.getElementById('wine-image');
const imgUpload = document.getElementById('image');

async function uploadImg(event) {
    event.preventDefault();
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'blcqc8pz');

    const response = await fetch('/upload', {
        url: 'https://api.cloudinary.com/v1_1/dngr1unbt',
        method: 'post', 
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }, 
        data: formData
    })

    if (response.ok) {
        console.log('success');
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
    
;}

imgUpload.addEventListener('change', uploadImg);