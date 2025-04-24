# next-app-cicd

A modern Next.js 15 application with CI/CD pipeline integration using GitHub Actions and automatic deployment to Vercel.

## 🚀 About

This project demonstrates a simple yet powerful CI/CD setup for a Next.js application. It leverages GitHub Actions for continuous integration and testing, and Vercel for seamless production deployment.

The goal is to ensure every push to the master branch triggers lint checks, builds the app, and then deploys it to Vercel automatically.

## ⚙️ Features

- ✅ **CI/CD Pipeline with GitHub Actions**
  - Linting and build checks on every push and pull request.
- 🚀 **Auto Deployment to Vercel**
  - Push to main → automatically deployed to live site.
- 🔧 **ESLint and TypeScript**
  - Ensure code quality and maintainability.
- 🌈 **Tailwind CSS + Radix UI**
  - Beautiful and accessible UI components.
- 📄 **MDX Support**
  - Write content in Markdown with JSX.

## 📦 Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI**: Radix UI + Lucide Icons
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## 🛠️ Scripts

```bash
pnpm dev       # Start development server
pnpm build     # Build the app
pnpm start     # Start production server
pnpm lint      # Run ESLint
```
