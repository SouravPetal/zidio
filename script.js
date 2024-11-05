const reviews = [
    '"Zidio is exceptional. From start to finish, they demonstrated a deep understanding of our goals and provided invaluable guidance throughout the process."',
    '"Great service, highly recommend. Very professional and efficient."',
    '"Absolutely satisfied with their work. Professional team and top-notch services."',
    '"Comment likhlo bhai."'
];

function showReview(index) {
    const reviewText = document.getElementById('review-text');
    reviewText.classList.remove('fade-in');
    setTimeout(() => {
        reviewText.innerText = reviews[index];
        reviewText.classList.add('fade-in');
    }, 100);
}

// Add animation class
const style = document.createElement('style');
style.innerHTML = `
    .fade-in {
        animation: fadeIn 0.5s ease-in-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
function showVideo(url) { 
    const videoFrame = document.getElementById('video-frame'); videoFrame.src = url;
  }       