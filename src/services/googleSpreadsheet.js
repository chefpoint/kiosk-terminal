import { GoogleSpreadsheet } from "google-spreadsheet";

const doc = new GoogleSpreadsheet(
  "1S7_KDr9jhVMhnjew9AmnDf1k2VJeszloJDjAjqe22gs"
);

async function authenticate() {
  await doc.useServiceAccountAuth(require("./googleServiceAccount.json"));
}

async function addNewRow(row) {
  await doc.useServiceAccountAuth(require("./googleServiceAccount.json"));
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  await sheet.addRow(row);
}

export default {
  authenticate,
  addNewRow
};
