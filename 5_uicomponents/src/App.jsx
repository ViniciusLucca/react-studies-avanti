import Clock from './components/Clock/Clock'
import Modal from './components/Modal/Modal'
import ContactForm from './components/ContactForm/ContactForm'
import Accordeon from './components/Accordeon/Accordeon'
import './App.css'

function App() {
  return (
    <>
    <div>
      <h1>UI Components</h1>
      <Accordeon></Accordeon>
      <hr />
      <ContactForm></ContactForm>
      <hr />
      <Clock></Clock>
      <hr />
      <Modal></Modal>
    </div>
    </>
  )
}

export default App
