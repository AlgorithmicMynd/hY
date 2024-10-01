module nft_addr::nft_diploma {

    use aptos_framework::token::{Token, TokenStore, create_token, transfer};
    use aptos_framework::event;
    use aptos_framework::account;
    use std::signer;
    use std::string;
    use std::error;

    /// Error code for missing diploma
    const ENO_DIPLOMA: u64 = 0;

    // Resource to store diploma details
    struct DiplomaToken has key, store {
        owner: address,
        metadata_uri: string::String, // URI for diploma metadata (e.g., IPFS link)
    }

    #[event]
    struct DiplomaIssued has drop, store {
        issuer: address,
        receiver: address,
        diploma_metadata: string::String,
    }

    /// Function to issue a diploma NFT to a student
    public entry fun issue_diploma(
        issuer: signer, 
        recipient: address, 
        name: string::String, 
        metadata_uri: string::String
    ) acquires DiplomaToken {
        let issuer_addr = signer::address_of(&issuer);

        // Create a new DiplomaToken and move it to the recipient's account
        let token = DiplomaToken {
            owner: recipient,
            metadata_uri: metadata_uri.clone(),
        };
        move_to(&recipient, token);

        // Emit an event indicating a diploma has been issued
        event::emit(DiplomaIssued {
            issuer: issuer_addr,
            receiver: recipient,
            diploma_metadata: metadata_uri,
        });
    }

    /// Transfer a diploma from one address to another
    public entry fun transfer_diploma(
        owner: signer, 
        recipient: address
    ) acquires DiplomaToken {
        let owner_addr = signer::address_of(&owner);
        assert!(exists<DiplomaToken>(owner_addr), error::not_found(ENO_DIPLOMA));

        let diploma = move_from<DiplomaToken>(owner_addr);
        diploma.owner = recipient;
        move_to(&recipient, diploma);
    }

    /// Get the diploma metadata URI associated with a recipient's address
    #[view]
    public fun get_diploma_metadata(owner: address): string::String acquires DiplomaToken {
        assert!(exists<DiplomaToken>(owner), error::not_found(ENO_DIPLOMA));
        borrow_global<DiplomaToken>(owner).metadata_uri
    }

    /// Test case to simulate issuing a diploma
    #[test(account = @0x1)]
    public entry fun test_issue_diploma(issuer: signer) acquires DiplomaToken {
        let recipient = @0x2; // Test recipient address
        let diploma_name = string::utf8(b"Bachelor's Degree in Blockchain");
        let metadata_uri = string::utf8(b"ipfs://QmExampleMetadataUri");
        issue_diploma(issuer, recipient, diploma_name, metadata_uri);

        assert!(
            get_diploma_metadata(recipient) == metadata_uri,
            ENO_DIPLOMA
        );
    }
}
