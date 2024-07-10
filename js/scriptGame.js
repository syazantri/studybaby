// with the help of gpt :)

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    const blocks = document.querySelectorAll('.block');
    const startBtn = document.getElementById('start-btn-game');
    let sequence = [];
    let userSequence = [];
    let level = 0;

    startBtn.addEventListener('click', startGame);

    blocks.forEach(block => {
        block.addEventListener('click', () => {
            if (userSequence.length < sequence.length) {
                const index = parseInt(block.dataset.index);
                userSequence.push(index);
                block.classList.add('active');
                setTimeout(() => {
                    block.classList.remove('active');
                }, 300);
                checkSequence();
            }
        });
    });

    function startGame() {
        level = 0;
        sequence = [];
        userSequence = [];
        nextLevel();
    }

    function nextLevel() {
        level++;
        userSequence = [];
        const nextIndex = Math.floor(Math.random() * 16);
        sequence.push(nextIndex);
        displaySequence();
    }

    function displaySequence() {
        let i = 0;
        const interval = setInterval(() => {
            const index = sequence[i];
            blocks[index].classList.add('active');
            setTimeout(() => {
                blocks[index].classList.remove('active');
            }, 500);
            i++;
            if (i >= sequence.length) {
                clearInterval(interval);
            }
        }, 1000);
    }

    function checkSequence() {
        for (let i = 0; i < userSequence.length; i++) {
            if (userSequence[i] !== sequence[i]) {
                alert('Game Over! You reached level ' + level);
                startGame();
                return;
            }
        }
        if (userSequence.length === sequence.length) {
            setTimeout(nextLevel, 1000);
        }
    }
});
