export const AttToken = {
  address: "0x1b8f0C819d3b925B0696A25B2A31AF507c8b7687",
  abi: [
    {
      type: "constructor",
      inputs: [
        { name: "name_", type: "string", internalType: "string" },
        { name: "symbol_", type: "string", internalType: "string" },
        { name: "admin_", type: "address", internalType: "address" },
        { name: "_adminFee", type: "uint256", internalType: "uint256" },
        {
          name: "initialTokenSupply",
          type: "uint96",
          internalType: "uint96",
        },
        {
          name: "initialSupplyOwner",
          type: "address",
          internalType: "address",
        },
        {
          name: "payToken_",
          type: "address",
          internalType: "contract IERC20",
        },
        {
          name: "bondingCurve_",
          type: "address",
          internalType: "contract IBondingCurve",
        },
      ],
      stateMutability: "nonpayable",
    },
    { type: "fallback", stateMutability: "payable" },
    { type: "receive", stateMutability: "payable" },
    {
      type: "function",
      name: "ADMIN_FEE_BIPS",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "BONDING_CURVE",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "contract IBondingCurve",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "WETH",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "_payToken",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "contract IERC20" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "addLiquidity",
      inputs: [
        { name: "_tokenA", type: "address", internalType: "address" },
        { name: "_tokenB", type: "address", internalType: "address" },
        { name: "_amountA", type: "uint256", internalType: "uint256" },
        { name: "_amountB", type: "uint256", internalType: "uint256" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "addLiquidityAP",
      inputs: [
        { name: "_tokenA", type: "address", internalType: "address" },
        { name: "_amountA", type: "uint256", internalType: "uint256" },
        { name: "_amountPay", type: "uint256", internalType: "uint256" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "addUniswapLiquidity",
      inputs: [
        {
          name: "payTokenAmount",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "attTokenAmoun",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "admin",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "allowance",
      inputs: [
        { name: "owner", type: "address", internalType: "address" },
        { name: "spender", type: "address", internalType: "address" },
      ],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "approve",
      inputs: [
        { name: "spender", type: "address", internalType: "address" },
        { name: "amount", type: "uint256", internalType: "uint256" },
      ],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "balanceOf",
      inputs: [{ name: "owner", type: "address", internalType: "address" }],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "burnNFT",
      inputs: [{ name: "_nftAmout", type: "uint256", internalType: "uint256" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "cancelOwnershipHandover",
      inputs: [],
      outputs: [],
      stateMutability: "payable",
    },
    {
      type: "function",
      name: "completeOwnershipHandover",
      inputs: [
        { name: "pendingOwner", type: "address", internalType: "address" },
      ],
      outputs: [],
      stateMutability: "payable",
    },
    {
      type: "function",
      name: "decimals",
      inputs: [],
      outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getBurnNFTPrice",
      inputs: [{ name: "amount", type: "uint256", internalType: "uint256" }],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getBurnNFTPriceAfterFee",
      inputs: [{ name: "amount", type: "uint256", internalType: "uint256" }],
      outputs: [
        {
          name: "_nftToalPrice",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "_totalAdminFee",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getMintNFTPrice",
      inputs: [{ name: "amount", type: "uint256", internalType: "uint256" }],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getMintNFTPriceAfterFee",
      inputs: [{ name: "amount", type: "uint256", internalType: "uint256" }],
      outputs: [
        {
          name: "_nftToalPrice",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "_totalAdminFee",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getNextMintNFTPrice",
      inputs: [{ name: "nftNumber", type: "uint256", internalType: "uint256" }],
      outputs: [
        { name: "_nftPrice", type: "uint256", internalType: "uint256" },
        { name: "_adminFee", type: "uint256", internalType: "uint256" },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPair",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPreMintNFTPrice",
      inputs: [{ name: "nftNumber", type: "uint256", internalType: "uint256" }],
      outputs: [
        { name: "_nftPrice", type: "uint256", internalType: "uint256" },
        { name: "_adminFee", type: "uint256", internalType: "uint256" },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getSkipNFT",
      inputs: [{ name: "owner", type: "address", internalType: "address" }],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "mintNFT",
      inputs: [
        { name: "_nftAmout", type: "uint256", internalType: "uint256" },
        { name: "_maxPayment", type: "uint256", internalType: "uint256" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "mintToken",
      inputs: [
        { name: "to", type: "address", internalType: "address" },
        { name: "amount", type: "uint256", internalType: "uint256" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "mirrorERC721",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "name",
      inputs: [],
      outputs: [{ name: "", type: "string", internalType: "string" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "owner",
      inputs: [],
      outputs: [{ name: "result", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "ownershipHandoverExpiresAt",
      inputs: [
        { name: "pendingOwner", type: "address", internalType: "address" },
      ],
      outputs: [{ name: "result", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "renounceOwnership",
      inputs: [],
      outputs: [],
      stateMutability: "payable",
    },
    {
      type: "function",
      name: "requestOwnershipHandover",
      inputs: [],
      outputs: [],
      stateMutability: "payable",
    },
    {
      type: "function",
      name: "setBaseURI",
      inputs: [{ name: "baseURI_", type: "string", internalType: "string" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "setSkipNFT",
      inputs: [{ name: "skipNFT", type: "bool", internalType: "bool" }],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "symbol",
      inputs: [],
      outputs: [{ name: "", type: "string", internalType: "string" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "totalSupply",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "transfer",
      inputs: [
        { name: "to", type: "address", internalType: "address" },
        { name: "amount", type: "uint256", internalType: "uint256" },
      ],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "transferFrom",
      inputs: [
        { name: "from", type: "address", internalType: "address" },
        { name: "to", type: "address", internalType: "address" },
        { name: "amount", type: "uint256", internalType: "uint256" },
      ],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "transferOwnership",
      inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
      outputs: [],
      stateMutability: "payable",
    },
    {
      type: "function",
      name: "withdraw",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "event",
      name: "Approval",
      inputs: [
        {
          name: "owner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "spender",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "AttentionTokenCreated",
      inputs: [
        {
          name: "name",
          type: "string",
          indexed: false,
          internalType: "string",
        },
        {
          name: "symbol",
          type: "string",
          indexed: false,
          internalType: "string",
        },
        {
          name: "admin",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "adminFee",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "initialTokenSupply",
          type: "uint96",
          indexed: false,
          internalType: "uint96",
        },
        {
          name: "initialSupplyOwner",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "payToken",
          type: "address",
          indexed: false,
          internalType: "contract IERC20",
        },
        {
          name: "bondingCurve",
          type: "address",
          indexed: false,
          internalType: "contract IBondingCurve",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "BurnNFT",
      inputs: [
        {
          name: "to",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "LiquidityCreated",
      inputs: [],
      anonymous: false,
    },
    {
      type: "event",
      name: "MintNFT",
      inputs: [
        {
          name: "to",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "OwnershipHandoverCanceled",
      inputs: [
        {
          name: "pendingOwner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "OwnershipHandoverRequested",
      inputs: [
        {
          name: "pendingOwner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "OwnershipTransferred",
      inputs: [
        {
          name: "oldOwner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "newOwner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "SkipNFTSet",
      inputs: [
        {
          name: "owner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "status",
          type: "bool",
          indexed: false,
          internalType: "bool",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "Transfer",
      inputs: [
        {
          name: "from",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "to",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "error",
      name: "AddressEmptyCode",
      inputs: [{ name: "target", type: "address", internalType: "address" }],
    },
    {
      type: "error",
      name: "AddressInsufficientBalance",
      inputs: [{ name: "account", type: "address", internalType: "address" }],
    },
    { type: "error", name: "AlreadyInitialized", inputs: [] },
    {
      type: "error",
      name: "ApprovalCallerNotOwnerNorApproved",
      inputs: [],
    },
    {
      type: "error",
      name: "AttentionToken__MaxFeeExceeded",
      inputs: [
        { name: "fee", type: "uint256", internalType: "uint256" },
        { name: "maxFee", type: "uint256", internalType: "uint256" },
      ],
    },
    {
      type: "error",
      name: "AttentionToken__MaxPaymentExceeded",
      inputs: [
        { name: "price", type: "uint256", internalType: "uint256" },
        { name: "maxPayment", type: "uint256", internalType: "uint256" },
      ],
    },
    { type: "error", name: "DNAlreadyInitialized", inputs: [] },
    { type: "error", name: "DNNotInitialized", inputs: [] },
    { type: "error", name: "FailedInnerCall", inputs: [] },
    { type: "error", name: "FnSelectorNotRecognized", inputs: [] },
    { type: "error", name: "InsufficientAllowance", inputs: [] },
    { type: "error", name: "InsufficientBalance", inputs: [] },
    { type: "error", name: "InvalidUnit", inputs: [] },
    { type: "error", name: "LinkMirrorContractFailed", inputs: [] },
    { type: "error", name: "MirrorAddressIsZero", inputs: [] },
    { type: "error", name: "NewOwnerIsZeroAddress", inputs: [] },
    { type: "error", name: "NoHandoverRequest", inputs: [] },
    {
      type: "error",
      name: "SafeERC20FailedOperation",
      inputs: [{ name: "token", type: "address", internalType: "address" }],
    },
    { type: "error", name: "SenderNotMirror", inputs: [] },
    { type: "error", name: "TokenDoesNotExist", inputs: [] },
    { type: "error", name: "TotalSupplyOverflow", inputs: [] },
    {
      type: "error",
      name: "TransferCallerNotOwnerNorApproved",
      inputs: [],
    },
    { type: "error", name: "TransferFromIncorrectOwner", inputs: [] },
    { type: "error", name: "TransferToZeroAddress", inputs: [] },
    { type: "error", name: "Unauthorized", inputs: [] },
  ],
};
