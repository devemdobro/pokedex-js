![Logo](https://user-images.githubusercontent.com/74621925/175611364-e2d90132-0d0e-4bc2-bf80-55775e1f5656.png)

Esta **Pokédex** exibe centenas de pokémons e seus respectivos stats por meio da [PokéAPI](https://pokeapi.co/)! 


## ⚙ Funcionalidades

- Temas dark e light
- SPA
- Design responsivo


## 📷 Screenshots

<table>
   <tr>
      <td>
         <img src="https://user-images.githubusercontent.com/74621925/175657481-e3e1b111-3a95-4dec-acf6-0677768093fe.gif" width="100%">
      </td>
      <td>
         <img src="https://user-images.githubusercontent.com/74621925/175657623-bfac1434-b88b-4641-8d17-d12011039534.gif" width="100%">
      </td>
   </tr>
   <tr>
      <td>
         <img src="https://user-images.githubusercontent.com/74621925/175657739-fcc291c3-4190-49a9-9473-da4fff1e0061.gif" width="100%">
      </td>
      <td>
         <img src="https://user-images.githubusercontent.com/74621925/175657763-ca2f8541-60ed-4d2d-a5d6-8dab118939a8.gif" width="100%">
      </td>
</table>
   


## 🛠 Tecnologias utilizadas
<p>
   <img height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
   <img height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
   <img height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
</p>
<p>
   Para o desenvolvimento deste projeto, utilizei a biblioteca <strong>React</strong> para a construção de componentes que se repetem na tela com poucas alterações entre si, como, por exemplo, os containers que exibem os nomes e imagens dos pokémons na <i>home</i>. Além disso, o React permite renderizar mais pokémons na página ao toque de um clique sem a necessidade de recarregá-la.
</p>
<p>
   Optei por requisitar à <strong>PokéAPI</strong> apenas os pokémons que devem ser imediatamente renderizados na tela no momento em que a página é carregada e, eventualmente, quando o usuário clica no botão <i>More Pokémon</i>. Desse modo, há uma melhor performance, visto que cada requisição à PokéAPI se limita aos dados de apenas dez pokémons e não dos 1154 de uma só vez.
</p>


## 💻 Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/gabrielhamdan/pokedex.git
```

Entre no diretório do projeto

```bash
  cd pokedex
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm start
```
