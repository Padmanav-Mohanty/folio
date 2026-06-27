import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ArrowLeft, Users, BookText } from "lucide-react"
import { books } from "@/data/books"

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }))
}

export default function BookDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const book = books.find((b) => b.slug === params.slug)
  if (!book) notFound()

  return (
    <div className="px-6 md:px-10 py-16" style={{ background: "var(--dark-bg)" }}>
      <Link
        href="/library"
        className="inline-flex items-center gap-2 text-sm mb-10"
        style={{ color: "#9A948E" }}
      >
        <ArrowLeft size={14} />
        Back to library
      </Link>

      <div className="grid md:grid-cols-[280px_1fr] gap-12 max-w-4xl mx-auto items-start">
        <div
          className="relative w-full max-w-[280px] aspect-[2/3] mx-auto md:mx-0 rounded-[4px_12px_12px_4px] overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${book.coverColor[0]} 0%, ${book.coverColor[1]} 60%, ${book.coverColor[2]} 100%)`,
            boxShadow: "8px 16px 48px rgba(0,0,0,0.5)",
          }}
        >
          <div
            className="absolute left-0 top-0 bottom-0 w-4"
            style={{ background: "rgba(0,0,0,0.3)" }}
          />
          <div className="flex flex-col items-center justify-center text-center h-full px-8">
            <p
              className="font-display text-lg font-bold leading-snug"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              {book.title}
            </p>
            <p className="text-xs mt-3 italic" style={{ color: "rgba(255,255,255,0.5)" }}>
              {book.author}
            </p>
          </div>
        </div>

        <div className="text-center md:text-left">
          <span
            className="inline-block text-[0.65rem] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm mb-4"
            style={{ background: "rgba(200,131,42,0.15)", color: "var(--amber)" }}
          >
            {book.genre}
          </span>

          <h1
            className="font-display font-black text-3xl md:text-4xl leading-tight mb-2"
            style={{ color: "var(--paper)", letterSpacing: "-0.02em" }}
          >
            {book.title}
          </h1>
          <p className="font-serif-body italic mb-8" style={{ color: "#9A948E" }}>
            by {book.author}
          </p>

          <p
            className="font-serif-body leading-relaxed mb-8 text-sm md:text-base"
            style={{ color: "#7A7470" }}
          >
            {book.description}
          </p>

          <div className="flex justify-center md:justify-start gap-8 mb-10">
            <div className="flex items-center gap-2">
              <BookText size={16} style={{ color: "var(--amber)" }} />
              <span className="text-sm" style={{ color: "var(--paper)" }}>
                {book.pages} pages
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} style={{ color: "var(--amber)" }} />
              <span className="text-sm" style={{ color: "var(--paper)" }}>
                {book.readers.toLocaleString()} readers
              </span>
            </div>
            <div className="text-sm" style={{ color: "var(--paper)" }}>
              {book.language}
            </div>
          </div>

          <Link
            href={`/read/${book.slug}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded font-semibold text-sm transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--amber)", color: "var(--dark-bg)" }}
          >
            Start Reading
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
