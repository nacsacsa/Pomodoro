| Tesztelő: Kolozsi Márton   | Idő: 2024.11.29 |
|---------------------------|-----------------|
| Verzió:     | Kliens:  |


| Teszteset | Várt eredmény | Kapott eredmény | Sikeres | Hibaüzenet | Megjegyzés |
|------------------------------------------------------------------------------------|---------------|-----------------|---------|------------|------------|
|  Helyesen kell inicializálnia az időbeállításokat      |    25, 5, 15       |      25, 5, 15       |   igen  |      -     |      -     |
|  Helyes időformátumot kell megjelenítenie az updateDisplayben     |   25:00        |    25:00         |  igen   |      -     |      -     |
|  Frissítenie kell a pomodoro módot és kijelzőt     |      pomodoro     |    pomodoro         |   igen  |      -     |      -     |

| Tesztelő: Délczeg Sándor Balázs | Idő: 2024.11.30 |
|---------------------------------|-----------------|
| Verzió:                         | Kliens:         |


| Teszteset | Várt eredmény | Kapott eredmény | Sikeres | Hibaüzenet | Megjegyzés |
|------------------------------------------------------------------------------------|---------------|-----------------|---------|------------|------------|
|  Le kell állítania az időzítőt és frissítenie kell a gomb szövegét      |    FOLYTATÁS       |      FOLYTATÁS       |   igen  |      -     |      -     |
|  Megfelelően kell kezelnie a munkamenet végét és a módváltást    |    pomodoro       |     pomodoro        |  igen   |      -     |      -     |
|  Ébresztőhangot kell lejátszania a munkamenet végén    |     -      |      -       |   Nem  |     Error: Property `playAlarmSound` does not exist in the provided object    |      -     |
