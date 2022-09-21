import React from "react"
import palavras from "./palavras"
import "./styles/style.css"
import forca0 from "./img/assets/forca0.png"
import forca1 from "./img/assets/forca1.png"
import forca2 from "./img/assets/forca2.png"
import forca3 from "./img/assets/forca3.png"
import forca4 from "./img/assets/forca4.png"
import forca5 from "./img/assets/forca5.png"
import forca6 from "./img/assets/forca6.png"



export default function App(props){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const alphabet = alfabeto.map(a =>a.toUpperCase());
let [disable, setDisable] = React.useState(true);





    return (<main> 

            <img className="gallow"src={forca6} alt ="gallow"/>
        <button onClick={()=>setDisable(!disable)} className="chooseWord"><h3>Escolher Palavra</h3></button>
        <div className="word"><h1>{palavras[2]}</h1></div>
        <div className="letters"> 
           
{alphabet.map(alphabet => <button><h2>{alphabet}</h2></button>)}

        </div>
        <footer>
            <span>Já sei a palavra!</span>
            <input id="hint" disabled={disable}></input>
            <button className="button-hint"disabled={disable}><h2>Chutar</h2></button>
        </footer>
    </main>
       
    )
    
}