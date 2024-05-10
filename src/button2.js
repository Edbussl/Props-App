import React from "react";

const Button2 = ({texto}) =>{
    return(

        <button type = "button" variant="primary" className ="btn-block text-truncate btn-success">
            {texto}
        </button>
    );
}

export default Button2;