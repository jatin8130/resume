import 'remixicon/fonts/remixicon.css'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  return(
    <div style={{
      backgroundImage: 'linear-gradient(to right, #F1F9FD, white, #F1F9FD)'
    }}>
      <Nav />
      <Home />
      <About />
    </div>
  )
}

export default App