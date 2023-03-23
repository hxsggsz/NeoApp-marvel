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
  urls: {
    type: string
    url: string
  }[]
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

}

