// Show welcome alert
function showAlert() {
    alert('🎉 Welcome to AICODIN! Start your learning journey today.');
}

// Fetch and display server time
function fetchServerTime() {
    const timeElement = document.getElementById('serverTime');
    
    try {
        fetch('http://localhost:3000/api/time')
            .then(response => response.json())
            .then(data => {
                const date = new Date(data.time);
                timeElement.innerHTML = `<strong>Server Time:</strong> ${date.toLocaleString()}`;
                timeElement.style.display = 'block';
            })
            .catch(error => {
                console.error('Error fetching server time:', error);
                timeElement.innerHTML = '⚠️ Unable to fetch server time. Make sure the backend is running.';
                timeElement.style.display = 'block';
            });
    } catch (error) {
        console.error('Error:', error);
    }
}

// Add smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add hover animations to cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Fetch server time on page load
document.addEventListener('DOMContentLoaded', function() {
    // Fetch server time after a short delay
    setTimeout(fetchServerTime, 500);
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + H to show help
    if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
        e.preventDefault();
        window.location.href = 'help.html';
    }
    // Ctrl/Cmd + K to go to contact
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        window.location.href = 'contact.html';
    }
});

// Log page load time
console.log('✅ AICODIN - Page loaded successfully at', new Date().toLocaleTimeString());