import React, { useActionState, useState } from "react"

async function delay(ms: number) {
  await new Promise<void>((resolve) => {
    window.setTimeout(() => {
      resolve()
    }, ms)
  })
}

export function IssueForm() {
  const [title, setTitle] = useState("")
  const [abstract, setAbstract] = useState("")
  const [purpose, setPurpose] = useState("")
  const [task, setTask] = useState("")
  const [note, setNote] = useState("")
  const [description, setDescription] = useState("")

  const reset = () => {
    setTitle("")
    setDescription("")
  }

  const [, submitAction, isPending] = useActionState(
    async (previousState, formData: FormData) => {
      const title = formData.get("title")
      const description = formData.get("description")

      await delay(1500)

      alert("success!")
      reset()
      return { title, description }
    },
    { title, description }
  )

  return (
    <div style={{ padding: "3rem" }}>
      <form action={submitAction}>
        <InputField
          name="title"
          label="タイトル"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <InputField
          name="abstract"
          label="概要"
          value={abstract}
          onChange={(e) => setAbstract(e.target.value)}
        />
        <InputField
          name="purpose"
          label="目的"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
        />
        <InputField
          name="task"
          label="タスク"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <InputField
          name="note"
          label="その他"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <div>
          <button type="submit" disabled={isPending}>
            送信
          </button>
        </div>
      </form>
    </div>
  )
}

function InputField({
  label,
  name,
  value,
  onChange,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  console.log(`${label}がレンダリングされました。`)
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <label htmlFor={name} style={{ flex: 1 }}>
        {label}:{" "}
      </label>
      <input
        style={{ flex: 7, textAlign: "start" }}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}
