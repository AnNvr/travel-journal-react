import data from "./assets/data"
import Card from "./components/Card"
import Header from "./components/Header"


function App() {
  const card = data.map(item => {
    return (
      <Card 
        key={item.index}
        {...item}
      />
    )
  })
  return (
    <>
      <Header />
      {card}
    </>
  )
}

export default App
