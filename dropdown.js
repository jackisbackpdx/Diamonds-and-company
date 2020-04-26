function dropDown(navBars, arrows) {
    for(let i = 0; i < arrows.length; i++) {
        arrows[i].style.transform = 'rotate(0deg)';
    }
    for(let i = 0; i < navBars.length; i++) {
        navBars[i].addEventListener('click', function() {
            if(arrows[i].style.transform === 'rotate(0deg)') {
                arrows[i].style.transform = 'rotate(90deg)';
                return;
            }
            if(arrows[i].style.transform === 'rotate(90deg)') {
                arrows[i].style.transform = 'rotate(0deg)';
            }
        });
    }
    for(let i = 0; i < navBars.length; i++) {
        arrows[i].addEventListener('click', function() {
            if(arrows[i].style.transform === 'rotate(0deg)') {
                arrows[i].style.transform = 'rotate(90deg)';
                return;
            }
            if(arrows[i].style.transform === 'rotate(90deg)') {
                arrows[i].style.transform = 'rotate(0deg)';
            }
        });
    }
}

export default dropDown;