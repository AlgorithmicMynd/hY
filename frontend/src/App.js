import { PetraWalletAdapter } from '@aptos-labs/wallet-adapter-petra';
import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react';
import NFTDiplomas from './NFTDiplomas';  

function App() {
    return (
        <AptosWalletAdapterProvider wallets={[new PetraWalletAdapter()]} autoConnect={true}>
            <NFTDiplomas /> 
        </AptosWalletAdapterProvider>
    );
}

export default App;
