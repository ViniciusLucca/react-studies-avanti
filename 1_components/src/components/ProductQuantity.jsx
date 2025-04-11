import {useState} from 'react'

const ProductQuantity = () => {
    // useState() é uma função que retorna um vetor.
    /* O vetor retornado tem 2 itens, um que "Cria" uma variável 
    com o nome que você quer, e outro que é uma função.
    */
    /* A função atualiza o valor da variável, igual a setters em 
     Programação Orientada a Objeto.
    */
    // Como o retorno do useState é um vetor, você tem que usar essa sintaxe.
    const [product, setProduct] = useState({
        name: "Cadeira",
        quantity: 1
    })

    const updateQuantity = () => {
        setProduct((prevProduct) => ({
            ...prevProduct,
            quantity: prevProduct.quantity + 1
        }))
    }

    return (
        <>
            <p>Nome do Produto: {product.name}</p>
            <p>Quantidade: {product.quantity}</p>

            <button onClick={updateQuantity}>Aumentar Quantidade do Produto</button>
        </>
    )
}

export default ProductQuantity