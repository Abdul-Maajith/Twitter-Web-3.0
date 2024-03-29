import Head from 'next/head'
import Feed from '../components/Home/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from "../components/Widgets";
import { useContext } from "react";
import { TwitterContext } from "../context/TwitterContext";
import Image from "next/image";
import metamaskLogo from "../assets/metamaskLogo.png";
import errorImg from "../assets/error.png";

const style = {
  wrapper:
    "flex justify-center h-full w-screen select-none bg-[#15202b] text-white",
  content: `max-w-[1400px] w-2/3 flex justify-between`,
  loginContainer: `w-full h-full flex flex-col justify-center items-center pb-48`,
  walletConnectButton: `text-2xl text-black bg-white font-bold mb-[-3rem] mt-[3rem] px-6 py-4 rounded-full cursor-pointer hover:bg-[#d7dbdc]`,
  loginContent: `text-3xl font-bold text-center mt-24`,
};

export default function Home() {
  const { appStatus, connectWallet } = useContext(TwitterContext);

  const app = (Status = appStatus) => {
    switch (Status) {
      case "connected":
        return userLoggedIn;

      case "notConnected":
        return noUserFound;

      case "noMetaMask":
        return noMetaMaskFound;

      case "error":
        return error;

      default:
        return loading;
    }
  }
  
  // Use () to return something!
  const userLoggedIn = (
    <>
      <div className={style.content}>
        <Sidebar initialSelectedIcon={"Home"} />
        <Feed />
      </div>
      <Widgets />
    </>
  );

  const noUserFound = (
    <div className={`${style.loginContainer} h-screen`}>
      <Image src={metamaskLogo} width={200} height={200} />
      <div
        className={style.walletConnectButton}
        onClick={() => connectWallet()}
      >
        Connect Wallet
      </div>
      <div className={style.loginContent}>Connect to Metamask.</div>
    </div>
  );

  const noMetaMaskFound = (
    <div className={`${style.loginContainer} h-screen`}>
      <Image src={metamaskLogo} width={200} height={200} />
      <div className={style.loginContent}>
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://metamask.io/download.html`}
        >
          You must install Metamask, a <br /> virtual Ethereum wallet, in your
          browser.
        </a>
      </div>
    </div>
  );

  const error = (
    <div className={`${style.loginContainer} h-screen`}>
      <Image src={errorImg} width={250} height={200} />
      <div className={style.loginContent}>
        An error occurred. Please try again later or from another browser.
      </div>
    </div>
  );

  const loading = (
    <div className={`${style.loginContainer} h-screen`}>
      <div className={style.loginContent}>Loading...</div>
    </div>
  );

  return (
    <div className="">
      <Head>
        <title>Twitter-Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={style.wrapper}>
        {app(appStatus)}
      </div>
    </div>
  )
}