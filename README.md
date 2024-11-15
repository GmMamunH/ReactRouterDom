## Setup React & Tailwind & Vite Using PNPM
### 1. Install pnpm and create a new react project
```bash
pnpm create vite my-project
-----------and press enter---------

Then follow next commands ....
Select - React
-----------and press enter---------

Select - JavaScript + SWC
-----------and press enter---------

cd my-project
```
### 2. Install node_modules
```bash
pnpm i
```
### 3. Install Tailwind CSS with postcss & autoprefixer
```bash
pnpm add -D tailwindcss postcss autoprefixer
```
### 4. Generate tailwind.config.js and postcss.config.js
```bash
pnpm tailwindcss init -p
```
### 5. Configure your template paths
- Add the paths to all of your template files in your tailwind.config.js file.
```jsx
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
### 6. Add the Tailwind directives to your CSS
- Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```jsx
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### 7. Start your build process
- Run your build process with npm run start.
```bash
pnpm dev
```
### 8. DOM Install
- Run your build process with npm run start.
```bash
pnpm i -D react-router-dom@latest
```
