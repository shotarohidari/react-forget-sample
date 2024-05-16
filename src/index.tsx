import { createRoot } from "react-dom/client"
import { App } from "./App"
import React from "react"

const app = document.getElementById("app")
if (!app) {
  throw new Error("html要素内にdiv#appがありません。")
}
const root = createRoot(app)

root.render(<App />)
