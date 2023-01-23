import React, { useContext, useEffect, useState } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import SectionHeader from '../components/ui/SectionHeader'

const Profile = () => {
  const { getCurrentBalance, currentAccount } = useContext(TransactionContext)
  const [balance, setBalance] = useState('')

  useEffect(() => {
    const getBalance = async () => {
      const res = await getCurrentBalance()
      console.log(res)

      setBalance(res)
    }
    getBalance()
  }, [currentAccount])

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Profile"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <p className="text-white font-2xl">Balance: {balance || ''}</p>
      <p className="text-white font-2xl"> Wallet Address: {currentAccount} </p>
      <SectionHeader
        title="My NFTs"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
  )
}

export default Profile
