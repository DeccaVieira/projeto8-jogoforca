import React from "react"
import styled from 'styled-components'
import palavras from "./palavras"
import "./styles/style.css"
import forca0 from "./img/assets/forca0.png"
import forca1 from "./img/assets/forca1.png"
import forca2 from "./img/assets/forca2.png"
import forca3 from "./img/assets/forca3.png"
import forca4 from "./img/assets/forca4.png"
import forca5 from "./img/assets/forca5.png"
import forca6 from "./img/assets/forca6.png"



export default function App() {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const alphabet = alfabeto; //map que deixa as letras do teclado maiúsculas
    const aleatory = Math.floor((Math.random() * palavras.length)) //pega palavras aleatórias na matriz
    const chooseWord = palavras[10].split('') // transforma a palavra escolhida em matriz
    const [disable, setDisable] = React.useState(false); //estado que habilita os botôes
    const [currentWord, setCurrentWord] = React.useState(chooseWord.map(function () { return '-' }))
    const gallowImg = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
    const [erros, setErros]=React.useState(0)
    let [acertos, setAcertos] = React.useState(0)
    let aux = [...currentWord];
let ac= 0 // tirar essa variavel que controla os acerto se não usar
    function checkLetter(letter) { //função para tentar trocar o valor de - para a letra qdo der true
        //desabilitar a letra
setDisable(true)
        let indices = [] //indice que esta sendo usado para pegar a posição da palavra escolhida
        if (!chooseWord.includes(letter)) {
setErros(erros +1)

        } else {
            for (let i = 0; i < chooseWord.length; i++) {
                if (chooseWord[i] === letter) {
                  ac =  indices.push(i);
setAcertos(acertos + (ac))
                }
            }
            

            for (let i = 0; i < aux.length; i++) {
                aux[indices[i]] = letter
            }

            setCurrentWord(aux)
            
        }
        

        
    }
   
   console.log(aux)
     console.log(acertos)    



    return (
    <Body>
    

{erros < 6 ? 
     <Gallow src={gallowImg[erros]} alt="gallow" /> :
<Gallow src={gallowImg[6]} alt="gallow" /> }


        <ChooseWord onClick={() => (Math.floor((Math.random() * palavras.length)))} ><H3>Escolher Palavra</H3></ChooseWord>
        

        {!aux.includes('-') ?
<Word><Green><h1>{chooseWord}</h1></Green></Word>:
erros > 5 ?
    <Word><Red><h1>{chooseWord}</h1></Red></Word> :
    <Word><H1>{currentWord}</H1></Word>
}


        <Letters>
            
            {alphabet.map(letter => <button onClick={() => checkLetter(letter)}>{letter}</button>)}
            
        </Letters>



        <Footer>
            <Span>Já sei a palavra!</Span>

            <Hint disabled={disable}></Hint>
            <ButtonHint className="button-hint" disabled={disable}><H2>Chutar</H2></ButtonHint>
        </Footer>
    
    </Body>
    )
}

const Body = styled.body`
box-sizing: border-box;
text-decoration: none;
`
const Red = styled.span`

h1{
    color: red;
    font-size: 58px;
}
`
const Green = styled.span`

h1{
    color: green;
    font-size: 58px;
}
`

const Letters = styled.div`
display: flex;
    flex-wrap: wrap;
    width: 48%;

button{
    background-color: lightgray;
    border: none;
    margin: 8px;
    width: 50px;
    height: 50px;
    position: relative;
    top:600px;
    left: 600px;
    border-radius: 5px;
    text-transform: uppercase;
}
    `

const Gallow = styled.img `
width: 500px;
left:600px;
position: absolute;
`
const ChooseWord = styled.button `
background-color: green;
    border-radius: 18px;
    width: 195px;
    height: 60px;
    display: flex;
    align-items: center;
    position: fixed;
    left:1300px;
    top:40px;
    
`
const H3 = styled.h3 `
color:#ffff;
font-size:22px;
`
const H1 = styled.h1 `
font-size: 58px;
`
const H2 = styled.h2 `
font-size:24px
`
const Word = styled.div `
width: 300px;
position: fixed;
top: 450px;
left: 1190px;
display: flex;
align-items: space-between;
`

const Footer = styled.footer `
position: fixed;
    top:750px;
    width:42%;
    height: 80px;
    left: 640px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const Hint = styled.input `
width: 350px;
height: 40px;
input-security: disabled;
`
const ButtonHint = styled.button `
width: 160px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`
const Span = styled.span`
font-size: 30px;
font-weight: 500;
`























/*import React from "react"
import palavras from "./palavras"
import "./styles/style.css"
import forca0 from "./img/assets/forca0.png"
import forca1 from "./img/assets/forca1.png"
import forca2 from "./img/assets/forca2.png"
import forca3 from "./img/assets/forca3.png"
import forca4 from "./img/assets/forca4.png"
import forca5 from "./img/assets/forca5.png"
import forca6 from "./img/assets/forca6.png"



export default function App() {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const alphabet = alfabeto; //map que deixa as letras do teclado maiúsculas
    const aleatory = Math.floor((Math.random() * palavras.length)) //pega palavras aleatórias na matriz
    const chooseWord = palavras[10].split('') // transforma a palavra escolhida em matriz
    const [disable, setDisable] = React.useState(true); //estado que habilita os botôes
    const [currentWord, setCurrentWord] = React.useState(chooseWord.map(function () { return '-' }))
    const gallowImg = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
    const [erros, setErros]=React.useState(0)


console.log(aleatory)
    function checkLetter(letter) { //função para tentar trocar o valor de - para a letra qdo der true
        //desabilitar a letra

        let indices = [] //indice que esta sendo usado para pegar a posição da palavra escolhida
        if (!chooseWord.includes(letter)) {
setErros(erros +1)

        } else {
            for (let i = 0; i < chooseWord.length; i++) {
                if (chooseWord[i] === letter) {
                    indices.push(i);
                }
            }
            let aux = [...currentWord];

            for (let i = 0; i < aux.length; i++) {
                aux[indices[i]] = letter
            }

            setCurrentWord(aux)
        }


        //array.splice(a partir do índice N, remove N elementos, e adiciona "elemento" ?


        console.log(letter)
    }


    console.log(chooseWord) //matriz da palavra sorteada

console.log(erros)


    return (<main>


       <img className="gallow" src={gallowImg[erros]} alt="gallow" />
        

         /*desenho da forca que precisa iterar de acordo com a qtde de erros*/

/*
        <button onClick={() => setDisable(false)} className="chooseWord"><h3>Escolher Palavra</h3></button>
        /*botão que habilita os botões, precisa trocar para puxar palavras qdo clicado, colocar 2 funções no onclick*/

/*
        <div className="word"><h1>{currentWord}</h1></div> 


        <div className="letters">
            {alphabet.map(letter => <button onClick={() => checkLetter(letter)}>{letter}</button>)}
        </div>


        /*Botões do alfabeto, retorna o valor digitado */
/*        <footer>
            <span>Já sei a palavra!</span>

            <input id="hint" disabled={disable}></input>
            <button className="button-hint" disabled={disable}><h2>Chutar</h2></button>
        </footer>
    </main>

    )
}
*/