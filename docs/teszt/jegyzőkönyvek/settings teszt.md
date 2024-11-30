| Tesztelő:  Horog Regina | Idő:  2024.11.30 |
|-------------------------|------------------|
| Verzió:                 | Kliens:          |


| Teszteset | Várt eredmény | Kapott eredmény | Sikeres | Hibaüzenet | Megjegyzés                                   |
|------------------------------------------------------------------------------------|---------------|-----------------|---------|------------|----------------------------------------------|
|   A saveSettingsnek meg kell hívnia a closeSettings parancsot, és frissítenie kell a kijelzőt    |     true      |     true        |   Igen  |      -     | -                                            |
|   Az updateTimeSettingsnek frissítenie kell az időbeállítások értékeit a beviteli mezők alapján    |     1800, 600, 1200, 5      |    1800, 600, 1200, 5         |  igen   |      -     | -                                            |
|   Az applySettingsnek frissítenie kell a hangerőt, és meghívnia kell az updateTimeSettings parancsot   |     -    |   -   |  Nem   |   updateDisplay is not defined| ReferenceError: updateDisplay is not defined |      -     |
