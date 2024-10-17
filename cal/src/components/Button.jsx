/* eslint-disable react/prop-types */
const Button = ({ nums }) => {
  return (
    <div>
      <button className='border border-black p-4 px-6 bg-gray-300 rounded-md hover:bg-blue-600 hover:text-white'>{nums}
      </button>
    </div>
  )
}

export default Button