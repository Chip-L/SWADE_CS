/*
This file will be used to work with the Airtable data. Fetching, parsing, making
usable.

I'm using the "curl" functions. This gives me the urls that I need to do the get
and post commands. I need to be sure to add the key at the end. example:
    curl "https://api.airtable.com/v0/YOUR_BASE_ID/Powers?maxRecords=3&view=Grid%20view" \
    -H "Authorization: Bearer YOUR_API_KEY"
              ||
              V
     https://api.airtable.com/v0/YOUR_BASE_ID/Powers?maxRecords=3&view=Grid%20view&api_key=YOUR_API_KEY}`;
(Found this trick in the comments of https://css-tricks.com/use-airtable-front-end-developer/ )

*/
const AIRTABLE_API_KEY='keyLApTIflLaZOWMj';
const AIRTABLE_BASE_ID='apppqY4AVymi8uA8E';

async function getPowerTableItems() {
  const urlPath = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Powers?maxRecords=3&view=Grid%20view&api_key=${AIRTABLE_API_KEY}`;
  const auth = `Authorization: Bearer ${AIRTABLE_API_KEY}`;

  console.log(`
    urlPath: ${urlPath}
    auth: ${auth}
  `);

  try {
    const response = await fetch(urlPath);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    }
  } catch (e) {
    console.log(e);
  }

}
