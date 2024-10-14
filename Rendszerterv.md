# Rendszerterv – Pomodoro Webalkalmazás

## 1. A rendszer célja    

A **TimeFlow Solutions** megbízásából egy Pomodoro technikán alapuló webalkalmazás fejlesztése a cél, amely hatékony időgazdálkodási eszközt nyújt felhasználók számára. A Pomodoro technika lényege, hogy rövid, 25 perces időblokkokban dolgozik a felhasználó, amit egy rövid szünet követ, majd minden negyedik blokk után hosszabb pihenőt vehet. Az alkalmazás segíti a munkafolyamatok tervezését, a hatékonyság növelését, valamint a feladatok nyomon követését. A rendszer alapvető célja egy olyan könnyen használható és hozzáférhető platform létrehozása, amely mobil és asztali eszközökön is elérhető, és integrálható más produktivitást támogató alkalmazásokkal, mint például Google Calendar vagy Trello. Az alkalmazás személyre szabható Pomodoro időzítőket kínál, statisztikai áttekintést biztosít a felhasználói teljesítményről, és motiváló visszajelzéseket nyújt a produktív időszakok sikeres lezárásakor.  

## 2. Projektterv  

A projekt három hónapra van tervezve, négy fő fázisra bontva: **tervezés**, **fejlesztés**, **tesztelés** és **átadás**. A projektben négy fejlesztői szerepkör vesz részt: frontend fejlesztő, backend fejlesztő, UX/UI designer és tesztelő. A tervezés fázisa két hétig tart, amely során a rendszerterv, az adatbázis és a funkcionális specifikációk kerülnek kidolgozásra. A fejlesztés szakasza négy hétig tart, amely alatt a frontend és backend modulok integrálása, valamint az adatbázis létrehozása történik. A tesztelési fázisban két hét alatt az alkalmazás hibajavítása, optimalizálása és felhasználói tesztelése valósul meg. A projekt végső két hetében az átadás és dokumentáció kerül sorra, valamint a kliens számára történő átadási fázis. A fejlesztés agilis módszertan szerint halad, ahol két hetes sprintek biztosítják a folyamatos visszacsatolást és iteratív fejlesztést.

## 3. Üzleti folyamatok modellje

Az alkalmazás fő célcsoportja az időgazdálkodást és hatékonyságot javítani kívánó egyének és kisvállalkozások, akik a Pomodoro technika révén növelhetik termelékenységüket. A rendszer működési folyamata azzal kezdődik, hogy a felhasználó létrehozza fiókját, majd megadhatja a napi feladatait. A felhasználó egy Pomodoro időszakot indíthat, melynek végén az alkalmazás automatikusan elindítja a szünetet. Minden felhasználó hozzáférhet személyes statisztikákhoz, amelyek megmutatják, mennyi időt töltöttek produktív munkával, illetve pihenéssel. A rendszer lehetővé teszi a feladatok fontossági sorrendbe állítását és azok időzítését a nap különböző időpontjaira. Az adminisztrációs panelen keresztül a rendszergazdák ellenőrizhetik a felhasználói aktivitást és kezelhetik a bejelentett hibákat. Az üzleti folyamatok fontos eleme az is, hogy a felhasználó hozzáadhatja saját jegyzeteit, céljait, és ezeket a rendszer elemzi, visszajelzést adva a haladásról.

## 4. Követelmények

A Pomodoro alkalmazásnak több fontos követelményt kell teljesítenie.

**Funkcionális követelmények**:
- A felhasználóknak lehetőségük kell, hogy legyen egyéni Pomodoro időszakok indítására és befejezésére.
- A rendszernek támogatnia kell a feladatok kezelését, ideértve az új feladatok létrehozását, szerkesztését, törlését és fontossági sorrendbe állítását.
- A felhasználók hozzáférést kapnak statisztikákhoz, amelyek tartalmazzák az elvégzett Pomodoro munkamenetek számát, a szünetek idejét és a produktív időszakokat.
- A rendszernek e-mailes értesítéseket és emlékeztetőket kell küldenie a felhasználóknak.

**Nem funkcionális követelmények**:
- Az alkalmazás legyen gyors, és minden felhasználói kérésre maximum 2 másodperc alatt válaszoljon.
- A rendszernek platformfüggetlennek kell lennie, tehát böngészőből, mobilról és tabletről is használhatónak kell lennie.
- A rendszer biztonságosan tárolja a felhasználói adatokat titkosított adatbázisban, és GDPR kompatibilis legyen.

## 5. Funkcionális terv

A Pomodoro alkalmazás fő funkciói között szerepel az időzítők kezelése, feladatok nyomon követése és statisztikák megjelenítése. A felhasználók a főoldalon Pomodoro időzítőt indíthatnak, ahol a standard 25 perces munkamenetet és 5 perces szünetet alapértelmezésként kínálja a rendszer, de lehetőséget biztosít egyéni időzítők beállítására is. A feladatkezelés modul lehetővé teszi, hogy a felhasználók új feladatokat adjanak hozzá, felosztva azokat több Pomodoro ciklusra. Az alkalmazás a felhasználói fiókokhoz kapcsolódó adatokat felhasználói profilon belül tárolja, ahol a statisztikai adatok megtekinthetők, például az egyes napokon végrehajtott Pomodoro szám, a szünetek időtartama és a teljesített feladatok listája. Az alkalmazás push értesítésekkel és e-mail értesítésekkel is támogatja a felhasználót, hogy mindig tudatában legyen a következő munkamenetnek vagy szünetnek.

## 6. Fizikai környezet

A Pomodoro webalkalmazás egy felhőalapú infrastruktúrán fog futni az AWS szolgáltatásainak használatával, amely biztosítja a skálázhatóságot és a megbízhatóságot. A rendszer egy klasszikus 3-tier architektúrában működik: frontend, backend és adatbázis rétegekre bontva.
- A frontend részt HTML5, CSS3 és JavaScript (React keretrendszer) segítségével fejlesztjük, amelyet az AWS CloudFront segítségével szolgáltatunk.
- A backend Java nyelven, Spring Boot keretrendszerrel készül, és az AWS Lambda futtatja, amely biztosítja a skálázható kiszolgálást.
- Az adatbázist egy AWS RDS MySQL szolgáltatás biztosítja, amely automatikusan menti és kezeli a felhasználói adatokat.
  - A fejlesztői környezetben Docker konténereket használunk a lokális fejlesztési és tesztelési feladatok egyszerűbb kezelése érdekében.
  - A rendszer folyamatos integrációját és szállítását (CI/CD) az AWS CodePipeline támogatja.
