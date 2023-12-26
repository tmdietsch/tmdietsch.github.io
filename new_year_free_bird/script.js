document.addEventListener("DOMContentLoaded", function() {
    // Get the clock element
    const clock = document.getElementById("clock");
    // Get the video element
    const midnightVideo = document.getElementById("midnightVideo");

    // Update the clock every second
    setInterval(updateClock, 333);

    // Check for midnight and show the video
    const midnightInterval = setInterval(checkMidnight, 10);

    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        clock.textContent = timeString;
    }

    function checkMidnight() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const milliseconds = now.getMilliseconds();

        // Check if it's midnight
        if (hours === 22 && minutes === 40 && seconds === 5 && milliseconds < 100 && milliseconds > 0) {
            // Show the video element
            midnightVideo.classList.remove("hidden");
            // Play the video
            midnightVideo.play();
            midnightVideo.currentTime += 240;
            midnightVideo.muted = false;
            // No longer need to check for midnight
            clearInterval(midnightInterval);
        }
    }
});
