import Button from "./Button"
import Input from "./Input"

const Card = ({ num }) => {
  return (
    <div className="border border-white p-4 rounded-xl w-[300px] bg-red-400">
      <Input />
      <div className="flex flex-wrap gap-5 mt-4 justify-center">

        {
          num.map((nums, index) => (
            <Button key={index} nums={nums} />
          ))
        }
      </div>
    </div>
  )
}

export default Card