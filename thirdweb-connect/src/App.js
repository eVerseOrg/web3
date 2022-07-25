import "./styles.css";
import { ThirdwebProvider } from "@3rdweb/react";
import ThirdwebConnect from "./ThirdwebConnect";
import CustomConnect from "./CustomConnect";

const supportedChainIds = [1, 4, 137];

const connectors = {
  injected: {}
};

export default function App() {
  return (
    <ThirdwebProvider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <CustomConnect />
    </ThirdwebProvider>
  );
}
