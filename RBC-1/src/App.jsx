import ItemDate from "./components/ItemDate"
import Items from "./components/Items"

function App() {
  const data = [
    {
      name:"sachin",
      age: 25,
      date: "2022-01-01"
    },
    {
      name:"manish",
      age: 26,
      date: "2023-01-01"
    },
    {
      name:"Tushar",
      age: 35,
      date: "2032-01-01"
    },
    {
      name:"Raj",
      age: 45,
      date: "2026-01-01"
    },
  ]

  return (
    <>
      <div className='name text-5xl w-full text-white bg-gray-950 min-h-screen flex items-center justify-center border'>
        Sachin
        <Items  data={data} />
        <ItemDate data={data}/>
      </div>
    </>
  )
}

export default App
