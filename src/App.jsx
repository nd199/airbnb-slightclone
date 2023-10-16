import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import katie from "./assets/katie-zaferes.png";
import star from "./assets/star.png";
import data from "./components/data";
import CardContent from './components/Card-Content';


function App() {
  const Cards = data.map(item => {
    return (
      <>
        <CardContent
          key={item.id}
          item={item}
        />
      </>
    )
  })
  return (
    <>
      <Navbar />
      <Content />
      <section className="cards-list">
        {Cards}
      </section>
    </>
  )
}

export default App
