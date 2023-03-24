import { Avangers } from "./avangers"
import { Cap } from "./cap"
import { CapAmerica } from "./cap-america"
import { Cyclops } from "./cyclops"
import { Deadpool } from "./deadpool"
import { HawkEye } from "./hawk-eye"
import { InfinityGauntlet } from "./infinity-gauntlet"
import { Loki } from "./loki"
import { MoonKnight } from "./moon-knight"
import { NickFury } from "./nick-fury"
import { Spawn } from "./spawn"
import { SpiderMan } from "./spiderman"

export const GetIcon = () => {
  const generateNumber = (Math.floor(Math.random() * 12) + 1)

  return (
    <>
      {generateNumber === 1 && <SpiderMan />}
      {generateNumber === 2 && <Spawn />}
      {generateNumber === 3 && <NickFury />}
      {generateNumber === 4 && <MoonKnight />}
      {generateNumber === 5 && <Loki />}
      {generateNumber === 6 && <InfinityGauntlet />}
      {generateNumber === 7 && <HawkEye />}
      {generateNumber === 8 && <Deadpool />}
      {generateNumber === 9 && <Cyclops />}
      {generateNumber === 10 && <Cap />}
      {generateNumber === 11 && <CapAmerica />}
      {generateNumber === 12 && <Avangers />}
    </>
  )
}