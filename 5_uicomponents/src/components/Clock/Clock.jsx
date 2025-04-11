import { useState, useEffect } from 'react'

const Clock = () => {
    // o valor inicial é uma data nova porque é mais coerente do que inicializar com 0
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    useEffect(() => {
        // Isso atualiza a variável 'time' com o horário novo a cada 1 segundo
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        // essa parte do clearInterval é importante pra não sobrecarregar a memória
        return () => clearInterval(timer)
    })
    return (
        <div>Hora atual: {time}</div>
    )
}

export default Clock