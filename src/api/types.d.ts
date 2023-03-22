export interface IApi {
  data: {
    total: number
    results: Results[]
  }
}
interface Results {
  id: number
  title: string
  description: string
  thumbnail: Thumbnail
  creators: Creators
}

interface Creators {
  available: number
  items: Item[]
}

interface Item {
  name: string
  role: string
}

interface Thumbnail {
  extension: string
  path: string
}
