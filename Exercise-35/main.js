
    function changeImage() {
        const image = document.querySelector('#image');

        const url = prompt('Please Enter your image URL');
        const borderColor = prompt('Please Enter your border color');
        const width = prompt('Enter the width of the image in pixels');
        const height = prompt('Enter the height of the image in pixels');
        const borderRadius = prompt('Enter the border radius in pixels');


        image.setAttribute('src', url);
        image.style.border = `2px solid ${borderColor}`;
        image.style.width = `${width}px`;
        image.style.height = `${height}px`;
        image.style.borderRadius = `${borderRadius}px`;
        
    } 