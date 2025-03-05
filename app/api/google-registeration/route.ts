import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    // const toPush = Object.values(body).map((value) => value?.toString());
    const toPush = [
      body.email,
      body.phone,
      body.name,
      body.section,
      body.branch,
      body.schno,
      body.linkedin,
      body.vone,
      body.vtwo,
      body.isfr,
      body.frid,
      body.skills,
      body.sop,
    ];
    // Create auth credentials
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Create client
    const sheets = google.sheets({ version: 'v4', auth });
    
    // Params for appending to spreadsheet
    toPush.push(new Date().toISOString());
    const params = {
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: process.env.SHEET_RANGE, // Adjust based on your columns
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [toPush]
      }
    };

    // Append the values
    const response = await sheets.spreadsheets.values.append(params);

    return NextResponse.json({ 
      success: true,
      message: 'Data added to Google Sheets',
      response: response.data 
    }, { status: 200 });

  } catch (error) {
    console.error('Error appending to Google Sheets:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Failed to append to Google Sheets',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}