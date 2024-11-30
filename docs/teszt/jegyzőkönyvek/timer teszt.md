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

| Tesztelő:  Horog Regina | Idő:  2024.11.30 |
|-------------------------|------------------|
| Verzió:                 | Kliens:          |


| Teszteset | Várt eredmény | Kapott eredmény | Sikeres | Hibaüzenet | Megjegyzés                                   |
|------------------------------------------------------------------------------------|---------------|-----------------|---------|------------|----------------------------------------------|
|   A saveSettingsnek meg kell hívnia a closeSettings parancsot, és frissítenie kell a kijelzőt    |     true      |     true        |   Igen  |      -     | -                                            |
|   Az updateTimeSettingsnek frissítenie kell az időbeállítások értékeit a beviteli mezők alapján    |     1800, 600, 1200, 5      |    1800, 600, 1200, 5         |  igen   |      -     | -                                            |
|   Az applySettingsnek frissítenie kell a hangerőt, és meghívnia kell az updateTimeSettings parancsot   |     -    |   -   |  Nem   |   updateDisplay is not defined| ReferenceError: updateDisplay is not defined |      -     |
