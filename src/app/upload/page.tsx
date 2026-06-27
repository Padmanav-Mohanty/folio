"use client"

import { useRef, useState } from "react"
import { UploadCloud, CheckCircle2, ArrowRight } from "lucide-react"

const GENRES = [
  "Fantasy",
  "Science Fiction",
  "Historical Fiction",
  "Mystery",
  "Romance",
  "Literary Fiction",
  "Horror",
  "Adventure",
  "Non-Fiction",
  "Other",
]

const LANGUAGES = ["English", "Spanish", "French", "German", "Hindi", "Other"]

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = (f: File | null) => {
    if (!f) return
    setFile(f)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setToast("📚 Your book has been submitted! It will appear in the library shortly.")
    setFile(null)
    if (inputRef.current) inputRef.current.value = ""
    setTimeout(() => setToast(null), 4000)
  }

  return (
    <div className="px-6 md:px-10 py-20" style={{ background: "var(--offwhite)" }}>
      <div className="max-w-2xl mx-auto text-center">
        <div
          className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] mb-2"
          style={{ color: "var(--amber)" }}
        >
          <span className="block w-3.5 h-px" style={{ background: "var(--amber)" }} />
          Share Your Work
          <span className="block w-3.5 h-px" style={{ background: "var(--amber)" }} />
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--ink)" }}>
          Publish Your Book
        </h1>
        <p className="font-serif-body" style={{ color: "var(--muted)" }}>
          No gatekeepers. No algorithms. Just your words, your readers.
        </p>

        <div
          onDragOver={(e) => {
            e.preventDefault()
            setDragOver(true)
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault()
            setDragOver(false)
            handleFile(e.dataTransfer.files[0] ?? null)
          }}
          className="relative border-2 border-dashed rounded-xl px-8 py-16 mt-10 bg-white transition-colors cursor-pointer"
          style={{
            borderColor: dragOver ? "var(--amber)" : "var(--border)",
            background: dragOver ? "#FEF9F0" : "white",
          }}
          onClick={() => inputRef.current?.click()}
        >
          <input
            ref={inputRef}
            type="file"
            accept=".pdf,.epub,.txt"
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
          />
          <div
            className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
            style={{ background: "#FEF3E0" }}
          >
            <UploadCloud size={28} style={{ color: "var(--amber)" }} />
          </div>
          <h3 className="font-display text-xl font-bold mb-2" style={{ color: "var(--ink)" }}>
            Drop your manuscript here
          </h3>
          <p className="text-sm mb-3" style={{ color: "var(--muted)" }}>
            or click to browse your files
          </p>
          <div className="text-xs tracking-wide" style={{ color: "#B0A89E" }}>
            PDF · EPUB · TXT — up to 50MB
          </div>
        </div>

        {file && (
          <div
            className="flex items-center gap-4 mt-4 rounded-lg px-6 py-4 text-left"
            style={{ background: "#F0FFF4", border: "1.5px solid #86EFAC" }}
          >
            <CheckCircle2 size={24} style={{ color: "#166534" }} />
            <div>
              <div className="font-semibold text-sm" style={{ color: "#166534" }}>
                {file.name}
              </div>
              <div className="text-xs" style={{ color: "#4ADE80" }}>
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </div>
            </div>
          </div>
        )}

        {file && (
          <form onSubmit={handleSubmit} className="mt-8 text-left">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                  Book Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. The Midnight Letter"
                  className="px-4 py-2.5 rounded-md border text-sm outline-none"
                  style={{ borderColor: "var(--border)", color: "var(--ink)" }}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                  Author Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name or pen name"
                  className="px-4 py-2.5 rounded-md border text-sm outline-none"
                  style={{ borderColor: "var(--border)", color: "var(--ink)" }}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                  Genre
                </label>
                <select
                  required
                  defaultValue=""
                  className="px-4 py-2.5 rounded-md border text-sm outline-none bg-white"
                  style={{ borderColor: "var(--border)", color: "var(--ink)" }}
                >
                  <option value="" disabled>
                    Select a genre
                  </option>
                  {GENRES.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                  Language
                </label>
                <select
                  defaultValue="English"
                  className="px-4 py-2.5 rounded-md border text-sm outline-none bg-white"
                  style={{ borderColor: "var(--border)", color: "var(--ink)" }}
                >
                  {LANGUAGES.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 mb-6">
              <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                Description
              </label>
              <textarea
                required
                placeholder="A brief summary of your book — what's it about? Who's it for?"
                className="px-4 py-3 rounded-md border text-sm outline-none min-h-[100px] resize-y"
                style={{ borderColor: "var(--border)", color: "var(--ink)" }}
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded font-semibold text-sm transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--amber)", color: "var(--dark-bg)" }}
            >
              Publish to Folio
              <ArrowRight size={16} />
            </button>
          </form>
        )}
      </div>

      {toast && (
        <div
          className="fixed bottom-8 right-8 max-w-xs px-6 py-4 rounded-lg text-sm font-medium z-[500]"
          style={{
            background: "#1E1A16",
            color: "var(--paper)",
            borderLeft: "4px solid var(--amber)",
          }}
        >
          {toast}
        </div>
      )}
    </div>
  )
}
