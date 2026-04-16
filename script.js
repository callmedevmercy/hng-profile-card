document.addEventListener('DOMContentLoaded', () => {
    // Find the required user time element using the data-testid
    const timeElement = document.querySelector('[data-testid="test-user-time"]');

    if (timeElement) {
        // Initialize immediately
        timeElement.textContent = Date.now();

        // Update the time very rapidly (100ms) to ensure minimal delta against test suite hooks
        setInterval(() => {
            timeElement.textContent = Date.now();
        }, 100);
    }

    // Autumn Flowers Free Fall logic
    const createFlower = () => {
        const flower = document.createElement('div');
        flower.classList.add('falling-flower');
        
        // Array of whimsical autumn/floral emojis
        const flowers = ['🍁', '🍂', '🌸', '🌼', '✨'];
        flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];

        // Random horizontal position and animation duration (4 to 7 seconds)
        flower.style.left = Math.random() * 100 + 'vw';
        const duration = Math.random() * 3 + 4; 
        flower.style.animationDuration = duration + 's';

        document.body.appendChild(flower);

        // Remove element after it completes falling
        setTimeout(() => {
            flower.remove();
        }, duration * 1000);
    };

    // Burst of flowers when hovering over the profile pic
    const avatarImg = document.querySelector('[data-testid="test-user-avatar"]');
    if (avatarImg) {
        avatarImg.addEventListener('mouseenter', (e) => {
            // Prevent event from bubbling up if necessary
            e.stopPropagation();
            
            // Create a generous magical burst of flowers when hovered
            for(let i = 0; i < 20; i++) {
                // Slight random delay for a more natural burst effect
                setTimeout(createFlower, Math.random() * 600);
            }
        });
    }
});
