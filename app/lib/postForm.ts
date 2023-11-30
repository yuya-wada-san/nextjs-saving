'use server';

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { google } from "googleapis";

const FormSchema = z.object({
  id: z.string(),
  person: z.string({
    invalid_type_error: 'Please select a person.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  data: z.string(),
});

const PostForm = FormSchema.omit({ id: true, data: true });

export type State = {
  errors?: {
    person?: string[];
    amount?: string[];
  };
  message?: string | null;
}

export async function postForm(prevState: State, formData: FormData) {
  const validatedFields = PostForm.safeParse({
    person: formData.get('person'),
    amount: formData.get('amount'),
  })

  if(!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }
  
  const { person, amount } = validatedFields.data;
  const date = new Date().toISOString().split('T')[0].replace(/\-/g, '/');
  
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
  try {
    console.log(`${person}, ${amount}, ${date}`);

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "RawData_Test!A1:F5",
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [date, "Store Name", "Category", amount, "Other", person]
        ]
      }
    });

    console.log(response.statusText);

  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  revalidatePath(`/pages/saving`);
  redirect('/pages/saving');
}