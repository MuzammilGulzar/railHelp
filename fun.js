
function camOpnen(){
            
    const shareButton = document.getElementById('shareButton');
    const shareMenu = document.getElementById('shareMenu');
    const overlay = document.getElementById('overlay');
    const fileInput = document.getElementById('fileInput');
    const cameraInput = document.getElementById('cameraInput');
    const uploadButton = document.getElementById('uploadButton');
    const cameraButton = document.getElementById('cameraButton');
    const shareUrlButton = document.getElementById('shareUrlButton');

    // Open share menu
    shareButton.addEventListener('click', () => {
        shareMenu.classList.add('active');
        overlay.classList.add('active');
    });

    // Close share menu when clicking overlay
    overlay.addEventListener('click', () => {
        shareMenu.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Upload from gallery
    uploadButton.addEventListener('click', () => {
        fileInput.click();
    });

    // Take photo
    cameraButton.addEventListener('click', () => {
        cameraInput.click();
    });

    // Share URL
    shareUrlButton.addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Share Example',
                    text: 'Check out this content!',
                    url: window.location.href
                });
            } catch (err) {
                console.error('Share failed:', err);
            }
        } else {
            alert('Web Share API not supported in this browser');
        }
        shareMenu.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Handle file selection
    fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
            // Handle the selected file here
            console.log('Selected file:', e.target.files[0]);
            // You can add your upload logic here
        }
        shareMenu.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Handle camera capture
    cameraInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
            // Handle the captured photo here
            console.log('Captured photo:', e.target.files[0]);
            // You can add your upload logic here
        }
        shareMenu.classList.remove('active');
        overlay.classList.remove('active');
    });

    }
