import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import SectionHeader from '../components/ui/SectionHeader'

const Profile = () => {
  const { currentAccountBalance, currentAccount } = useContext(TransactionContext)

  console.log(currentAccountBalance)

  return (
    <div>
      <SectionHeader
        title="Profile"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <p>Balance: {currentAccountBalance || ''}</p>
      <p> Wallet Address:{currentAccount} </p>
    </div>
  )
}

export default Profile
