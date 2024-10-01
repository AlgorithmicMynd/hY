import { useState, useEffect } from 'react';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import axios from 'axios';

const NFTDiplomas = () => {
    const { account, connected, signAndSubmitTransaction } = useWallet();
    const [diplomas, setDiplomas] = useState([]);
    const [diplomaName, setDiplomaName] = useState('');
    const [diplomaMetadata, setDiplomaMetadata] = useState('');

    useEffect(() => {
        if (connected) {
            fetchDiplomas();
        }
    }, [connected]);

    // Fetch diplomas for the connected user
    const fetchDiplomas = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/diplomas?address=${account.address}`);
            setDiplomas(response.data);
        } catch (error) {
            console.error("Error fetching diplomas:", error);
        }
    };

    // Issue a new diploma
    const issueDiploma = async () => {
        const transactionPayload = {
            type: "entry_function_payload",
            function: `${account.address}::nft_diploma::issue_diploma`,
            arguments: [diplomaName, diplomaMetadata],
        };

        try {
            const response = await signAndSubmitTransaction(transactionPayload);
            console.log("Diploma issued:", response);
            // Update the diplomas list after issuing a new diploma
            fetchDiplomas();
        } catch (error) {
            console.error("Error issuing diploma:", error);
        }
    };

    return (
        <div>
            <h1>Your Diplomas</h1>

            {/* Display the list of diplomas */}
            {diplomas.length > 0 ? (
                diplomas.map((diploma, index) => (
                    <div key={index}>
                        <h3>{diploma.name}</h3>
                        <p>{diploma.metadata}</p>
                    </div>
                ))
            ) : (
                <p>No diplomas found.</p>
            )}

            {/* Input fields for issuing a new diploma */}
            <h2>Issue a New Diploma</h2>
            <input
                type="text"
                placeholder="Diploma Name"
                value={diplomaName}
                onChange={(e) => setDiplomaName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Metadata URI"
                value={diplomaMetadata}
                onChange={(e) => setDiplomaMetadata(e.target.value)}
            />
            <button onClick={issueDiploma}>Issue Diploma</button>
        </div>
    );
};

export default NFTDiplomas;
