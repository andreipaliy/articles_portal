# 🧩 Articles Portal

A modular, technically focused web application designed for publishing and managing articles. This project is **not business-driven**, but rather built as a **training ground for architectural design, infrastructure setup, and hands-on mastery of frontend tooling**.

---

## 🎯 Purpose

This project emphasizes:

- Clean project structuring and scalability  
- Low-level build configuration using **Webpack**  
- Type-safe architecture with **TypeScript**  
- Component reusability and testing  
- Complete control over ESLint, Babel, and Jest  

> 🛠 The application itself is just a placeholder — the real goal is building the architecture and tools around it.

---

## ⚙️ Stack & Tooling

| Tool                   | Purpose                                      |
|------------------------|----------------------------------------------|
| **Webpack**            | Custom bundling and dev server setup         |
| **TypeScript**         | Type-safe logic across modules               |
| **ESLint + Stylelint** | Strict linting and formatting enforcement    |
| **Jest**               | Unit testing setup with custom mocks         |
| **React (assumed)**    | Component structure (via Storybook config)   |
| **Husky + Lint-Staged**| Git hooks and safe commits                   |
| **i18n**               | Translations extracted into JSON per locale  |

---

## 🏗 Project Structure Highlights

```
config/
├── build/              # Manual Webpack configuration
├── jest/               # Custom Jest configuration
└── storybook/          # Storybook setup for UI preview

extractedTranslations/
└── en/, ru/            # Static translation files for i18n

.husky/                 # Pre-commit hooks
.eslintrc.js            # ESLint configuration
.stylelintrc.json       # Stylelint for CSS/SCSS
babel.config.json       # Babel with preset-env for compatibility
```

---

## 🚀 Installation & Development

```bash
# Clone the repository
git clone https://github.com/your-user/articles_portal.git
cd articles_portal

# Install dependencies
npm install

# Run dev server (if configured)
npm run start

# Lint the code
npm run lint

# Run unit tests
npm run test
```

---

## 🧠 What's Implemented

### ✅ Custom Webpack Config
- Modular `buildWebpackConfig.ts`, `buildDevServer.ts`, `buildLoaders.ts`
- Loader support for TypeScript, Babel, SVG, CSS
- Alias and resolver configuration
- Dev/prod modes separated for flexibility

### ✅ Strict Linting
- ESLint config for clean TypeScript and JavaScript
- Stylelint config for modern CSS/SCSS
- Pre-commit hooks via Husky

### ✅ Internationalization (i18n)
- Translation files in `extractedTranslations/en` and `ru`
- JSON-based, ready for runtime i18n injection

### ✅ Jest Configuration
- `jest.config.ts` with support for React & TSX
- Mock-friendly DOM testing environment

### ✅ Storybook Support
- Storybook config included
- Encourages isolated visual testing for components

---

## 🚧 Focus on Technical Excellence

This project **intentionally skips business logic** or domain-specific implementation.

The focus is on:

- Manual project scaffolding
- Full control over low-level tooling (no CRA, no boilerplates)
- Clean separation of build/test/lint layers
- Future scalability and professional extensibility

---

## 📌 Next Ideas / TODO

- [ ] Add `src/` entry with `index.tsx` and `App.tsx`  
- [ ] Add Storybook stories and preview examples  
- [ ] Enable GitHub Actions (CI setup partially done)  
- [ ] Enable production Webpack build with code splitting  

---

## 👨‍💻 Author

**Andrei Palii**  
Frontend Developer  
[GitHub Profile](https://github.com/andreipaliy)
