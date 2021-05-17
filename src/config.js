const CONTRACT_NAME = "dev-1614138757516-6667260";

module.exports = function getConfig() {
  let config = {
    networkId: "testnet",
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "http://localhost:1234",
    // walletUrl: 'https://wallet.testnet.near.org',
    helperUrl: "https://helper.testnet.near.org",
    CONTRACT_NAME,
  };

  if (process.env.REACT_APP_ENV !== undefined) {
    config = {
      ...config,
      GAS: "300000000000000",
      DEFAULT_NEW_ACCOUNT_AMOUNT: "5",
      contractMethods: {
        changeMethods: [
          "new",
          "mint_token",
          "guest_mint",
          "transfer",
          "set_price",
          "purchase",
          "withdraw",
        ],
        viewMethods: ["get_token_data", "get_num_tokens", "get_proceeds"],
      },
      accessKeyMethods: {
        changeMethods: ["guest_mint", "set_price", "withdraw"],
        viewMethods: [
          "get_token_data",
          "get_num_tokens",
          "get_proceeds",
          "get_pubkey_minted",
        ],
      },
    };
  }

  if (process.env.REACT_APP_ENV === "prod") {
    config = {
      ...config,
      networkId: "mainnet",
      nodeUrl: "https://rpc.mainnet.near.org",
      walletUrl: "https://wallet.near.org",
      helperUrl: "https://helper.mainnet.near.org",
      CONTRACT_NAME: "near",
    };
  }

  return config;
};
