
# 🚀 Next.js App with Clean Architecture

This project is a [Next.js](https://nextjs.org/) application built using a **Clean Architecture** approach to ensure scalability, modularity, and maintainability.

---

## 🧱 Project Structure

```
src/
├── app/                # Next.js App Router structure (layouts, pages, globals)
├── domain/             # Domain Layer: business entities & interfaces
│   ├── entities/
│   └── repositories/
├── infrastructure/     # Infrastructure Layer: API, logging, auth, storage
│   ├── auth/
│   ├── http/
│   ├── logging/
│   └── storage/
├── modules/            # Feature-based modules
│   └── user/
│       ├── components/
│       ├── hooks/
│       ├── infra/
│       ├── services/
│       ├── usecases/
│       └── types.ts
├── shared/             # Shared utilities, constants, and configs
│   ├── components/
│   ├── config/
│   ├── constants/
│   ├── hooks/
│   ├── lib/
│   ├── locales/
│   ├── styles/
│   └── types/
```

---

## 📦 Dependencies

### Core Dependencies

- **[`axios`](https://axios-http.com/)** — Promise-based HTTP client for API communication.
- **[`i18next`](https://www.i18next.com/)** — Internationalization framework for handling multi-language support.
- **[`neverthrow`](https://github.com/supermacro/neverthrow)** — Utility for functional error handling with `Result<T, E>` pattern.
- **[`next`](https://nextjs.org/)** — React framework for building fullstack web applications.
- **[`react`](https://reactjs.org/)** — Library for building user interfaces.
- **[`react-dom`](https://reactjs.org/docs/react-dom.html)** — Provides DOM-specific methods for React.
- **[`react-i18next`](https://react.i18next.com/)** — React bindings for `i18next`.

### Development Dependencies

- **[`@eslint/eslintrc`](https://www.npmjs.com/package/@eslint/eslintrc)** — ESLint configuration helper package.
- **[`@tailwindcss/postcss`](https://tailwindcss.com/docs/installation)** — Tailwind's PostCSS integration for styling.
- **[`@types/node`](https://www.npmjs.com/package/@types/node)** — TypeScript definitions for Node.js.
- **[`@types/react`](https://www.npmjs.com/package/@types/react)** — TypeScript definitions for React.
- **[`@types/react-dom`](https://www.npmjs.com/package/@types/react-dom)** — TypeScript definitions for ReactDOM.
- **[`eslint`](https://eslint.org/)** — Linter for JavaScript/TypeScript to ensure code quality.
- **[`eslint-config-next`](https://nextjs.org/docs/basic-features/eslint)** — ESLint config prebuilt for Next.js projects.
- **[`tailwindcss`](https://tailwindcss.com/)** — Utility-first CSS framework for rapid UI development.
- **[`typescript`](https://www.typescriptlang.org/)** — Superset of JavaScript that adds static types.

---

## 🛠️ Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn
```

### 2. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📁 Architecture Overview

This project uses **Clean Architecture**, which consists of:

- **Domain Layer** (`domain/`)  
  Contains core business logic: entities and repository contracts.

- **Use Case Layer** (`modules/*/usecases/`)  
  Application-specific business rules orchestrated here.

- **Infrastructure Layer** (`infrastructure/`, `modules/*/infra/`)  
  Implements external details like API calls, local storage, etc.

- **Presentation Layer** (`app/`, `modules/*/components`, `modules/*/hooks`)  
  React components, hooks, and pages for UI.

---

## 🌐 Internationalization (i18n)

This project uses `i18next` and `react-i18next` for multi-language support.

Translation files are stored in:

```
shared/locales/
├── en.json
└── id.json
```

---

## 🔒 Error Handling with neverthrow

We use [`neverthrow`](https://github.com/supermacro/neverthrow) to handle errors without using `try/catch`.

```ts
import { Result, ok, err } from 'neverthrow';

function getUserName(): Result<string, Error> {
  const isValid = true;
  if (isValid) return ok("John Doe");
  return err(new Error("User not found"));
}
```

Neverthrow is especially useful in `usecases` and `repositories` for predictable and safe error flows.

---

## 🧪 ESLint & Formatting

Lint your code with:

```bash
npm run lint
```

Code style is based on `eslint-config-next` and supports Tailwind CSS.

---

## 🎨 Styling with Tailwind CSS

Tailwind is configured with PostCSS and lives in:

- `shared/styles/`
- `globals.css` in `app/`

You can use utility-first classes directly in your components.

---

## 📤 Deployment

You can deploy this app easily using [Vercel](https://vercel.com), the creators of Next.js.

Read the full guide here:  
👉 [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)

---

## 📄 License

This project is licensed under the **MIT License**.
