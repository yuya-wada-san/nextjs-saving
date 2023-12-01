'use server';

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { google } from "googleapis";

const FormSchema = z.object({
  id: z.string(),
  sheet: z.string({
    invalid_type_error: 'Please select a sheet.',
  }),
  person: z.string({
    invalid_type_error: 'Please select a person.',
  }),
  store: z.string({
    invalid_type_error: 'Please enter a store name.',
  }),
  description: z.string({
    invalid_type_error: 'Please enter a description.',
  }),
  category: z.string({
    invalid_type_error: 'Please select a category.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  data: z.string(),
});

const PostForm = FormSchema.omit({ id: true, data: true });

export type State = {
  errors?: {
    sheet?: string[];
    person?: string[];
    store?: string[];
    description?: string[];
    category?: string[];
    amount?: string[];
  };
  message?: string | null;
}

export async function postForm(prevState: State, formData: FormData) {
  const validatedFields = PostForm.safeParse({
    sheet: formData.get('sheet'),
    person: formData.get('person'),
    store: formData.get('store'),
    description: formData.get('description'),
    category: formData.get('category'),
    amount: formData.get('amount'),
  })

  if(!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Expense.',
    };
  }
  
  const { sheet, person, store, description, category, amount } = validatedFields.data;
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

  const sheets = google.sheets({ auth, version: 'v4' });

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: `RawData_${sheet}!A1:F1`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [date, store, description, amount, category, person]
        ]
      }
    });

  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Expenses.',
    };
  }

  revalidatePath(`/pages/saving`);
  redirect('/pages/saving');
}