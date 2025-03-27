import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "mayuri",
    age: 20
  }
  let newArr = [1,2,3]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4
     rounded-xl mb-4'>Tailwind test</h1>
     {/* <div className="w-60 h-60 rounded-xl">
        <img
          src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
          alt="Giphy"
          className="rounded-t-xl"
        />
        <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10">
          <h1 className="font-bold  font-mono  text-xl">Available soon</h1>
        </div>
      </div> */}
      <Card username="Well-Wisher" btnText="click me" />
      <Card username="Supporter" btnText="visit me"/>
    </>
  )
}

export default App
