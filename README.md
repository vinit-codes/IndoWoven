# Wild & Woven - Eco-Friendly Bags Website

A Next.js website for Wild & Woven, a company specializing in eco-friendly, customizable bags for businesses.

## Features

- Responsive design optimized for all devices
- Product catalog with filtering capabilities
- Contact form with EmailJS integration
- SEO optimized with proper metadata
- PWA ready with manifest and icons

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- EmailJS for form handling

## Development

To run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Production Deployment

### Method 1: Manual Deployment

Run the deployment script:

```bash
./deploy.sh
```

Then start the production server:

```bash
npm start
```

### Method 2: Vercel Deployment

1. Create an account at [Vercel](https://vercel.com)
2. Connect your repository
3. Configure the environment variables in the Vercel dashboard:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_SITE_URL`
4. Deploy!

## Environment Variables

Create a `.env.local` file in the root directory with the following:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Making Changes

- **Content**: Update text in the corresponding page files in `app/` directory
- **Styling**: Modify `globals.css` or component-specific styles
- **Images**: Place in the `public/images` directory
