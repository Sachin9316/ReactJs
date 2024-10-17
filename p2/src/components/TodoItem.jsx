/* eslint-disable react/prop-types */

const TodoItem = ({ item }) => {
  return (
    <div className='flex flex-col gap-y-3 border-red-600 border-[2px] p-3'>
      <div className='flex justify-between w-[500px] items-center'>
        <h2 className=''>{item.ItemName}</h2>
        <p>{item.ItemDate}</p>
        <button className='rounded bg-red-950 text-white p-3 px-7 hover:bg-red-500'>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem