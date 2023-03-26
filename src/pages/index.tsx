import { useState } from "react"
import * as style from "../styles/index"
import { Logo } from "../components/logo/logo"
import { Card } from "../components/card/card"
import { Header } from "../components/header/header"
import { Skeleton } from "../components/skeleton/skeleton"
import { useGetAllComics } from "../hooks/useGetAllComics"
import { useShopCart } from "../context/shop-cart-context"
import { ShopCart } from "../components/shop-cart/shop-cart"
import { Pagination } from "../components/pagination/pagination"

const getLocalOffset = () => {
  const offset = localStorage.getItem("offset")
  if (offset) {
    return JSON.parse(offset)
  }
  return 1
}

export const Index = () => {
  const { state, removeItem } = useShopCart()
  const [pagination, setPagination] = useState<number>(getLocalOffset)
  const { data, isLoading, isFetching } = useGetAllComics(pagination)

  return (
    <>
      <Header />
      <style.Main>
        <Logo />
        <div className="container">
          {isLoading || isFetching? <><Skeleton /><Skeleton /><Skeleton /></> :
            data?.data.results.map(comics => (
              <Card
                key={comics.id}
                id={comics.id}
                title={comics.title}
                desc={comics.description}
                path={comics.thumbnail.path}
                extension={comics.thumbnail.extension}
              />
            ))
          }
          <ShopCart shopCart={state.ShopCart} removeItem={removeItem} />

          <Pagination pagination={pagination} setPagination={setPagination} max={data?.data.total} />
        </div>
      </style.Main>
    </>
  )
}