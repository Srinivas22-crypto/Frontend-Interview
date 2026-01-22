export interface Blog {
  id: number
  title: string
  category: string[]
  description: string
  date: string
  coverImage: string
  content: string
  tags?: string[]
  authorId: string
  authorName: string
  likes: number
  likedBy: string[]
}

export interface CreateBlogInput {
  title: string
  description: string
  content: string
  category?: string[]
  coverImage?: string
  tags?: string[]
  authorId: string
  authorName: string
}
