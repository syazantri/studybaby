// login
function loginFunction() {
    if (document.getElementById('username').value == 'sasa' && document.getElementById('password').value == '1234') {
        window.location.href = 'course.html';
    } else{
        alert('username=sasa, password=1234');
    }
}

// homepage
function animateNumber(element, start, end, duration) {
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const progress = currentTime - startTime;
        const increment = Math.easeInOutQuad(progress, start, end - start, duration);
        element.innerText = Math.floor(increment) + "++";
        if (progress < duration) {
            requestAnimationFrame(animation);
        } else {
            element.innerText = end + "++";
        }
    }

    requestAnimationFrame(animation);
}

Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

document.addEventListener("DOMContentLoaded", () => {
    const usersCountElement = document.getElementById('users-count');
    const schoolsCountElement = document.getElementById('schools-count');
    const startButton = document.getElementById('start-btn');

    animateNumber(usersCountElement, 0, 5000, 1000); 
    animateNumber(schoolsCountElement, 0, 100, 1000); 

    startButton.addEventListener('click', function() {
        window.location.href = 'login.html';
    });
});