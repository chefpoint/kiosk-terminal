/* * */
/* IMPORTS */
import { GoogleSpreadsheet } from "google-spreadsheet";
import settings from "../settings/general";

const doc = new GoogleSpreadsheet(settings["google-sheets-document-id"]);

async function addNewRow(row) {
  await doc.useServiceAccountAuth({
    client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY
  });
  await doc.loadInfo();
  const sheet = doc.sheetsById[0];
  await sheet.addRow(row);
}

export default { addNewRow };
