[![Netlify Status](https://api.netlify.com/api/v1/badges/5ff67d4d-12d4-4a3b-837b-22b6c22f4855/deploy-status)](https://app.netlify.com/sites/keen-pasteur-77b50d/deploys)

# Welcome to McMaster's IEEE Student Board Website/Commitee! https://www.ieeemcmaster.ca/

This website serves to be a replacement of the currently deployed website, but due to circumstances with COVID-19 and just general busyness, has been left incomplete for a while.

## Currently Built With

* React.js (JavaScript)
* Next.js
* Chakra UI
* Heroku
* Netlify

## APIs Used

* Google Calendar API - to fetch current events from the IEEE Workshops calendar.

## Why no TypeScript?

For simpler projects JavaScript will do just fine. Enterprise level products with large codebases absolutely benefit from TypeScripts offerings but it commonly causes problems that simply don't matter during runtime. Plus its easier for newcomers to learn JavaScript first before having to deal with TypeScript.

# Development

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. Install dependencies:
```bash
yarn install
```
2. Set up the environment variables:
* Copy the contents of `.env.example` to a new file named `.env.local` in `/`
* Copy the contents of `/backend/.env.example` to a new file named `.env` located at `/backend`


3. Run the Next.js development server:

```bash
yarn dev
```
4. Run the Strapi CMS development server (this is required otherwise an error will occur on pages that rely on it.):

```bash
yarn backend-dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site and [http://localhost:1337](http://localhost:1337) to access the Strapi development server

## Contribute  

Take a look at our issues for some tickets to work on, or you can submit one!

## Learn More

To learn more about our stack, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Strapi CMS](https://strapi.io/)


