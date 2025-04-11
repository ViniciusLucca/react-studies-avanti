import { useState } from 'react'
import styles from './ContactForm.module.css'
const ContactForm = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: ''
    })

    const handleChange = (e) => {
        /* 
            A sintaxe ([e.target.value]:e.target.value) vem de uma 
            coisa chamada 'computed property names' em javascript.
            
            Isso evita o uso de if/else, ou switch-case para manejar
            o valor conforme o valor da variável.

            No caso, o que está entre colchetes [], é uma string, que por sua
            vez, é o nome de um campo do objeto. É como se fosse a posição de 
            um vetor, só que em vez de usar índices, se usa strings.

            Os dois pontos (:) não são um operador ternário, mas sim o de
            atribuição de valor.
        */
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <form /* action="" */ className={styles.form}>
            <input
                type="text"
                name='nome'
                placeholder='Nome: '
                className={styles.input}
                value={formData.nome}
                onChange={handleChange}
            />
            <input
                type="email"
                name='email'
                placeholder='E-mail: '
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
            />
            <textarea
                name="mensagem"
                placeholder='Mensagem: '
                className={styles.mensagem}
                value={formData.mensagem}
                onChange={handleChange}
            >
            </textarea>
            <button 
            type="submit" 
            className={styles.button}
            onClick={handleSubmit}
            >Enviar</button>
        </form>
    )
}

export default ContactForm