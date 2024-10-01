# NFT Diploma DApp on Aptos

## Project Vision
The *NFT Diploma DApp* is a decentralized platform designed to issue and manage academic diplomas as non-fungible tokens (NFTs) on the *Aptos blockchain*. The project enables educational institutions to award verifiable digital diplomas in a secure, immutable format. Students can receive their diplomas in the form of NFTs, which they can securely store, transfer, or display. The *React* frontend facilitates diploma management, while the *Petra wallet* ensures secure transactions and NFT storage.

## Features
- **Digital Diploma as NFT**: Issue diplomas as NFTs, ensuring that academic records are secure and easily verifiable.
- **Secure NFT Transfers**: Diplomas can be transferred between users using smart contracts on the Aptos blockchain.
- **React Frontend**: A user-friendly interface to manage issued diplomas and verify ownership.
- **Aptos Move Smart Contracts**: Manage diploma issuance and transfers securely using the Move language.
- **Petra Wallet Integration**: Petra wallet enables users to authenticate and securely store their diploma NFTs.

## Tech Stack
- **Frontend**: React.js
- **Blockchain**: Aptos (Move Language)
- **Wallet**: Petra Wallet

## How It Works
1. **Issue Diplomas**: Institutions issue diplomas as NFTs to students, securely storing metadata (e.g., diploma details) on the blockchain.
2. **Secure Storage**: Diplomas are held in the students’ wallets, ensuring ownership and accessibility.
3. **Transfer Diplomas**: Diplomas can be transferred to other addresses (for example, to verify credentials with third parties).
4. **Blockchain Security**: All diploma issuance and transfer operations are secured using Aptos blockchain smart contracts.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [React](https://reactjs.org/)
- [Aptos CLI](https://aptos.dev/cli-tools/aptos-cli-tool/)
- [Petra Wallet](https://petra.app/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/aptos-nft-diploma.git
   cd aptos-nft-diploma
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Set up the Aptos environment:
   - Install Aptos CLI:
     ```bash
     curl -sSf https://aptos.dev/cli-tools/install | sh
     ```
   - Create an Aptos account:
     ```bash
     aptos init
     ```
   - Fund the account using the Aptos faucet (Devnet):
     ```bash
     aptos account fund-with-faucet --account your_account_address
     ```

4. Deploy the Move smart contract:
   - Navigate to the `move` folder in your project.
   - Build and deploy the contract:
     ```bash
     aptos move compile
     aptos move publish --profile devnet
     ```

5. Run the React frontend:
   ```bash
   npm start
   ```

6. Ensure *Petra Wallet* is installed and connected to interact with the DApp.

### Deployment

1. **Deploy on Aptos Devnet/Testnet**:
   - **Build the Move contract**:
     ```bash
     aptos move compile
     ```
   - **Deploy the contract**:
     ```bash
     aptos move publish --profile devnet
     ```
   - Make sure to copy the contract address for integration into the frontend.

2. **Frontend Deployment**:
   - Deploy the React app using any preferred service (e.g., Netlify, Vercel).
   - Update the contract address and Aptos network configurations in the frontend code.

### Usage
- Visit the frontend URL (e.g., http://localhost:3000 or the deployed link).
- Connect your *Petra Wallet*.
- Issue and manage NFTs representing diplomas securely on the blockchain.

## Aptos CLI Commands
- **Check account balance**:
  ```bash
  aptos account balance --profile devnet
  ```

- **Deploy Move contract**:
  ```bash
  aptos move publish --profile devnet
  ```

- **Fund account with Devnet faucet**:
  ```bash
  aptos account fund-with-faucet --account your_account_address
  ```

## Deployment Information
- **Smart Contract Address**: https://explorer.aptoslabs.com/txn/0x4a6b682305281e676800dbf5f22fddcc08e5d27c37ece8f4efb8e2f6db1f65de?network=devnet
- **Transaction**: 0x4a6b682305281e676800dbf5f22fddcc08e5d27c37ece8f4efb8e2f6db1f65de
- **Aptos Devnet URL**: https://fullnode.devnet.aptoslabs.com

- ![image](https://github.com/user-attachments/assets/abac1f28-da0e-463a-a006-1b23dd9885c2)


## Contact Information
For inquiries or support, feel free to reach out:

- **Name**: Harsh Shukla
- **Email**: harsh289211@gmail.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
- **GitHub**: `https://github.com/AlgorithmicMynd`

## Future Scope
The NFT Diploma DApp can be enhanced with the following features:
1. **Diploma Verification**: Implement a verification system for third parties to confirm the authenticity of diplomas.
2. **Institutional Dashboard**: Provide institutions with a dashboard for batch issuing diplomas.
3. **Revocation Mechanism**: Allow institutions to revoke or update diplomas if necessary.
4. **Cross-chain Support**: Enable diploma issuance on multiple blockchain networks for greater interoperability.
5. **Mobile Support**: Create a mobile app to allow users to manage their diplomas on the go.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
