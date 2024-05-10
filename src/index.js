//REACTS
import React from "react"
import ReactDOM  from "react-dom"

//BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css"

//BOTÕES
import Button1 from "./button1";
import Button2 from "./button1";
import Button3 from "./button1";
import Button4 from "./button1";

//IMAGENS
import Image1 from "./img1";
import Image2 from "./img2";
import Image3 from "./img3";
import Image4 from "./img4";

const App = ( ) =>{
    return(

        <div className="container mt-4">
                <h1 className="text-center mb-4"> Exemplo com Bootstrap e React </h1>
            <div className="row">
            <div className="col-md-4 mb-3">
                <Button1 texto = "primeiro botão"/>
                <Image1/>
            </div>
            <div className="col-md-4 mb-3">
                <Button2 texto = "segundo botão"/>
                <Image2/>
            </div>
            <div className="col-md-4 mb-3">
                <Button3 texto = "terceiro botão"/>
                <Image3/>
            </div>
            <div className="col-md-4 mb-3">
                <Button4 texto = "quarto botão"/>
                <Image4/>
            </div>
        </div>
    </div>

    );

}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)