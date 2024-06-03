export const AddLiquidity = {
  address: "0x55A6889E0774664413C1fd6575C1C551D9335a1e",
  abi: [
    {
      inputs: [
        {
          internalType: "address",
          name: "_tokenA",
          type: "address",
        },
        {
          internalType: "address",
          name: "_tokenB",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_amountA",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_amountB",
          type: "uint256",
        },
      ],
      name: "addLiquidity",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_tokenA",
          type: "address",
        },
        {
          internalType: "address",
          name: "_tokenB",
          type: "address",
        },
      ],
      name: "removeLiquidity",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
};
