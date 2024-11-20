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

        // A hét napjainak feliratai
        daysOfWeek.forEach(day => {
            const dayHeader = document.createElement('div');
            dayHeader.classList.add('day-header');
            dayHeader.textContent = day;
            calendar.appendChild(dayHeader);
        });

        // Az előző hónap napjai
        const daysInPrevMonth = new Date(year, month, 0).getDate();
        for (let i = firstDayOfWeek - 1; i >= 0; i--) {
            const prevMonthDay = document.createElement('div');
            prevMonthDay.classList.add('day', 'other-month');
            prevMonthDay.textContent = daysInPrevMonth - i;
            calendar.appendChild(prevMonthDay);
        }

        // A jelenlegi hónap napjai
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = day;

            const currentDateObj = new Date(year, month, day); // Az aktuális nap dátuma
            const dateString = formatDate(currentDateObj); // Formázott dátum (YYYY-MM-DD)

            // Ha van Pomodoro ciklus ezen a napon, hozzáadjuk a paradicsomot
            if (pomodoroData[dateString]) {
                for (let i = 0; i < pomodoroData[dateString]; i++) {
                    const tomato = document.createElement('span');
                    tomato.classList.add('tomato');
                    tomato.textContent = '🍅';
                    dayElement.appendChild(tomato);
                }
            }

            // Ha ma van
            const today = new Date();
            if (today.toDateString() === currentDateObj.toDateString()) {
                dayElement.classList.add('today');
            }

            // Ha vasárnap van
            if (currentDateObj.getDay() === 0) {
                dayElement.classList.add('sunday');
            }

            // Naptár napjához hozzáadjuk az elemet
            calendar.appendChild(dayElement);
        }