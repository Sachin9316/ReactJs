/* eslint-disable react/prop-types */
import TodoItem from './TodoItem'

const TodoItems = ({items}) => {
  return (
    <div>
     {
      items.map((item,index)=> (
        <TodoItem item={item} key={index}/>
      ))
     }
    </div>
  )
}

export default TodoItems