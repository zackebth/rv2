[![Build Status](https://scrutinizer-ci.com/g/zackebth/rv2/badges/build.png?b=master)](https://scrutinizer-ci.com/g/zackebth/rv2/build-status/master)[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/zackebth/rv2/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/zackebth/rv2/?branch=master)[![Code Coverage](https://scrutinizer-ci.com/g/zackebth/rv2/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/zackebth/rv2/?branch=master)

### Introduktion
Under detta projektet så har vi blivit introducerade till en del tekniker som har byggt upp hela detta kurs projektet. Följande tekniker som vi har jobbat med och som finns i det här projektet är, Express, NodeJS, MongoDB och WebSockets.

### Installation och Körning

1. Klona ner repot
2. Ställ dig i repot
3. Kör npm install
4. Starta mongodb kontainern med docker-compose up -d mongodb
5. Kör npm start
6. Öppna en sida med http://localhost:3000/

#### Alternativ

1. Följ steg 1-3
2. Kör npm run docker-start

#### Köra i olika kontainers med olika versioner

1. Följ steg 1-4
2. Kör npm run node6/7/8/9

#### Stoppa kontainers

Kör npm run stop

### ENV Variabler

DBWEBB_PORT
DBWEBB_DSN

### Testning

För att testa projekt så kör följande (Förslagsvis, inte stegvis)

1. npm run test
2. npm run test-node6/7/8/9
