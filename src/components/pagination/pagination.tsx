import { StyledPagination } from '.';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom"

type PaginationType = {
  max: number | undefined;
  setPagination: Dispatch<SetStateAction<number | null>>
}

export const Pagination = ({ max, setPagination }: PaginationType) => {
  const [pag, _] = useState([1, 2, 3, 4, 5])
  const [active, setActive] = useState(1)
  let [searchParams, setSearchParams] = useSearchParams();

  //pega o maior número inteiro do limite da APi dividido por 10
  const limit = Math.ceil(max! / 10)
  const offset = searchParams.get("offset")

  useEffect(() => {
    setPagination(Number(offset))
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

    setActive(currentPage)
    setSearchParams({ offset: currentPage.toString() })
  }

  return (
    <StyledPagination>
{/* any por causa do LocalStorage */}
      {pag.map((page: any) => (
        <button onClick={() => handlePag(page)} className={active === page ? "active" : ""}>{page}</button>
      ))}
    </StyledPagination>
  )
}