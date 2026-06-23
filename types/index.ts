export type Blog = {
  id: number,
  date: string,
  link: string,
  title: {
    rendered: string,
  },
  excerpt: {
    rendered: string,
  },
  featured_media: number
}
