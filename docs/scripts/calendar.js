document.addEventListener('DOMContentLoaded', function() {
    // A PHP-ből átadott pomodoro adatok
    const pomodoroData = JSON.parse(document.getElementById('pomodoro-data').textContent);

    console.log(pomodoroData);  // Ellenőrzés a konzolban

    // Az elemek kinyerése a DOM-ból
    const calendar = document.getElementById('calendar');
    const currentMonthDisplay = document.getElementById('current-month');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');

    let currentDate = new Date(); // Kezdeti dátum (aktuális dátum)

    const daysOfWeek = ["H", "K", "Sze", "Cs", "P", "Szo", "V"];
    const months = ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"];

    // Naptár generálása
    function generateCalendar(month, year) {
        calendar.innerHTML = ''; // Naptár törlése

        const firstDayOfMonth = new Date(year, month, 1); // Az adott hónap első napja
        const daysInMonth = new Date(year, month + 1, 0).getDate(); // Az adott hónap napjainak száma
        const firstDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7; // Első hét napja (Hétfő = 0)

        currentMonthDisplay.textContent = `${year}. ${months[month]}`;