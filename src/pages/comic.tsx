import { useParams } from "react-router-dom";
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

export const ComicPage = () => {
  const { id } = useParams()
  const [isActive, setIsActive] = useState(false)
  const [value, setValue] = useState("")
  const { data } = useGetOneComics(id)

  useEffect(() => {
    value != "" ? setIsActive(true) : setIsActive(false)
  }, [value])


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

            {comic.description ?
              <Text size="md">{comic.description}</Text>
              : <img className="dp" width={450} height={170} src={dp} />}

            {comic.creators.items.map((creator, idx) => (
              <Text size="md" key={idx}>{creator.role}: {creator.name}</Text>
            ))}

            <div className="options">
              {comic.urls.map((url, idx) => (
                url.type === "detail" && <LinkText key={idx} path={url.url}>Read more!</LinkText>
              ))}

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