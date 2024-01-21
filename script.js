document.addEventListener('DOMContentLoaded', function () {
    
    var images = document.querySelectorAll(".portfolio-item");
    
    // Return boolean when an element is partially visible on screen
    function isPartialVisible(element) {
        var viewPortHeight = window.innerHeight, // Viewport Height
            scrollTop = window.scrollY, // Scroll Top
            currElementPosY = element.getBoundingClientRect().top + scrollTop,
            elementHeight = element.offsetHeight;
        
        return ((currElementPosY + elementHeight + elementHeight) > scrollTop && currElementPosY < (viewPortHeight + scrollTop));
    }
    
    // Return boolean when an element is wholly visible on screen
    function isWholeVisible(element) { 
        var viewPortHeight = window.innerHeight, // Viewport Height
            scrollTop = window.scrollY, // Scroll Top
            currElementPosY = element.getBoundingClientRect().top + scrollTop,
            elementHeight = element.offsetHeight;
        
        return (currElementPosY > scrollTop && currElementPosY + elementHeight < (viewPortHeight + scrollTop));
    }

    function isWholeNotVisible(element) {
        var viewPortHeight = window.innerHeight, // Viewport Height
            scrollTop = window.scrollY, // Scroll Top
            currElementPosY = element.getBoundingClientRect().top + scrollTop,
            elementHeight = element.offsetHeight;

        return (currElementPosY + elementHeight < scrollTop || currElementPosY > scrollTop + viewPortHeight);
    }


    
    // Animate chart only when you see it
    function animateChartWhenVisible(chart) {
        for (var i = 0, count = chart.length; i < count; i++) {
            if (isWholeNotVisible(chart[i])) {
                chart[i].classList.add("not_visible");
                chart[i].classList.remove("image_spawn");
            } else {
                chart[i].classList.remove("not_visible");
                chart[i].classList.add("image_spawn");
            }
        }
    }
    
    // On scroll
    window.addEventListener('scroll', function () {  
        animateChartWhenVisible(images);
    });
    
    // On load    
    animateChartWhenVisible(images);
    
});
