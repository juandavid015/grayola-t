<a href="https://grayola-t.vercel.app/">
  <img alt="Grayola platform test deployment" src="https://res.cloudinary.com/dut4cwhtd/image/upload/v1722337291/grayola-t.vercel.app__Desktop_5_x1zcwj.png">
  <h1 align="center">Grayola - platform test</h1>
</a>

<p align="center">
 Built with Next.js and Supabase
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#demo"><strong>Demo</strong></a> ·
  <a href="#deploy-to-vercel"><strong>Deploy to Vercel</strong></a> ·
  <a href="#clone-and-run-locally"><strong>Clone and run locally</strong></a> ·
  <a href="#setting-up-the-policies-in-supabase"><strong>Policies</strong></a>
  <a href="#create-a-function-to-transfer-auth-users-to-a-new-public-users-database"><strong>Database functions</strong></a>
  <a href="#create-a-trigger-into-the-auth-schema-(private)"><strong>Database auth trigger</strong></a>
  <a href="#add-google-as-authentication provider"><strong>Google as provider</strong></a>
</p>
<br/>

## Features

- Works across the entire [Next.js](https://nextjs.org) stack
  - App Router
  - Pages Router
  - Middleware
  - Client
  - Server
  - It just works!
- supabase-ssr. A package to configure Supabase Auth to use cookies
- Styling with [Tailwind CSS](https://tailwindcss.com)
- Optional deployment with [Supabase Vercel Integration and Vercel deploy](#deploy-your-own)
  - Environment variables automatically assigned to Vercel project

## Demo

You can view a fully working demo at [grayola-t](https://grayola-t.vercel.app/).

## Clone and run locally

1. After cloning the repo you'll first need a Supabase project which can be made [via the Supabase dashboard](https://database.new)

2. Install all dependencies

   ```bash
   npm i
   ```
3. Rename `.env.local.example` to `.env.local` and update the following:

   ```
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   ```

   Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api)

5. You can now run the Next.js local development server:

   ```bash
   npm run dev
   ```

   This will be running on [localhost:3000](http://localhost:3000/).

> Check out [Build a User Management App with Next.js](https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs?queryGroups=language&language=ts) to further information and examples.

## Setting up the policies in supabase
You will need to create new policies into your supabase authentication section and apply them in the projects database.

<img alt="Policies supabase screenshot" src="https://res.cloudinary.com/dut4cwhtd/image/upload/v1722337952/a35b5be4-5c09-4d5a-a869-bdc32f5667de.png">
Visit [Build a User Management App with Next.js](https://supabase.com/docs/guides/database/postgres/row-level-security) for policies documentation

## Create a function to transfer auth users to a new public users database. 
This is done to preserve automatic authentication services and allowing to manipulate relations based on the role of the user.

<img alt="Function example subabase screenshot " src="https://res.cloudinary.com/dut4cwhtd/image/upload/v1722338525/fd14bec1-572e-4e02-8ee0-ff9c9f1b529e.png">

## Create a trigger into the auth schema (private)
This way it can fire the function after the flow of the "usear-authenticated" 

<img alt="Function example subabase screenshot " src="https://res.cloudinary.com/dut4cwhtd/image/upload/v1722338894/bf51642e-52d8-4965-9f80-fc2135ba911f.png">

## Add google as authentication provider
Google is the provider selected for the authentication process. Into supabase authentication page you must enable it and copy the credential needed to connect with good auth client providers

> Check out [Login with Google](https://supabase.com/docs/guides/auth/social-login/auth-google?queryGroups=environment&environment=server) to know more about.
