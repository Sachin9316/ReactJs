function App() {

  const fooodItems = ["dal", "Roti", "Sabzi", "Milk", "Paneer", "Palak", "Ghee"]
  return (
    <div>
      <h1>Healthy Food</h1>
      {
        fooodItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }

      {
        fooodItems.includes("Ghee") && <div>Hello Sachin</div>
      }
    </div>
  )
}

export default App;