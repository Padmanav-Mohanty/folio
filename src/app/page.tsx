import Link from "next/link"
import { ArrowRight, BookOpen, Sparkles } from "lucide-react"
import { books, genres } from "@/data/books"
import BookCard from "@/components/BookCard"
import AnimatedCounter from "@/components/AnimatedCounter"

export default function HomePage() {
  const featured = books.find((b) => b.featured) ?? books[0]
  const recent = [...books]
    .sort((a, b) => +new Date(b.uploadedAt) - +new Date(a.uploadedAt))
    .slice(0, 8)

  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-10 py-24 overflow-hidden"
        style={{ background: "var(--dark-bg)" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 70% 30%, rgba(200,131,42,0.10) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-2xl">
          <div
            className="flex items-center gap-3 mb-6 text-xs font-semibold uppercase tracking-[0.15em]"
            style={{ color: "var(--amber)" }}
          >
            <span className="block w-8 h-px" style={{ background: "var(--amber)" }} />
            A home for every story
          </div>

          <h1
            className="font-display font-black leading-[1.05] mb-6"
            style={{
              color: "var(--paper)",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Read what <em className="italic" style={{ color: "var(--amber)" }}>matters</em> to you.
          </h1>

          <p
            className="font-serif-body text-lg leading-relaxed mb-10 max-w-md"
            style={{ color: "#9A948E" }}
          >
            Folio is a personal library where authors share their books and
            readers find their next obsession — free, forever.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/library"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded font-semibold text-sm transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--amber)", color: "var(--dark-bg)" }}
            >
              Browse Library
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/upload"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded font-medium text-sm border transition-transform hover:-translate-y-0.5"
              style={{ color: "var(--paper)", borderColor: "#3A3530" }}
            >
              Share Your Book
            </Link>
          </div>
        </div>

        <div
          className="relative z-10 flex flex-wrap gap-10 mt-20 pt-8 border-t"
          style={{ borderColor: "#1E1A16" }}
        >
          <div className="flex flex-col">
            <span className="font-display text-3xl font-bold" style={{ color: "var(--paper)" }}>
              <AnimatedCounter target={487} suffix="+" />
            </span>
            <span className="text-xs mt-1 tracking-wide" style={{ color: "#6A6560" }}>
              Books Shared
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-3xl font-bold" style={{ color: "var(--paper)" }}>
              <AnimatedCounter target={12400} suffix="+" />
            </span>
            <span className="text-xs mt-1 tracking-wide" style={{ color: "#6A6560" }}>
              Readers
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-3xl font-bold" style={{ color: "var(--paper)" }}>
              <AnimatedCounter target={24} suffix="+" />
            </span>
            <span className="text-xs mt-1 tracking-wide" style={{ color: "#6A6560" }}>
              Genres
            </span>
          </div>
        </div>
      </section>

      {/* FEATURED BOOK */}
      <section className="px-6 md:px-10 py-24" style={{ background: "var(--dark-surface)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div
              className="text-xs font-semibold uppercase tracking-[0.15em] mb-2"
              style={{ color: "var(--amber)" }}
            >
              Editor&apos;s Pick
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "var(--paper)" }}>
              Book of the Week
            </h2>
          </div>

          <div className="grid md:grid-cols-[auto_1fr] gap-12 items-center">
            <div
              className="relative w-[220px] h-[320px] mx-auto md:mx-0 rounded-[4px_12px_12px_4px] overflow-hidden flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${featured.coverColor[0]} 0%, ${featured.coverColor[1]} 60%, ${featured.coverColor[2]} 100%)`,
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
                  {featured.title}
                </p>
                <p
                  className="text-xs mt-3 italic"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {featured.author}
                </p>
              </div>
            </div>

            <div className="text-center md:text-left">
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] mb-4"
                style={{ color: "var(--amber)" }}
              >
                <Sparkles size={13} />
                Featured This Week
              </div>
              <h3
                className="font-display font-black text-3xl md:text-4xl leading-tight mb-3"
                style={{ color: "var(--paper)", letterSpacing: "-0.02em" }}
              >
                {featured.title}
              </h3>
              <p className="font-serif-body italic mb-6" style={{ color: "#9A948E" }}>
                by {featured.author}
              </p>
              <p
                className="font-serif-body leading-relaxed mb-8 text-sm"
                style={{ color: "#7A7470" }}
              >
                {featured.description}
              </p>

              <div className="flex justify-center md:justify-start gap-8 mb-8">
                <div>
                  <div
                    className="text-[0.7rem] uppercase tracking-[0.1em] mb-1"
                    style={{ color: "#6A6560" }}
                  >
                    Genre
                  </div>
                  <div className="text-sm font-medium" style={{ color: "var(--paper)" }}>
                    {featured.genre}
                  </div>
                </div>
                <div>
                  <div
                    className="text-[0.7rem] uppercase tracking-[0.1em] mb-1"
                    style={{ color: "#6A6560" }}
                  >
                    Length
                  </div>
                  <div className="text-sm font-medium" style={{ color: "var(--paper)" }}>
                    {featured.pages} pages
                  </div>
                </div>
                <div>
                  <div
                    className="text-[0.7rem] uppercase tracking-[0.1em] mb-1"
                    style={{ color: "#6A6560" }}
                  >
                    Readers
                  </div>
                  <div className="text-sm font-medium" style={{ color: "var(--paper)" }}>
                    {featured.readers.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <Link
                  href={`/read/${featured.slug}`}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded font-semibold text-sm transition-transform hover:-translate-y-0.5"
                  style={{ background: "var(--amber)", color: "var(--dark-bg)" }}
                >
                  Start Reading
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href={`/book/${featured.slug}`}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded font-medium text-sm border transition-transform hover:-translate-y-0.5"
                  style={{ color: "var(--paper)", borderColor: "#3A3530" }}
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECENTLY ADDED */}
      <section className="px-6 md:px-10 py-24" style={{ background: "var(--dark-surface)" }}>
        <div className="flex items-end justify-between mb-12">
          <div>
            <div
              className="text-xs font-semibold uppercase tracking-[0.15em] mb-2"
              style={{ color: "var(--amber)" }}
            >
              Community Library
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "var(--paper)" }}>
              Recently Added
            </h2>
          </div>
          <Link
            href="/library"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium whitespace-nowrap"
            style={{ color: "var(--amber)" }}
          >
            View all
            <ArrowRight size={14} />
          </Link>
        </div>

        <div
          className="flex gap-6 overflow-x-auto pb-4"
          style={{ "--card-fg": "var(--paper)", "--card-muted": "#6A6560" } as React.CSSProperties}
        >
          {recent.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* EXPLORE GENRES */}
      <section className="px-6 md:px-10 py-24" style={{ background: "var(--offwhite)" }}>
        <div className="mb-12">
          <div
            className="text-xs font-semibold uppercase tracking-[0.15em] mb-2"
            style={{ color: "var(--amber)" }}
          >
            Browse by Theme
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "var(--ink)" }}>
            Explore Genres
          </h2>
        </div>

        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))" }}>
          {genres.map((genre) => (
            <Link
              key={genre.name}
              href={`/library?genre=${encodeURIComponent(genre.name)}`}
              className="bg-white border rounded-lg px-5 py-6 transition-all hover:-translate-y-0.5"
              style={{ borderColor: "var(--border)" }}
            >
              <span className="text-2xl mb-3 block">{genre.icon}</span>
              <div className="font-display font-bold mb-1" style={{ color: "var(--ink)" }}>
                {genre.name}
              </div>
              <div className="text-xs" style={{ color: "var(--muted)" }}>
                {genre.count} books
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 md:px-10 py-24" style={{ background: "var(--dark-surface)" }}>
        <div className="text-center mb-16">
          <div
            className="text-xs font-semibold uppercase tracking-[0.15em] mb-2"
            style={{ color: "var(--amber)" }}
          >
            How it Works
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "var(--paper)" }}>
            Simple. Open. Free.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto text-center">
          {[
            {
              num: "I",
              title: "Upload Your Book",
              desc: "Share your PDF, EPUB, or TXT file. Add a cover, description, and genre tags.",
            },
            {
              num: "II",
              title: "Readers Discover It",
              desc: "Your book appears in the library instantly. Readers can search, browse genres, and find your work.",
            },
            {
              num: "III",
              title: "Track Your Reach",
              desc: "See who's reading, how far they've gotten, and what they think of your story.",
            },
          ].map((step) => (
            <div key={step.num}>
              <div
                className="font-display font-black text-6xl leading-none mb-4"
                style={{ color: "rgba(200,131,42,0.15)" }}
              >
                {step.num}
              </div>
              <h3 className="font-display text-xl font-bold mb-3" style={{ color: "var(--paper)" }}>
                {step.title}
              </h3>
              <p className="font-serif-body text-sm leading-relaxed" style={{ color: "#7A7470" }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        className="px-6 md:px-10 py-24 text-center"
        style={{ background: "var(--dark-bg)" }}
      >
        <BookOpen size={32} className="mx-auto mb-6" style={{ color: "var(--amber)" }} />
        <h2
          className="font-display font-black text-3xl md:text-4xl mb-4"
          style={{ color: "var(--paper)" }}
        >
          Have a story to share?
        </h2>
        <p className="font-serif-body mb-8" style={{ color: "#9A948E" }}>
          No gatekeepers. No algorithms. Just your words, your readers.
        </p>
        <Link
          href="/upload"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded font-semibold text-sm transition-transform hover:-translate-y-0.5"
          style={{ background: "var(--amber)", color: "var(--dark-bg)" }}
        >
          Upload Your Book
          <ArrowRight size={16} />
        </Link>
      </section>
    </>
  )
}
