import './App.css'
import web3 from './web3'

function App() {
	web3.eth.getAccounts().then(console.log)
	return <div className='App'></div>
}

export default App
