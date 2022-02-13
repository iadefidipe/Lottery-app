import "./App.css"
import web3 from "./web3"
import lottery from "./lottery"
import { useState, useEffect } from "react"

function App() {
  const [manager, setManager] = useState("")
  const [players, setPlayers] = useState([])
  const [balance, setBalance] = useState("")
  const [value, setValue] = useState("")
  const [message, setMessage] = useState("")
  useEffect(() => {
    const getManager = async () => {
      const manager = await lottery.methods.manager().call()
      const players = await lottery.methods.getPlayers().call()
      const balance = await web3.eth.getBalance(lottery.options.address)
      setManager(manager)
      setPlayers(players)
      setBalance(balance)
    }

    getManager()
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()


    const accounts = await web3.eth.getAccounts()
    setMessage('Waiting for transction to be sucessful...')
    setValue('')

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(value, 'ether')
    })
    setMessage('Transaction completed....')

  }

  const pickWinner  = async () => {
    const accounts = await web3.eth.getAccounts()

    setMessage('Waiting for transction to be sucessful...')
    await lottery.methods.pickWinner().send({
      from: accounts[0]
    })

    setMessage('Winner has been picked...')

  }

  return (
    <div className='App'>
      <h1> Lottery Contract </h1>
      <p>
        {" "}
        This contract is managed by {manager}. There are currently{" "}
        {players.length} players competting to win{" "}
        {web3.utils.fromWei(balance, "ether")}{" "}
      </p>
      <hr />
      <form onSubmit={onSubmit}>
        <h3>Want to try your luck?</h3>
        <div>
          <label htmlFor=''>Amount of ether to enter</label>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
        </div>
        <button>Enter</button>
      </form>

      <hr />
      <h4> Ready to pick a winner?</h4>
      <button onClick={pickWinner} > Pick winner</button>
      <hr />

      <h2> {message} </h2>
    </div>
  )
}

export default App
