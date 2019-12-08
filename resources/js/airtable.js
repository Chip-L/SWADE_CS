/*
This file will be used to work with the Airtable data. Fetching, parsing, making
usable.
*/
const AIRTABLE_API_KEY=keyLApTIflLaZOWMj
const AIRTABLE_BASE_ID=apppqY4AVymi8uA8E

var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID);

base('PowerModifiers').select({
    // Selecting the first 10 records in Grid view:
    maxRecords: 10,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Modifier_ID'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});
//menuHinderances.addEventListener("click", menuClick('hinderances'));
