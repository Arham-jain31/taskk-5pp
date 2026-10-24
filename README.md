# SIT313 P5 – DEV@Deakin Newsletter

This project extends the supplied DEV@Deakin React website with the P5 newsletter sign-up feature. The React frontend sends a POST request to an Express backend, and the backend uses SendGrid to send the welcome email.

## What changed

- Updated the newsletter form in `src/components/Footer.jsx` to send the entered email to `POST /subscribe`.
- Added basic email validation, a loading state, and success/error feedback for the user.
- Added a Vite development proxy in `vite.config.js`. This forwards `/subscribe` requests to `http://localhost:3000`, so CORS configuration is not needed for local development.
- Added the provided Express code as `backend/server.js`. The server logic has been kept as supplied.
- Added `backend/package.json` and `backend/.env.example` for the backend setup.
- Added `P5_Report_Template.md` as a starting point for the report.

## Requirements

- Node.js and npm
- A SendGrid account and API key
- A sender email address verified in SendGrid

## Setup the backend

1. Open a terminal in this project folder.
2. Go into the backend folder:

   ```bash
   cd backend
   ```

3. Install backend packages:

   ```bash
   npm install
   ```

4. Copy `.env.example` to a file named `.env` in the `backend` folder.
5. Add your own SendGrid API key and verified sender email to `backend/.env`. Do not share this file or commit it to GitLab.
6. Start the backend:

   ```bash
   npm start
   ```

The backend should display `Server running at http://localhost:3000`.

## Start the React frontend

Open a second terminal in the project root (the `C1_Arham_Beginner` folder), then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Keep both terminals running while testing the subscription form.

## Test the newsletter form

1. Scroll to **SIGN UP FOR OUR DAILY INSIDER** on the home page.
2. Submit an empty or invalid email to check the validation message.
3. Submit a valid email address.
4. If SendGrid is configured correctly, the page should display the backend success message and the backend terminal should show the email API status code.
5. Also test the error case with the backend stopped or with invalid SendGrid credentials. The frontend should show an error message rather than claiming the subscription succeeded.

The supplied server responds with HTTP 202 when the SendGrid request succeeds. SendGrid commonly reports `202 Accepted`; record the actual status shown in your terminal rather than changing it to a different value. An actual email is only sent when valid SendGrid credentials and a verified sender are configured.

## GitLab checklist

- Create the Task P5 repository and set its visibility to **Internal**, as required by the task sheet.
- Commit source files and resources with meaningful commit messages.
- Do not commit `node_modules`, `dist`, or `.env` files.
- Before submission, add your actual repository and Panopto video links to the report.

## Important

The Vite proxy is for local development. For deployment, configure the frontend and backend hosting so the API endpoint is reachable securely. Never place a SendGrid API key in frontend code or in a public repository.
