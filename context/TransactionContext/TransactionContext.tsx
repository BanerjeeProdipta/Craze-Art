/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-constructed-context-values */
import { ethers } from 'ethers'
import {
  createContext,
  useEffect,
  useState,
} from 'react'
import { contractAddress, transactionABI } from '../../utils/constants'

const TransactionContext = createContext({
  transactionCount: 0,
  connectWallet: () => { },
  disconnectWallet: () => { },
  transactions: [],
  currentAccount: '',
  isLoading: false,
  sendTransaction: (
    addressTo:string,
    amount:string,
    message:string,
    keyword:string,
  ) => {
    console.log(addressTo, amount, message, keyword)
  },
})

const window:any = global
const { ethereum } = window

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const transactionsContract = new ethers.Contract(contractAddress, transactionABI, signer)

  return transactionsContract
}

function TransactionContextProvider({ children }:any) {
  const [currentAccount, setCurrentAccount] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [transactionCount, setTransactionCount] = useState(0)
  const [transactions, setTransactions] = useState([])

  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract()

        const availableTransactions = await transactionsContract.getAllTransactions()

        const structuredTransactions = availableTransactions.map((transaction:any) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: parseInt(transaction.amount._hex, 10) / (10 ** 18),
        }))

        console.log(structuredTransactions)

        setTransactions(structuredTransactions)
      } else {
        console.log('Ethereum is not present')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

      setCurrentAccount(accounts[0])
      window.location.reload()
    } catch (error) {
      console.log(error)

      throw new Error('No ethereum object')
    }
  }

  const disconnectWallet = async () => {
    try {
      // disconnect wallet
      if (ethereum) {
        await ethereum.request({ method: 'eth_requestAccounts' })
        setCurrentAccount('')
        window.location.reload()
      }
    } catch (error) {
      console.log(error)
    }
  }
  const sendTransaction = async (data:any) => {
    try {
      if (ethereum) {
        const {
          addressTo, amount, message, keyword,
        } = data
        const transactionsContract = createEthereumContract()
        const parsedAmount = ethers.utils.parseEther(amount)

        await ethereum.request({
          method: 'eth_sendTransaction',
          params: [{
            from: currentAccount,
            to: addressTo,
            gas: '0x5208',
            // eslint-disable-next-line no-underscore-dangle
            value: parsedAmount._hex,
          }],
        })

        const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message, keyword)

        setIsLoading(true)
        console.log(`Loading - ${transactionHash.hash}`)
        await transactionHash.wait()
        console.log(`Success - ${transactionHash.hash}`)
        setIsLoading(false)

        const transactionsCount = await transactionsContract.getTransactionCount()

        setTransactionCount(transactionsCount.toNumber())
        window.location.reload()
      } else {
        console.log('No ethereum object')
      }
    } catch (error) {
      console.log(error)

      throw new Error('No ethereum object')
    }
  }

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')

      const accounts = await ethereum.request({ method: 'eth_accounts' })

      if (accounts.length) {
        setCurrentAccount(accounts[0])

        getAllTransactions()
      } else {
        console.log('No accounts found')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const checkIfTransactionsExists = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract()
        const currentTransactionCount = await transactionsContract.getTransactionCount()

        window.localStorage.setItem('transactionCount', currentTransactionCount)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnect()
    checkIfTransactionsExists()
  }, [checkIfWalletIsConnect, transactionCount])

  return (
    <TransactionContext.Provider
      value={{
        transactionCount,
        connectWallet,
        disconnectWallet,
        transactions,
        currentAccount,
        isLoading,
        sendTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
export { TransactionContext, TransactionContextProvider }
