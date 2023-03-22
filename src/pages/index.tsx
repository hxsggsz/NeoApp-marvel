import * as style from "../styles/index";
import { Logo } from "../components/logo/logo";
import { Card } from "../components/card/card";
import { Header } from "../components/header/header";
import { useQuery } from "react-query";
import { api } from "../api/api";
import md5 from "md5";
import { IApi } from "../api/types";

const ts = Number(new Date())
const privateKey = import.meta.env.VITE_PRIVATE_KEY
const publicKey = import.meta.env.VITE_PUBLIC_KEY
const hash = md5(ts + privateKey + publicKey)
export const Index = () => {

  const { data } = useQuery('all comics', async () => {
    const response = await api.get<IApi>(`/comics?orderBy=title&limit=10&offset=0&ts=${ts}&apikey=${publicKey}&hash=${hash}`)
    return response.data
  })
  console.log(data)
  return (
    <>
      <Header />

      <style.Main>
        <Logo />

        <div className="container">
          {data?.data.results.map(comics => (
            <Card
              key={comics.id}
              img={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
              title={comics.title}
              desc={comics.description}
            />
          ))}
        </div>
      </style.Main>
    </>
  )
}