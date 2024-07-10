document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const courseCards = document.querySelectorAll('.course-card');

    searchBtn.addEventListener('click', () => {
        const searchText = searchInput.value.toLowerCase();
        courseCards.forEach(card => {
            const courseTitle = card.querySelector('.course-title').innerText.toLowerCase();
            if (courseTitle.includes(searchText)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    let points = 0; 

    updatePoints();

    const learnButtons = document.querySelectorAll('.learn-btn');
    learnButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            points++; 
            updatePoints(); 
        });
    });

    function updatePoints() {
        document.getElementById('points-display').innerText = points; 
    }
});