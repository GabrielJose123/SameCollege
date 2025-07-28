import './App.css';
import { Header } from './components/Header/Header';
import { Title } from './components/Title';
import { Nav } from './components/Nav/Nav'
import { Aside } from './components/ProfileAside/Aside';

export function App() {

  return (
    <>
      <Header>
        <Title><h1>SameCollege</h1></Title>
        <Nav />
      </Header>
      <main style={{width:'100%',height:'85vh',backgroundColor:'red'}}>
        <Aside />
      </main>
      
    </>
  )
}

export default App
