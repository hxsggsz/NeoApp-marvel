import { useParams } from "react-router-dom";
import { Text } from "../components/text/text";
import { StyledComic } from "../styles/comic";
import { useGetOneComics } from "../hooks/useGetOneComic";
import { Logo } from "../components/logo/logo";
import dp from "/no-desc.gif"

export const Comic = () => {
  const { id } = useParams()

  const { data } = useGetOneComics(id)
  console.log(data)
  return (
    <StyledComic>
      <Logo />

      {data?.data.results.map(comic => (
        <>
          <div key={comic.id} className="image-container">
            <img
              width={100}
              height={100}
              alt={`image of the ${comic.title} comic`}
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            />
          </div>

          <main className="main-content">
            <Text size="lg">{comic.title}</Text>
            {comic.description ?
            <Text size="md">{comic.description}</Text>
             : <img className="dp" width={450} height={170} src={dp} /> }

            {comic.creators.items.map((creator, idx) => (
              <>
                <Text key={idx}>{creator.role}: {creator.name}</Text>
              </>
            ))}
          </main>
        </>
      ))}
    </StyledComic>
  )
}