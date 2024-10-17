import Card from "./components/Card"

function App() {
  const num = ["C", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "-", "/", "*", "+","="]
  
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-gray-950">
      <Card num={num} />
    </div>
  )
}

export default App
