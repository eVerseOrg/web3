import { useWeb3 } from "@3rdweb/hooks";
import { Button } from "antd";

const CustomConnect = () => {
  const {
    address,
    chainId,
    provider,
    disconnectWallet,
    connectWallet
  } = useWeb3();

  return (
    <div className="container">
      {address && (
        <Button type="primary" onClick={disconnectWallet} className="primary">
          Wallet Connected
        </Button>
      )}
      {!address && (
        <Button type="primary" onClick={() => connectWallet("injected")}>
          Connect Wallet to eVerse
        </Button>
      )}
      {address && (
        <h2>
          Address:<b> {address}</b>
        </h2>
      )}
      {address && (
        <h2>
          ChainId:<b> {chainId}</b>
        </h2>
      )}
    </div>
  );
};

export default CustomConnect;
