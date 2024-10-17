import TodoItems from "./components/TodoItems"
import Inputs from "./components/Inputs"
import Title from "./components/Title"

function App() {
  const itemsData = [
    {
      ItemName:"Buy Milk",
      ItemDate:"29/12/2002",
    },
    {
      ItemName:"Buy Paneer",
      ItemDate:"19/02/2003",
    },
    {
      ItemName:"Buy Frankie",
      ItemDate:"04/11/2004",
    },
    {
      ItemName:"Buy Chole",
      ItemDate:"15/05/2008",
    },
  ]
  return (
    <div className="w-full min-h-screen bg-gray-950 flex justify-center items-center text-white flex-col gap-y-5">
      <Title />
      <Inputs/>
      <TodoItems  items={itemsData} />
    </div>
  )
}

export default App
