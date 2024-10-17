import DateTime from './components/DateTime'
import Title from './components/Title'

function App() {
  return (
    <div className='bg-gray-900 w-full min-h-screen flex flex-col justify-center items-center text-center gap-y-2'>
      <Title/>
      <DateTime/>
    </div>
  )
}

export default App
