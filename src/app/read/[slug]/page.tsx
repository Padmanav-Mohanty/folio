"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { notFound, useParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { books } from "@/data/books"

export default function ReaderPage() {
  const params = useParams<{ slug: string }>()
  const book = useMemo(() => books.find((b) => b.slug === params.slug), [params.slug])

  const [fontSize, setFontSize] = useState(1.1)
  const [progress, setProgress] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight
      setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0)
    }
    el.addEventListener("scroll", onScroll)
    return () => el.removeEventListener("scroll", onScroll)
  }, [])

  if (!book) notFound()

  const paragraphs = book.content.split("\n\n").filter(Boolean)

  return (
    <div className="fixed inset-0 flex flex-col" style={{ background: "var(--paper)" }}>
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-6 py-4 border-b flex-shrink-0"
        style={{ background: "white", borderColor: "var(--border)" }}
      >
        <Link
          href={`/book/${book.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium"
          style={{ color: "var(--muted)" }}
        >
          <ArrowLeft size={16} />
          Back
        </Link>

        <span className="font-display font-bold text-sm md:text-base truncate px-4" style={{ color: "var(--ink)" }}>
          {book.title}
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setFontSize((s) => Math.max(0.85, +(s - 0.1).toFixed(2)))}
            className="px-3 py-1.5 rounded text-sm font-medium"
            style={{ color: "var(--muted)" }}
            aria-label="Decrease font size"
          >
            A−
          </button>
          <button
            onClick={() => setFontSize((s) => Math.min(1.5, +(s + 0.1).toFixed(2)))}
            className="px-3 py-1.5 rounded text-sm font-medium"
            style={{ color: "var(--muted)" }}
            aria-label="Increase font size"
          >
            A+
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-[3px] flex-shrink-0" style={{ background: "var(--border)" }}>
        <div
          className="h-full transition-[width] duration-100"
          style={{ background: "var(--amber)", width: `${progress}%` }}
        />
      </div>

      {/* Content */}
      <div ref={contentRef} className="flex-1 overflow-y-auto px-6 md:px-16 py-12">
        <div
          className="font-serif-body max-w-[600px] mx-auto"
          style={{ fontSize: `${fontSize}rem`, lineHeight: 1.85, color: "#2D2820" }}
        >
          <h2
            className="font-display font-bold mb-6"
            style={{ fontSize: "1.75rem", color: "var(--ink)" }}
          >
            {book.title}
          </h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="mb-5">
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
