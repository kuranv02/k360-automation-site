# K360 Automation Website

Deploy-ready Next.js website for k360automation.com.

## Local setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Create a GitHub repository.
2. Upload/push this project folder.
3. In Vercel, choose **Add New Project**.
4. Import the GitHub repo.
5. Click **Deploy**.
6. In Vercel project settings, add the domain `k360automation.com`.
7. Update your domain DNS records to match what Vercel gives you.

## Contact form note

The current form uses `mailto:sales@k360automation.com`, which opens the visitor's email client.
For a more professional form, connect Formspree, HubSpot, Resend, or another form backend.
