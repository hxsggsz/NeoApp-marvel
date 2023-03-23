import { useNavigate, useParams } from "react-router-dom";
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

export const ComicPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState(false)
  const [value, setValue] = useState("")
  const { data } = useGetOneComics(id)

  useEffect(() => {
    value != "" ? setIsActive(true) : setIsActive(false)
  }, [value])

  if(data?.data.results.find(r => r.id != Number(id))) {
    navigate("/404")
  }

  return (
    <StyledComic >
      <Logo />

      {data?.data.results.map(comic => (
        <Comic path={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}>
          <main className="main-content">
            <Text size="lg">{comic.title}</Text>
            <Text size="md">
              Serie name: {comic.series.name}
            </Text>

            <img src={wolw} width={180} height={180} />

            {comic.description ?
              <Text size="md">{comic.description}</Text>
              : (
                <Text size="md">No description avaiable :(</Text>
              )}

            {comic.creators.items.length != 0 && <Text size="md">Made by:</Text>}
            {comic.creators.items.map((creator, idx) => (
              <Text size="md">{creator.role}: {creator.name}</Text>
            ))}

            <img src={avg} width={400} height={200} />

            <div className="options">
              {comic.urls.map((url, idx) => (
                url.type === "detail" && <LinkText key={idx} path={url.url}>Read more!</LinkText>
              ))}

              <img src={spider} width={180} height={180} />

              <form>
                <Input value={value} onChange={ev => setValue(ev.currentTarget.value)} isActive={isActive} />
                <Submit><PaperPlaneRight size={38} weight="bold" /></Submit>
              </form>

              <Button className="buy">Buy it now!</Button>
            </div>
          </main>
        </Comic>
      ))}
    </StyledComic>
  )
}