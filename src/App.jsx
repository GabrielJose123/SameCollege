import './App.css'
import { CssUtilitary } from './CssUtilitary'

function App() {

  return (
   <>
   <Header></Header>
   <Body>
      <User>aa</User>
      <ForYou></ForYou>
      <Friends></Friends>
   </Body>
   </>
  )
}

function Header() {
   return (
    <>
    <header>
        <div className='tiltle'>
          <h1>SameCollege</h1>
        </div>
    </header>
    </>
  )
}

function User() {
  return (
    <section className='UserPefil'>
      <div style={{width:'100%',height:'50%', backgroundColor:'white', ...CssUtilitary.Flex}}>
          <div style={{width:'70%', height:'70%', backgroundColor:'green' }}></div>
      </div>
      <div></div>
      <div></div>
    </section>
  )
}

function ForYou() {
  return (
    <section className='ForYou'></section>
  )
}

function Friends() {
  return (
    <section className='Friends'></section>
  )
}

function Body({ children }) {
  return (
    <main className='main1'>
      {children}
    </main>
  )
}

export default App
