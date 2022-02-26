const AirtablePlus = require('airtable-plus');

const airtable = new AirtablePlus({
  baseID: 'appmUJw15KPRzmRit',
  apiKey: 'key6sKzNin7OW9Woc'
});


export async function handler(event, context) {
  const { fields, tableName } = JSON.parse(event.body);

  console.log(`Pushing to ${tableName}`, fields);

  try {
    const res = await airtable.create(fields, { tableName });

    console.log(`Result:`, res);

    return {
      statusCode: 201
    };

  } catch(e) {
    console.log(e)
    return {
      statusCode: 422,
      body: JSON.stringify({ message: e })
    };
  }
}
