import './App.css'
import List from './component/List'
import Option from './component/Option'
import Img from './assets/images.jpg'
import Funds from './component/Funds'
import Stock from './component/Stock'
import Portfolio from './component/Portfolio'
import Community from './component/Community'
import Courses from './component/Courses'

function App() {

  return (
    <div id="App">
      <List/>
      <div className='flex items-center justify-center m-6'>
        <div className="border flex p-3 bg-purple-100 rounded-md" >
          <div className='flex flex-col p-4'>
            <h1 className='font-semibold'>Try the AI assitance help to get better investment plans</h1>
            <button className='rounded-2xl px-3 py-2 w-3/5 bg-white my-4'>Try now</button>
          </div>
          <img src={Img} alt="" className='size-32'/>
          </div>
      </div>
      <Option/>
      <Funds/>
      <Stock/>
      <Portfolio/>
      <Courses/>
      <Community/>
    </div>  
  )
}

export default App
