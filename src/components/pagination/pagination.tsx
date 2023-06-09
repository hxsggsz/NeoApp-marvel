import { StyledPagination } from "."
import { motion } from "framer-motion"
import { useSearchParams } from "react-router-dom"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

type PaginationType = {
  max: number | undefined
  pagination: number
  setPagination: Dispatch<SetStateAction<number>>
}

const getLocalpagination = () => {
  const pag = localStorage.getItem("pag")
  if (pag) {
    return JSON.parse(pag)
  }
  return [1, 2, 3, 4, 5]
}

export const Pagination = ({ max, pagination, setPagination }: PaginationType) => {
  const [pag, _] = useState(getLocalpagination)
  let [searchParams, setSearchParams] = useSearchParams()

  //pega o maior número inteiro do limite da APi dividido por 10
  const limit = Math.ceil(max! / 10)
  const offset = searchParams.get("offset")

  useEffect(() => {
    if (offset !== null) {
      localStorage.setItem("offset", JSON.stringify(offset))
    }
  }, [offset])

  const handlePag = (currentPage: number) => {
    //se o parametro for maior ou igual que o valor do ultimo index do array e menor que o limite
    if (currentPage >= pag[4] && pag[4] < limit) {
      //adiciona ao fim do array o valor do ultimo index + 1 e remove o primeiro index
      pag.push(pag[4] + 1)
      pag.shift()
    }
    //se o parametro for menor ou igual o valor do primeiro index do array e o mesmo for menor que 1
    if (currentPage <= pag[0] && pag[0] > 1) {
      //adiciona ao fim do array o valor do primeiro index do array -1 e remove o ultimo index
      pag.unshift(pag[0] - 1)
      pag.pop()
    }

    setPagination(currentPage)
    localStorage.setItem("pag", JSON.stringify(pag))
    setSearchParams({ offset: currentPage.toString() })
  }

  return (
    <StyledPagination>
      {pag.map((page: number, idx: number) => (
        <motion.button
          key={idx * 100}
          whileTap={{ scale: [0.9, 1] }}
          onClick={() => handlePag(page)}
          className={pagination === page ? "active" : ""}
        >
          {page}
        </motion.button>
      ))}
    </StyledPagination>
  )
}