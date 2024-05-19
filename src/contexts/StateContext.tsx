import { createContext, use, useState } from "react"
import React from "react"
export const StateContext = createContext<
  | {
      title: string
      setTitle: React.Dispatch<React.SetStateAction<string>>
      abstract: string
      setAbstract: React.Dispatch<React.SetStateAction<string>>
      purpose: string
      setPurpose: React.Dispatch<React.SetStateAction<string>>
      task: string
      setTask: React.Dispatch<React.SetStateAction<string>>
      note: string
      setNote: React.Dispatch<React.SetStateAction<string>>
      description: string
      setDescription: React.Dispatch<React.SetStateAction<string>>
    }
  | undefined
>(undefined)

export function StateProvider({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState("")
  const [abstract, setAbstract] = useState("")
  const [purpose, setPurpose] = useState("")
  const [task, setTask] = useState("")
  const [note, setNote] = useState("")
  const [description, setDescription] = useState("")
  return (
    <StateContext
      value={{
        title,
        setTitle,
        abstract,
        setAbstract,
        purpose,
        setPurpose,
        task,
        setTask,
        note,
        setNote,
        description,
        setDescription,
      }}>
      {children}
    </StateContext>
  )
}

export const useStateContext = () => {
  const context = use(StateContext)
  if (!context) {
    throw new Error("値がセットされていない")
  }
  return context
}
