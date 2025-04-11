import React from 'react'

const Event = () => {

    const HandleGreetings = (name) => {
        alert(`Olá, ${name}`);
    }

  return (
    <>
        <button onClick={() => alert('clickado')}>Alert</button>
        <button onClick={() => HandleGreetings("João")}>Alert</button>
    </>
  )
}

export default Event