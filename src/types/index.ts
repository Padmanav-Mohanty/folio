export interface Book {
  id: string
  title: string
  author: string
  slug: string
  genre: string
  language: string
  description: string
  coverColor: [string, string, string]
  readers: number
  pages: number
  uploadedAt: string
  content: string
  featured?: boolean
}

export interface Genre {
  name: string
  icon: string
  count: number
}
