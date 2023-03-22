import { useQuery } from "react-query"
import { IComics } from "../api/types"
import md5 from "md5"
import { api } from "../api/api"

const ts = Number(new Date())
const privateKey = import.meta.env.VITE_PRIVATE_KEY
const publicKey = import.meta.env.VITE_PUBLIC_KEY
const hash = md5(ts + privateKey + publicKey)

export const useGetOneComics = (id: string | undefined) => {
  const comic = useQuery<IComics>({
    queryFn: async () => {
      const response = await api.get<IComics>(`/comics/${id}?orderBy=title&limit=10&offset=0&ts=${ts}&apikey=${publicKey}&hash=${hash}`)
    return response.data
    },

    queryKey: ["getOneComic"]
  })

  return comic
}