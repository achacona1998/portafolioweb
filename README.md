# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS to showcase my projects and skills as a frontend developer.

![Portfolio Screenshot](./public/Meta.png)

## 🚀 Features

- Responsive design that works on all devices
- Interactive UI with smooth animations
- Project showcase with detailed project pages
- Contact form with email integration
- Dark mode design
- Fast loading with optimized assets
- SEO friendly

## 🛠️ Technologies

- **Frontend**: React, Framer Motion
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: Vercel/Netlify
- **Backend Services**: Supabase
- **Form Handling**: EmailJS

## 📋 Prerequisites

- Node.js (v16 or higher)
- pnpm package manager

## 🔧 Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies

```bash
pnpm install
```

3. Create a .env file in the root directory and add your environment variables:

```plaintext
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_USER_ID=your_emailjs_user_id
```

## 🚀 Usage

### Development

Start the development server:

```bash
pnpm dev
```

### Build

Build for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## 📁 Project Structure

```plaintext
/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable components
│   ├── constants/      # Constants and configuration
│   ├── hooks/          # Custom React hooks
│   ├── layout/         # Layout components
│   ├── pages/          # Page components
│   ├── sections/       # Page sections
│   ├── services/       # API services
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point
├── .env                # Environment variables (not in repo)
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```

```

## 🌐 Deployment
The site is configured for easy deployment on Vercel or Netlify. Simply connect your repository to either platform and they will automatically build and deploy your site.

### Vercel
### Netlify
## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page .

## 📝 License
This project is MIT licensed.

## 👤 Contact
- Website: https://achadevportfolioweb.netlify.app
- GitHub: https://github.com/achacona1998
- LinkedIn: https://www.linkedin.com/in/ariel-chacon-artola-7a00bb2b4/
```
