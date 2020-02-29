import { GoogleSpreadsheet } from "google-spreadsheet";

const doc = new GoogleSpreadsheet(
  "1S7_KDr9jhVMhnjew9AmnDf1k2VJeszloJDjAjqe22gs"
);

async function authenticate() {
  await doc.useServiceAccountAuth({
    client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY
  });
}

async function addNewRow(row) {
  await this.authenticate();
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  await sheet.addRow(row);
}

export default {
  authenticate,
  addNewRow
};
