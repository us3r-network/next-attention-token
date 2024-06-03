export const UniERC20 = {
  address: "0x333520E513053668a86f3D20E8651893a59a3C25",
  abi: [
    {
      type: "function",
      name: "addUniswapLiquidity",
      inputs: [
        {
          name: "amountTokenA",
          type: "uint256",
          internalType: "uint256",
        },
        { name: "amountTokenB", type: "uint256", internalType: "uint256" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "getPair",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "event",
      name: "LiquidityCreated",
      inputs: [],
      anonymous: false,
    },
  ],
};
