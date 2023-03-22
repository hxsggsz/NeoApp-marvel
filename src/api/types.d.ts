export interface IComics {
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
  series: Series
  urls: Urls
}

interface Creators {
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

interface Series {
  name: string
}

interface Urls {
  urls: string
}

