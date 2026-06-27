"use client"

import { useMemo, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Search, LayoutGrid, List } from "lucide-react"
import { books, genres } from "@/data/books"
import BookCard from "@/components/BookCard"
import Link from "next/link"

type SortOption = "newest" | "popular" | "title"

function LibraryContent() {
  const searchParams = useSearchParams()
  const initialGenre = searchParams.get("genre") ?? ""

  const [query, setQuery] = useState("")
  const [genre, setGenre] = useState(initialGenre)
  const [sort, setSort] = useState<SortOption>("newest")
  const [view, setView] = useState<"grid" | "list">("grid")

  const filtered = useMemo(() => {
    let result = books.filter((b) => {
      const matchesQuery =
        b.title.toLowerCase().includes(query.toLowerCase()) ||
        b.author.toLowerCase().includes(query.toLowerCase())
      const matchesGenre = genre ? b.genre === genre : true
      return matchesQuery && matchesGenre
    })

    result = result.sort((a, b) => {
      if (sort === "newest") return +new Date(b.uploadedAt) - +new Date(a.uploadedAt)
      if (sort === "popular") return b.readers - a.readers
      return a.title.localeCompare(b.title)
    })

    return result
  }, [query, genre, sort])

  return (
    <div className="px-6 md:px-10 py-16" style={{ background: "var(--offwhite)" }}>
      <div className="mb-10">
        <div
          className="text-xs font-semibold uppercase tracking-[0.15em] mb-2"
          style={{ color: "var(--amber)" }}
        >
          Community Library
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "var(--ink)" }}>
          Browse all books
        </h1>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-10">
        <div className="relative flex-1 min-w-[200px]">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2"
            style={{ color: "var(--muted)" }}
          />
          <input
            type="text"
            placeholder="Search by title or author..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-md border text-sm outline-none"
            style={{ borderColor: "var(--border)", color: "var(--ink)" }}
          />
        </div>

        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="px-4 py-2.5 rounded-md border text-sm outline-none bg-white"
          style={{ borderColor: "var(--border)", color: "var(--ink)" }}
        >
          <option value="">All genres</option>
          {genres.map((g) => (
            <option key={g.name} value={g.name}>
              {g.name}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          className="px-4 py-2.5 rounded-md border text-sm outline-none bg-white"
          style={{ borderColor: "var(--border)", color: "var(--ink)" }}
        >
          <option value="newest">Newest</option>
          <option value="popular">Most popular</option>
          <option value="title">Title (A–Z)</option>
        </select>

        <div className="flex gap-1 border rounded-md p-1" style={{ borderColor: "var(--border)" }}>
          <button
            onClick={() => setView("grid")}
            className="p-2 rounded"
            style={{
              background: view === "grid" ? "var(--amber)" : "transparent",
              color: view === "grid" ? "var(--dark-bg)" : "var(--muted)",
            }}
            aria-label="Grid view"
          >
            <LayoutGrid size={16} />
          </button>
          <button
            onClick={() => setView("list")}
            className="p-2 rounded"
            style={{
              background: view === "list" ? "var(--amber)" : "transparent",
              color: view === "list" ? "var(--dark-bg)" : "var(--muted)",
            }}
            aria-label="List view"
          >
            <List size={16} />
          </button>
        </div>
      </div>

      <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
        {filtered.length} {filtered.length === 1 ? "book" : "books"} found
      </p>

      {filtered.length === 0 && (
        <div className="text-center py-20" style={{ color: "var(--muted)" }}>
          No books match your search.
        </div>
      )}

      {view === "grid" ? (
        <div
          className="grid gap-x-6 gap-y-10"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            "--card-fg": "var(--ink)",
            "--card-muted": "var(--muted)",
          } as React.CSSProperties}
        >
          {filtered.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {filtered.map((book) => (
            <Link
              href={`/book/${book.slug}`}
              key={book.id}
              className="flex gap-5 items-center bg-white border rounded-lg p-4 transition-colors hover:border-[var(--amber)]"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="w-14 h-20 rounded-sm flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${book.coverColor[0]}, ${book.coverColor[1]}, ${book.coverColor[2]})`,
                }}
              />
              <div className="flex-1">
                <h4 className="font-display font-bold" style={{ color: "var(--ink)" }}>
                  {book.title}
                </h4>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  {book.author}
                </p>
              </div>
              <span
                className="text-[0.65rem] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm whitespace-nowrap"
                style={{ background: "rgba(200,131,42,0.15)", color: "var(--amber)" }}
              >
                {book.genre}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function LibraryPage() {
  return (
    <Suspense>
      <LibraryContent />
    </Suspense>
  )
}
