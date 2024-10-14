const ItemDate = ({data}) => {
  const day = 20;
  const month = "March"
  const year = 1990
  return (
    <div className="text-center ml-3 border p-3 rounded-sm animate-pulse font-bold">
      <div className="text-orange-500">{data[1].age}</div>
      <div>{month}</div>
      <div className="text-green-500">{data[1].date}</div>
    </div>
  )
}

export default ItemDate