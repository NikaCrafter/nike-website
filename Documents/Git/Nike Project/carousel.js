document.addEventListener('DOMContentLoaded', function() {
    const previewImages = document.querySelectorAll('.preview-image');
    const selectedImage = document.getElementById('selected-image');
    

    if (!selectedImage.src || selectedImage.src === "") {
        selectedImage.src = "./assets/shoe.png";
        previewImages[0].classList.add('selected');
    }


    const setSelectedImageSrc = () => {
        let noImageSelected = true;
        previewImages.forEach(image => {
            if (image.classList.contains('selected')) {
                noImageSelected = false;
            }
        });
        if (noImageSelected) {
            selectedImage.src = "./assets/shoe.png";
        }
    };


    previewImages[0].click();

    previewImages.forEach(image => {
        image.addEventListener('click', () => {
            previewImages.forEach(img => img.classList.remove('selected'));
            image.classList.add('selected');
            selectedImage.src = image.src;
        });
    });

    setSelectedImageSrc();
});
