# Kanji Cards
https://kanjicards.herokuapp.com/

## Description

Japanese language learners can search for Japanese characters, save my favorites, and study at my own pace

## Installation

1. Clone the repository to your computer

2. npm install

3. cd kanji-cards && npm install

## Key Features
* The ability to search for a kanji/word and favorite it

* The ability to search for kanji using the English meaning, pronunciation, or kanji character 

* The ability to study at your own pace. No requirement to start at the very beginning to use and study with this app

* Any level of Japanese learner can use the app

## Future Improvements and Features

* Continue work on authorization using Passport.js and Ember Simple Auth

* User can create study lists and add kanji to those lists

* User can mark a kanji as ‘known’ or ‘unknown’

* Create a view where kanji ‘flashcards’ show on the screen one at a time

## Technologies Used

* Ember.js
* Mongoose
* Express
* Bootstrap CSS Framework
* Dataset from CSV file from Kanji Alive

## Credits/Helpful links

Helpful tutorials:

https://www.youtube.com/watch?v=owDmPTSJkrg

https://www.programwitherik.com/setup-your-ember-project-with-node/

https://www.programwitherik.com/how-to-setup-your-ember-project-with-mongo-and-node/

https://zaiste.net/importing_json_into_mongodb/

very helpful for setting up passport-local-mongoose auth
https://github.com/saintedlama/passport-local-mongoose/tree/master/examples/login

Importing JSON into database: mongoimport --db <db-name> --collection <coll-name> --type json --file seed.json --jsonArray
If the specified collection doesn't exist, it will be automatically created; otherwise new documents will be appended to the existing one.

Running your servers in development mode: In project directory: node server.js on port 3000
in a separate terminal window, cd kanji-cards, then ember serve --proxy http://127.0.0.1:3000

to build ember project in public folder:
in ember project directory, ember build --environment=production --output-path=../public

Kanji data from Kanji Alive - Creative Commons 4.0 International License
https://github.com/kanjialive/kanji-data-media/tree/master/language-data


## License
MIT License


---


