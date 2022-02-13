import web3 from "./web3"

const address = '0x9dc12525cbec3f0b5a3e3d27753012eb78f10a93' //contract address

const abi =  [
  {
      inputs: [], stateMutability: 'nonpayable', type: 'constructor'
  },
  {
      inputs: [],
      name: 'enter',
      outputs: [],
      stateMutability: 'payable',
      type: 'function'
  },
  {
      inputs: [],
      name: 'getPlayers',
      outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
      stateMutability: 'view',
      type: 'function'
  },
  {
      inputs: [],
      name: 'manager',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function'
  },
  {
      inputs: [],
      name: 'pickWinner',
      outputs: [],
      stateMutability: 'payable',
      type: 'function'
  },
  {
      inputs: [{
          internalType: 'uint256', name: '', type: 'uint256'
      }],
      name: 'players',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function'
  }
]

export default new web3.eth.Contract(abi, address) // local contract instance
