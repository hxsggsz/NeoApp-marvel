import * as style from "../styles/index";
import { Logo } from "../components/logo/logo";
import { Card } from "../components/card/card";
import { Header } from "../components/header/header";
import { Skeleton } from '../components/skeleton/skeleton';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetAllComics } from '../hooks/useGetAllComics';
import { Pagination } from "../components/pagination/pagination";

export const Index = () => {
  const [pagination, setPagination] = useState<number | null>(1)
  const { data, isLoading } = useGetAllComics(pagination);
  
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

          <Pagination setPagination={setPagination} max={data?.data.total}/>
        </div>
      </style.Main>
    </>
  )
}