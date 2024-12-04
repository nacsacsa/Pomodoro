| Tesztelő: Horog Gabriella | Idő: 2024.11.30 |
|---------------------------|-----------------|
| Verzió:                   | Kliens:         |


| Teszteset | Várt eredmény | Kapott eredmény | Sikeres | Hibaüzenet | Megjegyzés |
|------------------------------------------------------------------------------------|---------------|-----------------|---------|------------|------------|
|   Az addTasknak új feladatot kell hozzáadnia a feladattárolóhoz   |     task      |      task       |   Igen  |      -     |      -     |
|   Az updateTasknak frissítenie kell a feladat nevét   |   Updated Task      |     Updated Task       |  igen   |      -     |      -     |
|   A deleteTasknak el kell távolítania a feladatot   |    null     |     null         |    Igen       |        |      -     |

| Tesztelő: Horog Gabriella | Idő: 2024.12.4 |
|---------------------------|----------------|
| Verzió:                   | Kliens:        |

| Teszteset | Várt eredmény | Kapott eredmény | Sikeres | Hibaüzenet | Megjegyzés |
|------------------------------------------------------------------------------------|---------------|-----------------|---------|------------|------------|
|  A playSoundnak a megfelelő hangerővel kell lejátszania a hangot   |    playMock, soundEffect.volume      |   playMock, soundEffect.volume           |  Igen   |     -    |      -     |
|  A skipSoundnak megfelelő hangerővel kell lejátszania a kihagyási hangot      |   playMock, 0.5        |       playMock, 0.5      |   Igen   |      -     |      -     |