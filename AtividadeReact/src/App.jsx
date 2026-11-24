import {useState,useEffect} from 'react'

function App(){
const [filmes,setFilmes]=useState([])
useEffect(()=>{
async function buscarFilmes(){
const resposta=await fetch('http://localhost:3000/api/filmes')
const dados=await resposta.json()
setFilmes(dados)
}
buscarFilmes()
},[])
return(
<div>
<h1>Lista de Filmes</h1>
{filmes.map((filme)=>(
<div key={filme.id}>
<h2>{filme.titulo}</h2>
<p>Ano: {filme.ano}</p>
<p>Gênero: {filme.genero}</p>
<p>Sinopse: {filme.sinopse}</p>
<hr/>
</div>
))}
</div>
)
}
export default App
