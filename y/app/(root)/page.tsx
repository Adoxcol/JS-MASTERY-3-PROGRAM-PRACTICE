
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox' // Assuming TotalBalanceBox is in a separate file//+
import RightSideBar from '@/components/RightSideBar';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className ="home" >
    <div className ='home-content'>
      <header className="home-header">
        <HeaderBox 
        type ='greeting'
        title ='Welcome'
        user = {loggedIn?.name || 'Guest'}
        subtext = 'Access and Manage your account and transactions'
        />

        <TotalBalanceBox
        accounts = {[]}
        totalBanks= {1}
        totalCurrentBalance = {1250.35}

        />
      </header>
      Recent Transactions
      </div>
     <RightSideBar 
     user = {loggedIn}
     transactions = {[]}
     banks = {[{currentBalance:25000},{currentBalance:35000}]}
     />
    
    </section>
  )
}

export default Home
