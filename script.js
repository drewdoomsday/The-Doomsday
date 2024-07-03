function updateDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
    const dateString = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    dateTimeElement.textContent = `${dayOfWeek}, ${dateString}`;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initial call to display the date and time immediately when the page loads
updateDateTime();

document.addEventListener('DOMContentLoaded', (event) => {
    const countdownElement = document.getElementById('countdown');

    // Set the date we're counting down to
    const endDate = new Date("Dec 30, 2024 00:00:00").getTime();

    // Update the countdown every 1 second
    const countdownFunction = setInterval(() => {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the end date
        const distance = endDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element
        countdownElement.textContent = `${days}:${hours}:${minutes}:${seconds}`;

        // If the countdown is finished, write some text
        if (distance < 0) {
            clearInterval(countdownFunction);
            countdownElement.textContent = "EXPIRED";
        }
    }, 1000);
});
