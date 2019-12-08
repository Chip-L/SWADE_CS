# SWADE_CS
Savage Worlds Adventurer Edition Dynamic Character sheet

This sheet will use a database created using [Airtable](https://airtable.com/)

Initially it will just supply some quick lookup stuff for the spells, skills, and edges. Eventually I want to turn it in to a full character sheet that will track the characters abilities - something like what D&D Beyond did with theirs.

## Production notes:
I am trying to keep this pure JS and no Node. I may use libraries (jQuery) but I'm trying to even stay away from frameworks (React, Angular).
### 12/7/2019
Airtable makes a Node library, but they don't tell me how to wire it in easily. Since I don't know Webpack or Browerify, I'd rather not try to use it. However, the Airtable API does include the curl commands for accessing the DB. This gives me the urls that I need to do the get and post commands. I need to be sure to add the key at the end. example:

    curl "https://api.airtable.com/v0/YOUR_BASE_ID/Powers?maxRecords=3&view=Grid%20view" \
    -H "Authorization: Bearer YOUR_API_KEY"
              |
              V
     https://api.airtable.com/v0/YOUR_BASE_ID/Powers?maxRecords=3&view=Grid%20view&api_key=YOUR_API_KEY}`;

(Found this trick in the comments of https://css-tricks.com/use-airtable-front-end-developer/).
