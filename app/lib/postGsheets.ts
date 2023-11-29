'use server';

import { google } from "googleapis";

export default async function postGsheets(range: string) {

  const auth = await google.auth.getClient({
    projectId: "prefab-fabric-406501",
    credentials: {
      type: "service_account",
      client_email: process.env.GCP_SERVICEACCOUNT_EMAIL,
      private_key: process.env.GCP_SERVICEACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      client_id: "116113235585374941436",
      token_url: "https://oauth2.gooxgleapis.com/token",
      universe_domain: "googleapis.com"
    },
    scopes: [
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/spreadsheets'
    ]
  })

  const sheets = google.sheets({
      auth,
      version: 'v4'
  });

  const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
          values: [
              ["2023/11/29", "Store Name", "Category", "1000", "Other", "Yuya"]
          ]
      }
  });

  return response.statusText;
}