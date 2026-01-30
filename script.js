        // Enhanced array of supportive emojis with more variety and emotional impact
        const emojis = ['❤️', '🩷', '🧡', '💛', '💚', '💙',  '🩵', '💜', '🩶', '🤍', '❤️‍🔥', '🙏', '✨', '🌟', '💫', '💖', '💕', '💞', '💗', '💓', '💝', '💘', '💪', '🕊️', '🌈', '🍀', '🌺', '🌻', '🌹', '🌸', '🌼', '🌷', '💐', '⭐', '🔥', '⚡', '💫', '✨', '🫶', '🤝', '🙌'];
        
        function createBouncingEmoji() {
            const emoji = document.createElement('div');
            emoji.className = 'emoji';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            
            // Random horizontal position across the entire viewport
            const leftPos = Math.random() * 100;
            emoji.style.left = `${leftPos}%`;
            emoji.style.bottom = '-60px'; // Start from bottom for bouncing effect
            
            // Random size between 22px and 40px
            const size = 22 + Math.random() * 18;
            emoji.style.fontSize = `${size}px`;
            
            // Apply bounce animation with random duration
            const duration = 1.2 + Math.random() * 0.8;
            emoji.style.animation = `bounce ${duration}s ease-in-out ${Math.random() * 0.3}s forwards`;
            
            document.body.appendChild(emoji);
            
            // Remove emoji after animation completes
            setTimeout(() => {
                if (emoji.parentNode) {
                    emoji.style.opacity = '0';
                    setTimeout(() => {
                        if (emoji.parentNode) {
                            emoji.parentNode.removeChild(emoji);
                        }
                    }, 400);
                }
            }, (duration + 0.3) * 1000);
        }
        
        function createFloatingEmoji() {
            const emoji = document.createElement('div');
            emoji.className = 'emoji';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            
            // Random horizontal position
            const leftPos = Math.random() * 100;
            emoji.style.left = `${leftPos}%`;
            emoji.style.top = '100vh';
            
            // Random size
            const size = 20 + Math.random() * 15;
            emoji.style.fontSize = `${size}px`;
            
            // Random animation duration
            const duration = 3.5 + Math.random() * 2.5;
            emoji.style.animation = `float ${duration}s ease-in-out forwards`;
            
            document.body.appendChild(emoji);
            
            // Remove emoji after animation completes
            setTimeout(() => {
                if (emoji.parentNode) {
                    emoji.parentNode.removeChild(emoji);
                }
            }, duration * 1000);
        }
        
        // Create bouncing emojis continuously (more frequent)
        setInterval(createBouncingEmoji, 700);
        
        // Create floating emojis less frequently for variety
        setInterval(createFloatingEmoji, 1000);
        
        // Initial burst of bouncing emojis for immediate visual impact
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                createBouncingEmoji();
            }, i * 150);
        }
        
        // Initial burst of floating emojis
        for (let i = 0; i < 6; i++) {
            setTimeout(() => {
                createFloatingEmoji();
            }, i * 250 + 800);
        }
        
        // Add subtle hover effects
        const progressSection = document.querySelector('.progress-section');
        if (progressSection) {
            progressSection.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-4px)';
                this.style.boxShadow = '0 25px 65px rgba(0,0,0,0.2)';
            });
            
            progressSection.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)';
            });
        }
        
        // Add scroll animation for progress bar
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target.querySelector('.progress-fill');
                    if (progressBar && !progressBar.classList.contains('animated')) {
                        progressBar.style.animation = 'fillProgress 1.8s ease-out forwards';
                        progressBar.classList.add('animated');
                    }
                }
            });
        }, { threshold: 0.1 });
        
        const progressSectionElement = document.querySelector('.progress-section');
        if (progressSectionElement) {
            observer.observe(progressSectionElement);
        }

       // Slideshow functionality for patient images
const imageSources = ['people1.jpg', 'people2.jpg']; // نام فایل‌های عکس شما
let currentImageIndex = 0;
const patientImage = document.querySelector('.patient-image');

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    patientImage.src = imageSources[currentImageIndex];
    
    // Add fade transition effect
    patientImage.style.opacity = '0';
    setTimeout(() => {
        patientImage.style.opacity = '1';
    }, 100);
}

// Change image every 1 second (1000 milliseconds)
setInterval(changeImage, 1500);

// Optional: Add fade-in effect on page load
window.addEventListener('load', () => {
    patientImage.style.opacity = '1';
    patientImage.style.transition = 'opacity 0.5s ease-in-out';
});