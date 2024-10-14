
const Items = ({data}) => {
  // const itemName = "Nirma"
  return (
    <div className="text-green-500 animate-pulse border p-2 text-center pb-3 rounded-md ml-3">{data[1].name}</div>
  )
}

export default Items