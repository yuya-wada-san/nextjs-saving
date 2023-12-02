import { google } from 'googleapis';
import { unstable_noStore as noStore } from 'next/cache';

export async function getGoogleSheetsData(range: string) {
  noStore();
  
  const auth = await google.auth.getClient({
    projectId: "prefab-fabric-406501",
    credentials: {
      type: "service_account",
      private_key: process.env.GCP_SERVICEACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      client_email: process.env.GCP_SERVICEACCOUNT_EMAIL,
      client_id: "116113235585374941436",
      token_url: "https://oauth2.gooxgleapis.com/token",
      universe_domain: "googleapis.com",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  try {
    const data = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: range,
    });
    
    return data.data.values;

  } catch (error) {    
    return { message: 'Fetched Error: Failed to Show Summary.', };
  }
}