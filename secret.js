var spreadsheetId = "1D11XWB5fNp1Exc5F2m29iLLYadMkqw6VkFCACDGJ4NI";
var sheetId = "1165762334";

gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: spreadsheetId,
    range: range
  }).then((response) => {
    var result = response.result;
    var numRows = result.values ? result.values.length : 0;
    console.log(`${numRows} rows retrieved.`);
  });