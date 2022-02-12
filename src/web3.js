import Web3 from 'web3'

window.ethereum.request({ method: 'eth_requestAccounts' }) //metamask provider

const web3 = new Web3(window.ethereum) // create a new instance of web3, injecting the provider from metamask

export default web3
