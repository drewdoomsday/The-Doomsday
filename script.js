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