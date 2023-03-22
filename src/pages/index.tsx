import * as style from "../styles/index";
import { Logo } from "../components/logo/logo";
import { Card } from "../components/card/card";
import { Header } from "../components/header/header";
import { Skeleton } from '../components/skeleton/skeleton';
import { Link } from "react-router-dom";
import { useGetAllComics } from '../hooks/useGetAllComics';
import { StarRare } from "../components/star/star";

export const Index = () => {
  const { data, isLoading } = useGetAllComics();
  return (
    <>
      <Header />

      <style.Main>
        <Logo />

        <div className="container">
          {isLoading ? <><Skeleton /><Skeleton /><Skeleton /></> :
            data?.data.results.map(comics => (
              <Card
                key={comics.id}
                path={`/comic/${comics.id}`}
                title={comics.title}
                desc={comics.description}
                img={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
              />
            ))
          }
        </div>
      </style.Main>
    </>
  )
}