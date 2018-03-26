# Kmom01
#### Berätta utförligt om din syn på Express och Pug och hur de samverkar. Relatera till andra ramverk du jobbat med. Lyft fram de fördelar och eventuellt nackdelar du finner, eller bara notera skillnader och likheter.

Jag tycker att dom fungerar och samarbetar på ett väldigt bra sätt. Dock om det var som jag att när man aldrig har jobbat med det sedan tidigare så kan det upplevas lite krångligt och klurigt att pussla ihop allt. Men när man har skrivit ett par filer så släpper det och då har man ju fått in tekniken. Jag har jobbat lite grann innnan med Angular. Den största och mest märkvärda skillnaden är att man renderar vyerna på serversidan istället för på clienten, vilket är bra för vår statiska me sida. Som jag sa i början att express och pug samabertar på ett bra sätt är ju en fördel vad jag har märkt i alla fall, att man kan komma igång väldigt snabbt.

#### Berätta om din katalogstruktur och hur du organiserade din kod, hur tänkte du?

Jag försökte göra det så tydligt som möjligt för mig själv. Jag har en app.js som jag använder som “grund fil” där jag hanterar mina routes och startar servern. Sen har jag delat upp kataloger för specifika uppgifter. Jag har min content där mina markdowns ska finnas. Jag har folder för mina views och folder för mina routes. Jag tycker att denna strukturen fungerar bra för mig, men kan dock ändras framöver.

#### Använde du någon form av scaffolding som Express erbjuder?

Det gjorde jag inte.

#### Jobbar du med Markdown för innehållet, eller annat liknande?

Ja, jag använder mig av markdown-it för använda markdown i vyer vilket är smidigt nu i skrivandes stund när jag skriver mina redovisningstexter. Kommer nog dock bara använda markdown till just redovisningstexter. Annars tycker jag att vanlig text i html fungerar bra till exempel.

# Kmom02
#### Har du jobbat med Docker eller andra virtualiseringstekniker innan?

Det har jag inte gjort sedan tidigare, så jag är helt ny till Docker och tycker att det var väldigt spännande att jobba igenom denna övning och uppgift. Jag tycker att docker var ett väldigt smidigt sätt att testa olika versioner av node tillexempel. Det väldigt häftigt och intressant och ser stor nytta av just Docker.

#### Hur ser du på möjligheterna att använda dig av Docker för att jobba med tester av ditt repo?

Som sagt som jag svarade på i första frågan så ser jag stor nytta av att använda sig av Docker. Man kan enkelt, då med tester köra dom på olika versioner av node. Vanligtvis av vad det har varit innan så har man ju bara kört på den version man hade på sin maskin. Ens kod kan få mycket bättre kvalitet.

#### Gick allt smidigt eller stötte du på problem?

Jag hade inte några större problem i detta kursmoment och allt gick mer eller mindre smidigt för min del.

#### Skapade du din egen image, berätta om den?

Jag skapade inte en egen image under detta kursmoment. Men vem vet, det kanske kommer att hända i kommande kursmoment eller att jag kommer få användning av det i kommande projekt.


#### Övrigt.

Tyckte det var svårt att fylla på redovisningstexten i detta kursmoment. Därför kan det upplevas lite litet. Men jag tycker att detta kursmoment var väldigt roligt och spännande och gav mycket kunskap inom Docker.

# Kmom03
#### Berätta vilka tekniker/verktyg du valde för enhetstester och kodtäckning och varför?

Till redovisnings sidan så använder jag Mocha för enhetstestning och Istanbul till kodtäckning. För att kunna testa http requests så använder jag supertest.

Jag använder dessa mest för att det några av dom största och mest populära. Jag tyckte även att dom fungerade väldigt bra och är nöjd över mitt val.

#### Berätta om cin CI-kedja och reflektera över de valen du gjorde?

Just nu så är min CI-kedja endas travisCi så att jag säkrar att mina commits byggs rätt. Men i framtiden så kommer säkert fler att inkluderas. Det som jag skulle kunna inkludera senare skulle i första hand va scrutinizer som kan mäta det mesta vad jag har fattat det som. Skulle även kunna tänka mig att använda Coveralls för att mäta min kodtäckning av repot. Jag tror att dessa hade fungerat bra ihop och hade gjort det mesta och största väldigt tydligt. Jag tror inte att jag eller man behöver mer än det.

#### Reflektera över hur det gick att integrera enhetstesterna i olika Docker-kontainerns och om du ser någon nytta med detta.

Jag ser absolut stor nytta av detta i och med att man kan köra testerna i olika versioner på ett väldigt smidigt sätt för att säkra sin kod kvalitet och så att det mesta fungerar i de flesta versioner. Jag tycker att det gick bra att integrera enhetstesterna i olika Docker-kontainers och att jag fick det till att fungera på ett rätt så bra sätt. Det löser uppgiften i alla fall.

#### Hur väl lyckades du utvärdera TDD-konceptet och vilka är dina reflektioner?

Personligen så är jag inget stort fan av TDD, det fungerar inte riktigt på mig. Jag är lite för ivrig och vill bara koda och ta hand om testandet till senare. Dock så fungerar TDD väldigt bra om jag nu hade blivit påverkad av det. Det hade gjort så att man inte undviker testandet. Dock så tror jag att det tar upp väldigt mycket tid av till exempel en sprint i ett agilt arbetssätt, dock så kan man säkert ha väldigt stor nytta av det samtidigt.

#### Berätta om tankarna kring din klient/server applikation och nämn de tekniker du använder.

Jag har inte kommit på något jag skulle vilja göra ännu, men jag är som sagt inne på MEAN stack som vi håller på med här. Tror att jag kommer köra på angularjs även fast det finns Angular2+. Vill fortsätta med JavaScript ett tag till innan jag ger mig på TypeScript.




# Kmom04
#### Är du ny på realtidsprogrammering eller har du gjort liknande tidigare?

Jag har gjort något liknande i Javascript kurs vi har haft sedan tidigare där man även byggde en chatt med server och klient. Även jobbat lite smått med sockets inom python för att skicka mellan server och klient. Annars, utöver det så är jag ny till realtidsprogrammering. Men det ska däremot bli väldigt spännande att dyka in i det igen.

#### Hur gick det att jobba med konceptet realtidsprogrammering i webben, några reflektioner?

Jag tycker att det gick rätt så bra faktiskt och är nöjd med hur slutresultatet blev. Jag la ner väldigt mycket tid på att förstå vad det var man gjorde och hur allt fungerade och hängde ihop. Men jag tycker att det var väldigt spännande att jobba igenom detta och få det till att fungera och se sitt slutresultat. Jag tycker att detta kursmomentet gav väldigt mycket förståelse, i alla fall till mig.

#### Berätta om din chatt som du integrerade i redovisa-sidan.


Chatten som finns på min redovisning sida är mer eller mindre samma som vi som vi har jobbat igenom med i detta kursmomentet, det som är unikt är ju kravet från uppgiften att använda sig av nickname till chatten.


#### Berätta om den realtidsfunktionalitet du väljer att integrera i din klient/server applikation.

En chatt är ju alltid roligt att ha, oavsett vilken slags applikation det är. Så det är ju nog rätt säker på att jag vill ha. Och om det blir det så kommer jag att titta in lite närmare på Socket.io som nämdes lite snabbt i övningen, har läst lite snabbt om det och det verkar vara väldigt smidigt.

# Kmom05
#### Hur gick det att komma igång med databasen MongoDB?

Här har jag inte direkt mycket att säga eller skriva om för att allting gick väldigt smidigt för mig och jag kom igång rätt så snabbt med MongoDB och kunde jobba igenom övningen.

#### Vilken syn har du på databaser inom konceptet NoSQL?

Nytt är alltid spännande, har jobbat i en kurs innan där vi använde Cassandra som också är en NoSQL, dock så satt inte jag med det så jag är ju ny till att arbeta med NoSQL. Kanske kan till en början upplevas lite skrämmande, men efter ett tag när jag kom in i det och började förstå mer och mer så blir det väldigt intressant. Jag tror att NoSQL har sina speciella arbetsområden gentemot vad relationsdatabaser kanske har.

#### Reflektera över skillnader och likheter mellan relationsdatabaser och databaser inom NoSQL.

I vårt syfte så är det väldigt smidigt att använda NoSQL då man lätt kan stoppa in och ta ut sin data. Jag kan precis som relationsdatabaser till exempel, hämta ut allt eller specifiera exakt vad det är jag vill hämta ut. Jag tycker dock att det upplevs väldigt smidigt i MongoDB då vi inte behöver använda oss av kluddiga SQL satser eller relationer.

#### Vilka är dina tankar om asynkron programmering med JavaScript?

Min tankar för det är rätt så bra faktiskt, det känns väldigt enkelt att arbeta med async/await gentemo then. Allt blir på något sätt lite lättare att läsa.

#### Hur känner du för Docker och det sättet vi jobbar med tjänster i kontainrar?

Som jag har sagt en del så tycker jag att Docker har man alltid nytta av och det är helt fantastiskt på vilka sätt man kan använda det på. Jag tycker speciellt det var väldigt smidigt att arbeta på det sättet som i gjorde i detta kursmomentet. Tycker att det var väldigt intressant och nyttigt och smidigt att starta upp express länkat till mongodb.


# Kmom06
#### Reflektera över vikten av infrastruktur för moduler för ett programmeringsspråk.

Det något som är väldigt viktigt att allt ska gå smidigt och smärtfritt för till exempel JavaScript. När ens projekt blir till ett stort projekt så blir man väldigt beroende av en mängd dependencies vilket betyder att alla moduler måste hålla en bra kvalitet. Npm har lyckats uppnå en väldigt simpel och förståelig struktur vilket jag tror är anledningen till att det har blivit så populärt. En bra infrastruktur lockar snabbt användare och språket växer.

#### Vill du ge dig på att förklara att just npm är den tjänsten som växt snabbast av de modulerkataloger som presenteras på webbplatsen “Module Counts”?

Jag tror att det är på en stor grund av som jag nämde i första frågan att det är så simpelt och förståeligt. Man skriver ett enkelt commando och vips så är man redan igång och kan följa guiden som finns för just den npm modulen. Det är inte bara enkelt att ta del av moduler utan det är minst lika enkelt att publicera moduler som hela världen kan dra nytta av.

#### Reflektera över hur arbetet gick att välja, separera, publisera och sedan åter integrera module i din applikation.

Innan jag gjorde kmom06 så gjorde jag mer eller mindre min applikation som jag inte hade gjort eller påbörjat sedan tidigare. När jag väl var någorlunda klar med den så var det något som saknades tycker jag och det flash alerts som jag ville använda i min applikation. Det är klart att det finns extremt många sådan moduler där ute och alla är mer eller mindre det samma. Även min blir lik de andras och alla tar inspiration från varandra. Det jag fokuserade väldigt mycket på i detta moment var att hur enkelt det var att skapa sin egna modul och publicera den och sen enkelt kunna integrera den i mitt egna projekt. Det var något som jag tyckte var jätte häftigt.

För övrigt så gick min procces av att skapa min modul och sen återigen använda den i mitt projekt väldigt bra och jag tycker att det fungerar så som jag ville att det skulle.

#### Sista uppgiften om att dokumentera och färdigställa redovisa-sidan, tog det mycket tid eller hade du allt klart?

Jag hade det mesta redan klart, men som sagt, det finns alltid saker att rätta eller lägga till. Men för min del så tog det inte så jätte mycket tid att slutföra detta.



# Project
