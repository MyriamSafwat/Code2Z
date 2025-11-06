import fs from "fs";
import path from "path";

const rootDir = process.cwd();
const srcDir = path.join(rootDir, "src");

// 1️⃣ Check if this is a React project
if (!fs.existsSync(path.join(rootDir, "package.json"))) {
  console.error("❌ Error: package.json not found. Please run from your React project root.");
  process.exit(1);
}

// 2️⃣ Folders to create
const folders = [
  "components",
  "pages",
  "assets/images",
  "assets/fonts",
  "styles",
];

folders.forEach(folder => {
  const dirPath = path.join(srcDir, folder);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log("📁 Created:", folder);
  } else {
    console.log("✔ Already exists:", folder);
  }
});

// 3️⃣ Example Component
const exampleComponent = `

export default function ExampleComponent() {
  return <div className="example-component">Example Component</div>;
}
`;
fs.writeFileSync(path.join(srcDir, "components/ExampleComponent.tsx"), exampleComponent.trim());

// 4️⃣ Example Page
const homePage = `
import ExampleComponent from "../components/ExampleComponent";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <ExampleComponent />
    </main>
  );
}
`;
fs.writeFileSync(path.join(srcDir, "pages/Home.tsx"), homePage.trim());

// 5️⃣ App.tsx (if not exists)
const appFile = path.join(srcDir, "App.tsx");
if (!fs.existsSync(appFile)) {
  const appContent = `
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
`;
  fs.writeFileSync(appFile, appContent.trim());
  console.log("🆕 Created: App.tsx");
} else {
  console.log("✔ App.tsx already exists, skipped.");
}

// 6️⃣ Styles
const css = `
/* index.css - Global styles */
html, body, #root {
  height: 100%;
  margin: 0;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}
`;
fs.writeFileSync(path.join(srcDir, "styles/index.css"), css.trim());

console.log("\n✅ Structure setup complete!");
console.log("👉 Remember to install react-router-dom if not installed:");
console.log("   npm install react-router-dom\n");