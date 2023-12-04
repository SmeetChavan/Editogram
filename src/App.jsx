import Canvas from "./components/Canvas"
import NavBar from "./components/NavBar"

const App = () => {

  return (

    <section>

      <section className='sm:px-16 py-8'>

        <NavBar/>

      </section>

      <section className='sm:px-16 py-8'>

        <Canvas/>

      </section>

    </section>
  )
}

export default App