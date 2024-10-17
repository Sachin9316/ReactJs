import FoodItems from "./components/FoodItems"

function App() {
  const items = ['ghee', "paneer", "Raita", "Butter", "Frankie", "Dal", "Roti","Chole"]
  return (
    <div>
      <FoodItems items={items}/>
    </div>
  )
}

export default App
