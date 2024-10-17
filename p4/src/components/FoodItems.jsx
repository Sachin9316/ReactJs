import Item from "./Item"

const FoodItems = ({items}) => {
  return (
    <div>
      {
        items.map((item,index)=> {
          return <Item key={index} item={item}/>
        })
      }
    </div>
  )
}

export default FoodItems