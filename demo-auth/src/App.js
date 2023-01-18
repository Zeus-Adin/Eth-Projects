import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { Web3Button, useAccount } from '@web3modal/react';


function App() {
  const { account } = useAccount()

  const [open, setOpen] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const handleOpen = () => setOpen(true);
  console.log(accounts);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <p>Address: {account.isConnected ? <h1>{account.address}</h1> : null}</p>
            <p>{account.status}</p>
            <Web3Button />
          </div>
          <p>{accounts}</p>
        </header>
      </div>
    </>

  );
}

export default App;
