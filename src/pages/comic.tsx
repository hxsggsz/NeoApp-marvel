import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Text } from "../components/text/text";
import { StyledComic } from "../styles/comic";
import { useGetOneComics } from "../hooks/useGetOneComic";
import { Logo } from "../components/logo/logo";
import dp from "/no-desc.gif"
import { LinkText } from "../components/link-text/link-text";
import { Button } from "../components/buttons/button/button";
import { Input } from "../components/input/input";
import { useEffect, useState } from 'react';
import { Submit } from "../components/buttons/button-submit/Submit";
import { PaperPlaneRight } from "phosphor-react";
import { Comic } from "../components/comic/comic"
import wolw from "/wolw.png"
import avg from "/classic-avengers.png"
import spider from "/spider-man.png"
import { useShopCart } from "../context/shop-cart-context";
import { Notification } from "../components/notification/notification";
import { GetIcon } from "../components/icons-svg/getIcon";
import sleep from "../utils/sleep";
import { AnimatePresence } from "framer-motion";

export const ComicPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data } = useGetOneComics(id)
  const { addNewItemshopCart } = useShopCart()
  const [isSucces, setIsSucces] = useState(false)
  let [searchParams, setSearchParams] = useSearchParams();
  const rarity: any = searchParams.get("isRare")

  if (data?.data.results.find(r => r.id != Number(id))) {
    navigate("/404")
  }

  return (
    <StyledComic >
      <Logo />

      {data?.data.results.map(comic => (
        <Comic key={comic.id} path={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}>
          <main className="main-content">
            <Text size="lg">{comic.title}</Text>
            <Text size="md">
              Serie name: {comic.series.name}
            </Text> 

            <img src={wolw} width={180} height={180} />
            
            {rarity && <Text size="md">this comic is rare!</Text>}
            
            {comic.description ?
              <Text size="md">{comic.description}</Text>
              : (
                <Text size="md">No description avaiable :(</Text>
              )}

            {comic.creators.items.length != 0 && <Text size="md">Made by:</Text>}
            {comic.creators.items.map((creator, idx) => (
              <Text key={idx * 123} size="md">{creator.role}: {creator.name}</Text>
            ))}

            <img src={avg} width={400} height={200} />

            <div className="options">
              {comic.urls.map((url, idx) => (
                url.type === "detail" && <LinkText key={idx * 111} path={url.url}>Read more!</LinkText>
              ))}

              <img src={spider} width={180} height={180} />

              <Button onClick={async () => {
                addNewItemshopCart(comic.title, comic.thumbnail.path, comic.thumbnail.extension, rarity)
                setIsSucces(true)
                await sleep(3000)
                setIsSucces(false)
                navigate("/")
              }} className="buy">Add to shop-cart</Button>

            </div>
          </main>
        </Comic>
      ))}

      {isSucces && <Notification><Text>Added on shop-cart</Text> <GetIcon /></Notification>}
     </StyledComic>
  )
}