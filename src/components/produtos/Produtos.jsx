import { useState } from "react";

function Produtos() {

    const imagens = [
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    ]

    function clickFunc() {
        window.alert("Clicked!")
    }

    // React -> Reagir (Reativo)
    // Estado -> Uma variável do contexto da tela
    // Estado -> No React, representado por uma função que gera um novo estado (useState)
    const [imagem, setImagem] = useState(imagens[0]);
    // let imagem = imagens[0];

    return (
        <div>
            <button onClick={clickFunc}>Click-me</button>

            <img src={imagem} style={{width: "200px", height: "200px", objectFit: "cover"}} />

            <select onChange={(event) => {
                const indexImage = event.target.value; // endereço da imagem no vetor (0, 1,)
                // imagem = imagens[indexImage];
                setImagem(imagens[indexImage])
            }}>
                <option value="0">Imagem 0</option>
                <option value="1">Imagem 1</option>
                <option value="2">Imagem 2</option>
            </select>
        </div>
        
    )
}

export default Produtos;