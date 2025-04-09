# 🧾 Multi-Step Form (Next.js + React Hook Form + Zod)

A fully functional multi-step form built with the latest **Next.js App Router**, **React Hook Form**, **Zod**, and **TailwindCSS**. It includes client-side validation, dark/light mode toggle, and a fake API submission using **React Query**.

---


## 🚀 Features

- ✅ Multi-step form navigation (Back/Next)
- ✅ Validation with Zod
- ✅ React Hook Form for form management
- ✅ Final summary screen before submission
- ✅ Fake API call using React Query
- ✅ Loading spinner on submit
- ✅ Dark/Light mode toggle with Tailwind
- ✅ Responsive for mobile

---

## 🧰 Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [TanStack Query](https://tanstack.com/query/latest)

---

## 📦 Getting Started
## Project Structure

- `app/layout.js`: Defines the root layout and context providers.
- `app/page.js`: Contains the multi-step form logic and components.
- `app/components/theme/ThemeToggle.js`: Implements the theme toggle functionality.
- `app/context/ThemeContext.js`: Provides theme context for the application.
- `app/globals.css`: Global styles using Tailwind CSS.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JakariaJishan/multi-step-form.git
   cd multi-step-form

2. Install dependencies:

    ```bash 
   npm install
   
3. Run the development server:
    ```bash
    npm run dev

Open the app in your browser at http://localhost:3000.
Usage
Fill out the form step by step.
Toggle between light and dark mode using the theme toggle.
Submit the form to see the success message.
