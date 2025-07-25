# Instinctive Project Assignment



## Steps For Deployment

Clone the Repository

```bash
git clone https://github.com/your-username/your-repo.git

```
Install Dependencies

```bash
npm install
```

Create a .env file in the root directory and add:
```
DATABASE_URL="postgresql://postgres.idqilraruetpocwezuuw:vjfzB64Ez2XdbWuc@aws-0-ap-south-1.pooler.supabase.com:5432/postgres?pgbouncer=true"
```
Set Up Prisma
```
npx prisma generate
npx prisma db push
```
Start Development Server
```
npm run dev
```
The app will run on : http://localhost:3000

Deployment on Vercel
```
Go to Vercel

Import your GitHub repository

Add the same .env variables in environment variables field.

Click Deploy
```
## Tech Decisions

* **Supabase**: Chosen as a free cloud database to avoid the hassle of managing database hosting.
* **Prisma**: Used as the ORM because it provides powerful, built-in functions for performing database operations efficiently.
* **Vercel**: Selected for deployment since it is the most optimized platform for Next.js applications.
## If I had more time

**1.** &nbsp; Make the app fully responsive for different screen sizes.

**2.** &nbsp; Enable the Incidents navigation item in the navbar to allow sorting incidents by their start time dynamically (currently, incidents are displayed in ascending order because the seeded data was inserted in increasing start time sequence like 14:00, 15:45, and so on).

**3.** &nbsp; Implement logic to display a mini strip with two additional camera thumbnails dynamically. For example, if someone is viewing Camera 2 recordings, the strip should show thumbnails from Camera 1 and Camera 3. Currently, the app displays two random incidents that do not change when switching the main view (currently a static image instead of an MP4 video).

**4.** &nbsp; Couldn’t find a free MP4 video, so I used static images related to the problem statement instead.

**5.** &nbsp; As of now, I’ve built a timeline UI, but it’s non-functional. The yellow circle can be dragged along the scale, but if I had an actual video, I would have fully implemented the functionality.
