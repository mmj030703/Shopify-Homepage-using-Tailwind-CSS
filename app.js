window.addEventListener('load', function() {
    window.addEventListener('scroll', function(e) {
        // Making the Header background black after scrolling for 1px down
        const headerElement = document.querySelector('#header');
        const scrollOnY = window.scrollY;

        if(scrollOnY > 10) {
            headerElement.classList.add('bg-black');
            headerElement.classList.add('border-b-[0.1px]');
            headerElement.classList.add('border-b-gray-700');
        }
        else {
            headerElement.classList.remove('border-b-[0.1px]')
            headerElement.classList.remove('bg-black')
            headerElement.classList.remove('border-b-gray-700');
        }

    });
});