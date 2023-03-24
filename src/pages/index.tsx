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
import { Text } from "../components/text/text";
import { ShopCart } from "../components/shop-cart/shop-cart";
import { useShopCart } from "../context/shop-cart-context";

const getLocalOffset = () => {
  const offset = localStorage.getItem("offset");
  if (offset) {
    return JSON.parse(offset);
  }
  return 1;
}

export const Index = () => {
  const [pagination, setPagination] = useState<number>(getLocalOffset)
  const { data, isLoading } = useGetAllComics(pagination);
  const { addNewItemshopCart } = useShopCart()
  
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
                addShopCart={() => addNewItemshopCart(comics.title, comics.thumbnail.path, comics.thumbnail.extension)}
                path={`/comic/${comics.id}`}
                title={comics.title}
                desc={comics.description}
                img={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
              />
            ))
          }
          <ShopCart/>

          <Pagination pagination={pagination} setPagination={setPagination} max={data?.data.total}/>
        </div>
      </style.Main>
    </>
  )
}