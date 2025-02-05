function startCounting() {
    const inputDate = document.getElementById('dateInput').value;
    if (!inputDate) {
        alert("Please enter a date!");
        return;
    }

    const startDate = new Date(inputDate);
    
    function updateCounter() {
        const now = new Date();
        const diffInSeconds = Math.floor((now - startDate) / 1000);
        
        const seconds = diffInSeconds;
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);
        const months = Math.floor(days / 30.44);

        document.getElementById('months').textContent = months;
        document.getElementById('weeks').textContent = weeks;
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }

    setInterval(updateCounter, 1000);
}
