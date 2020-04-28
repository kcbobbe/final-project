Helpful tutorials:

https://www.youtube.com/watch?v=owDmPTSJkrg

https://www.programwitherik.com/setup-your-ember-project-with-node/

https://www.programwitherik.com/how-to-setup-your-ember-project-with-mongo-and-node/

https://zaiste.net/importing_json_into_mongodb/

mongoimport --db <db-name> --collection <coll-name> --type json --file seed.json
--jsonArray
If the specified collection doesn't exist, it will be automatically created; otherwise new documents will be appended to the existing one.

node server.js on port 3000
in a separate terminal window, (in ember project directory) ember serve --proxy http://127.0.0.1:3000

to build ember project in public folder
in ember project directory, ember build --environment=production --output-path=../public