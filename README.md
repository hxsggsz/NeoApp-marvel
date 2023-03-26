> # **NeoApp-marvel**
>
> esse é um projeto para o teste técnico para a empresa NeoApp
> 

# Quem sou eu? 

|Nome|Idade| área|
|:---| :---: | ---:| 
|Victor Hugo|19|full-stack Typescript|

# Requisitos necessários do site

- [x] Uma listagem paginada das histórias em quadrinhos (HQ's);
- [x] Uma página de visualização individual da HQ;
- [x] Carrinho de compras
= [x] Mobile-First

# Requisitos opcionais

- [x] 10% dos quadrinhos mostrados devem ser marcados como raros aleatoriamente ao carregar;
- [x] Pssibilidade de inserir um cupom de desconto com validação mock, sem API;
- [x] Dois tipos de cumpons: comuns e raros. Que seriam aplicados somente para HQ's respectivamente comuns e raras.

# Bibliotecas e linguagem utilizadas na criação do site.
- React
- Vite
- Typescript
- swc no lugar do Babel

### apis
- Axios
- React-Query

#### por que React-query?
O React-Query lida com o cache da API por você, imagina que um usuário clica em três cards diferentes e depois volta pra página inicial, toda vez que o mesmo voltar, ele iria ver o Skeleton de loading. Com o React-query após a primeira requisição ele mantém todos os dados no cache e mostra esse cache pro usuário em vez de fazer uma requisição toda vez. Por que isso é bom? Além de não mostrar disnecessáriamente o loading pro usuário e travar o mesmo enquanto espera a requisição terminar, ele economiza no uso de requisições, visto que a API da Marvel por motivos de segurança mantém um limite diário de 3000 requisições por dia!.<br>
Outro motivo  é a economia de Estados, com uma requisição padrão do React, eu precisaria criar um useState para os dados, para o loading e para o erro, com o React-Query ele me retorna tudo isso de dentro do hook, sendo assim não precisando criar esses useStates.
  
### Estilização e Animações
- Styled-component
- Phospor-React para icones
- Framer-Motion para animações

### Testes
- Cypress
- Jest
- Testing-Library React

# Processo de criação do site

### Primeiro passo!
- Design no Figma
Primeiro de tudo, depois de ler os requisitos eu fui para o Figma para ter uma base de como o meu layout seria.<br>
Aqui está o link do Figma: https://www.figma.com/file/9Inew5wHeUGmoN3e1bbGrD/NeoApp-Marvel?node-id=9-125&t=QOs3966tgVh5oXsJ-0

# Segundo passo!
- Mão na massa
parti para o código e criei todos os componentes e páginas visando a expêriencia do usuário e utilizando Mobile-First

# Terceiro passo!
- testes
criei testes e2e com cypress e testei meu context com o jest

# E aqui está o resultado: https://neo-app-marvel.netlify.app

Não se esqueça dos seus cupons de desconto😁: neoapp10 e neoapprare

