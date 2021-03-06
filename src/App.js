import React from "react";
import { Route } from "react-router-dom";
import Home from "./views/home";
import MainLayout from "./layouts/main/index";
import Punks from "./views/punks";

function App() {
  // This is replaced by web3-react
  /* useEffect(() => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(console.log);
      
      const web3 = new Web3(window.ethereum);
      web3.eth.requestAccounts().then(console.log);
    }
  }, []) */

  return (
    <MainLayout>
      <Route path="/" exact component={Home} />
      <Route path="/punks" exact component={Punks} />
    </MainLayout>
  );
}

export default App;
