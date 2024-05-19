import React from "react"
import { IssueForm } from "./components/IssueForm"
import { StateProvider } from "./contexts/StateContext"
// import { Preview } from "./components/Preview"

export function App() {
  return (
    <StateProvider>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, padding: "1rem" }}>
          <IssueForm />
        </div>
        <div style={{ flex: 1, padding: "1rem" }}>{/* <Preview /> */}</div>
      </div>
    </StateProvider>
  )
}
