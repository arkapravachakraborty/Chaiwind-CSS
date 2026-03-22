# ☕ chaiwinddev

A super lightweight, utility-first inline CSS engine built entirely with Vanilla JavaScript. 

Inspired by Tailwind CSS, **chaiwinddev** allows you to style your applications rapidly using predefined utility classes. It features a built-in `MutationObserver`, meaning it watches your DOM in real-time and applies styles the exact millisecond elements are rendered—making it perfectly compatible with dynamic frameworks like React, Next.js, or vanilla JS DOM manipulation.

## Features
- **Zero Dependencies:** Pure Vanilla JavaScript.
- **Framework Agnostic:** Works with React, Vue, Vanilla HTML, and more.
- **Dynamic Styling:** Automatically styles newly injected DOM elements instantly.
- **Conflict-Free:** All classes use the `chai-` prefix to prevent clashing with existing CSS.

---

## 📦 Installation

### Method 1: npm (Recommended for React / Vite / Next.js)
```bash
npm install chaiwinddev
```

### Method 2: CDN (For Vanilla HTML)
You can use chaiwinddev directly in the browser without installing anything via npm.

```HTML
HTML
<script type="module">
  import { initDOMStyles } from '[https://unpkg.com/chaiwinddev@latest/src/index.js](https://unpkg.com/chaiwinddev@latest/src/index.js)';
  initDOMStyles();
</script>
```
## Quick Start
Using with React / Vite
Initialize the engine once at the very top of your application (e.g., in main.jsx or index.js). The engine will automatically style all components as they mount.

```JavaScript
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { initDOMStyles } from 'chaiwinddev';

// Initialize the engine before React renders
initDOMStyles();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```
Then, use the chai- prefixed classes directly inside your components:

```JavaScript
// src/App.jsx
export default function App() {
  return (
    <div className="chai-flex chai-flex-col chai-items-center chai-bg-blue-500 chai-h-screen chai-p-4">
      <div className="chai-bg-white chai-p-4 chai-rounded-lg chai-shadow-md">
        <h1 className="chai-text-xl chai-font-bold chai-text-black chai-m-2">
          Brewed with Chaiwind! ☕
        </h1>
        <button className="chai-bg-black chai-text-white chai-p-2 chai-rounded chai-font-semibold">
          Click Me
        </button>
      </div>
    </div>
  );
}
```
Using with Vanilla HTML & JS
If you aren't using a bundler, you can use modern browser Import Maps to keep your imports clean.

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <script type="importmap">
    {
      "imports": {
        "chaiwinddev": "./node_modules/chaiwinddev/src/index.js"
      }
    }
  </script>
</head>
<body class="chai-bg-black chai-text-white chai-flex chai-justify-center chai-items-center chai-h-screen">
  
  <h1 class="chai-text-2xl chai-font-bold chai-text-blue-500">
    Vanilla HTML works too!
  </h1>

  <script type="module">
    import { initDOMStyles } from 'chaiwinddev';
    initDOMStyles();
  </script>
</body>
</html>
```
## Class Reference

Here are the utility classes currently available in chaiwinddev. All classes must begin with the `chai-` prefix.

---

### Spacing (Margin, Padding, Gap)

**Margin:**  
- chai-m-0  
- chai-m-1  
- chai-m-2  
- chai-m-4  

**Padding:**  
- chai-p-0  
- chai-p-1  
- chai-p-2  
- chai-p-4  

**Gap:**  
- chai-gap-0  
- chai-gap-1  
- chai-gap-2  
- chai-gap-4  

---

### Typography

**Size:**  
- chai-text-xs  
- chai-text-sm  
- chai-text-base  
- chai-text-lg  
- chai-text-xl  
- chai-text-2xl  

**Weight:**  
- chai-font-normal  
- chai-font-semibold  
- chai-font-bold  

**Line Height:**  
- chai-leading-none  
- chai-leading-tight  
- chai-leading-normal  

**Alignment:**  
- chai-text-center  
- chai-text-left  

---

### Colors

**Background:**  
- chai-bg-transparent  
- chai-bg-white  
- chai-bg-black  
- chai-bg-blue-500  
- chai-bg-red-500  

**Text:**  
- chai-text-white  
- chai-text-black  
- chai-text-blue-500  
- chai-text-red-500  

**Border:**  
- chai-border-transparent  
- chai-border-black  
- chai-border-blue-500  
- chai-border-yello-600  

---

### Flexbox & Grid

**Display:**  
- chai-flex  
- chai-inline-flex  
- chai-grid  

**Direction:**  
- chai-flex-row  
- chai-flex-col  

**Align Items:**  
- chai-items-start  
- chai-items-center  
- chai-items-end  

**Justify Content:**  
- chai-justify-start  
- chai-justify-center  
- chai-justify-between  

**Grid Columns:**  
- chai-grid-cols-1  
- chai-grid-cols-2  
- chai-grid-cols-3  

---

### Layout & Sizing

**Display:**  
- chai-block  
- chai-inline-block  
- chai-hidden  

**Position:**  
- chai-absolute  
- chai-relative  
- chai-fixed  

**Width:**  
- chai-w-full  
- chai-w-screen  
- chai-max-w-md  
- chai-max-w-lg  

**Height:**  
- chai-h-full  
- chai-h-screen  

**Overflow:**  
- chai-overflow-hidden  
- chai-overflow-y-auto  

---

### Borders

**Width:**  
- chai-border  
- chai-border-2  
- chai-border-4  
- chai-border-none  

**Radius:**  
- chai-rounded-sm  
- chai-rounded  
- chai-rounded-md  
- chai-rounded-lg  
- chai-rounded-full  

**Rings:**  
- chai-ring-1  
- chai-ring-2  

---

### Effects

**Shadows:**  
- chai-shadow-sm  
- chai-shadow  
- chai-shadow-md  

**Opacity:**  
- chai-opacity-0  
- chai-opacity-50  
- chai-opacity-100  

**Blur:**  
- chai-blur-sm  
- chai-blur  

---

## 📄 License

This project is licensed under the ISC License.