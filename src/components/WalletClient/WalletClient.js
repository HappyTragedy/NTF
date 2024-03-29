import React, { useState /*useEffect*/ } from "react";
import {
  useAddress,
  useOnboard,
  useWallet,
  useWalletProvider,
  /*useBalance,*/
} from "../../contexts/OnboardContext";
import { truncateWeb3Address } from "../../services/onboard/helpers";
import WalletButton from "../WalletButton/WalletButton";
import Web3 from "web3";
import { factoryAddress, factoryAbi } from "../../services/onboard/contract";
import styles from "../WalletClient/WalletClient.module.css";

const WalletClient = () => {
  const [quantity, setquantity] = useState(1);
  const [price] = useState(0.05);
  const onboard = useOnboard();
  const wallet = useWallet();
  const address = useAddress();
  /*const balance = useBalance();*/
  const provider = useWalletProvider();
  const web3 = new Web3(provider);

  const cantidad = (quantityValue) => setquantity(quantityValue);

  /*const [userBalance, setUserBalance] = useState(0);*/

  /*useEffect(() => {
    if (address) {
      if (balance) {
        const valueEth = web3.utils.fromWei(`${balance}`, "ether");
        const totalFixed = parseFloat(valueEth).toFixed(4);
        setUserBalance(totalFixed);
      }
    } else {
      setUserBalance(0);
    }
  }, [web3.utils, balance, address]);*/

  const handleMint = async () => {
    console.log("MINT!");
    try {
      const myContract = new web3.eth.Contract(factoryAbi, factoryAddress);

      const saleStarted = await myContract.methods
        .saleStarted()
        .call()
        .catch(function (error) {
          return false;
        });

      const publicSaleStarted = await myContract.methods
        .merkleEnabled()
        .call()
        .catch(function (error) {
          return false;
        });

      const price = await myContract.methods
        .monsterPrice()
        .call()
        .catch(function (error) {
          return false;
        });

      console.log("Sale Started", saleStarted);
      console.log("Sale Started", publicSaleStarted);
      console.log("Price", price);

      const quantity = 1;

      const mintParams = {
        proof: ["0x0000000000000000000000000000000000000000"],
        leaf: "0x0000000000000000000000000000000000000000",
        quantity,
      };

      const total = parseInt(quantity) * parseFloat(price);
      // const totalFixed = parseFloat(total.toFixed(4));
      // const valueEth = web3.utils.toWei(`${totalFixed}`, 'ether');

      await myContract.methods
        .mint(mintParams.proof, mintParams.leaf, parseInt(mintParams.quantity))
        .send({ from: address, value: total })
        .once("transactionHash", function (hash) {
          // setUserConfirmation(`success`);
          // setHash(hash);
          console.log("Transaction Hash", hash);
        })
        .once("receipt", function (receipt) {
          // setBlChainConfirmation(`success`);
          // setTimeout(() => {
          //   setSuccess(true);
          // }, 1000);
          console.log("Transaction Confirmed", receipt);
        })
        .on("error", function (error, receipt) {
          // handleError(error);
          console.log("Error", error);
        });
    } catch (error) {}
  };

  const plus = () => {
    if (quantity < 2) {
      cantidad(quantity + 1);
    }
  };
  const minus = () => {
    if (quantity > 1) {
      cantidad(quantity - 1);
    }
  };

  return onboard ? (
    <div className={styles["wallet-client"]}>
      {!wallet.provider ? (
        <div>
          <h2>Get ready to travel</h2>
          <h4>Connect to Wallet!</h4>
          <p>
            Price: <span>0,000000000000000005ETH</span>
          </p>
          <WalletButton />
        </div>
      ) : (
        <div>
          <h2>Connected with {wallet.name}</h2>
          <p>Price per Traveler</p>
          <span>{price} ETH</span>
          <div className={styles["cart"]}>
            <div className={styles["addRemove"]}>
              <button disabled={quantity === 1 ? true : false} onClick={minus}>
                -
              </button>
              <label> {quantity} </label>
              <button disabled={quantity === 2 ? true : false} onClick={plus}>
                +
              </button>
            </div>
          </div>
          <div className={styles["price"]}>
            <span>Total: </span>
            <span>{(price * quantity).toFixed(2)} ETH</span>
          </div>
          <button
            className={styles["mint"]}
            disabled={!address ? true : false}
            onClick={handleMint}
          >
            Mint
          </button>
          {address ? (
            <p>{truncateWeb3Address(address)}</p>//Sacar?
          ) : (
            <p>Please connect your {wallet.name} wallet to use the app.</p>
          )}
        </div>
      )}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default WalletClient;
