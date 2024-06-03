"use client";

import { Button } from "@/components/ui/button";
import { TokenA } from "@/lib/contract/uni/token-a";
import { TokenB } from "@/lib/contract/uni/token-b";
import { UniERC20 } from "@/lib/contract/uni/uni-erc20";
import { use, useCallback } from "react";
import { readContract, writeContract } from "wagmi/actions";
import { useAccount, useConfig } from "wagmi";
import { erc20Abi, formatEther, parseEther } from "viem";
import { AddLiquidity } from "@/lib/contract/uni/add-liquidity";

export default function UniERC20LP() {
  return (
    <div className="flex gap-3">
      <AddUniLP />
    </div>
  );
}

function AddUniLP() {
  const { address } = useAccount();
  const config = useConfig();

  const addUniLP = useCallback(async () => {
    await writeContract(config, {
      address: TokenA.address as `0x${string}`,
      abi: TokenA.abi,
      functionName: "approve",
      args: [AddLiquidity.address as `0x${string}`, 1e64],
    });
    await writeContract(config, {
      address: TokenB.address as `0x${string}`,
      abi: TokenB.abi,
      functionName: "approve",
      args: [AddLiquidity.address as `0x${string}`, 1e64],
    });

    await writeContract(config, {
      address: AddLiquidity.address as `0x${string}`,
      abi: AddLiquidity.abi,
      functionName: "addLiquidity",
      args: [TokenA.address, TokenB.address, 10 * 1e18, 30 * 1e18],
    });
  }, [config]);

  return (
    <div className="flex gap-3">
      <Button onClick={addUniLP}>Add Uni LP</Button>
    </div>
  );
}

// 0xF9c71902F4b487b8d900a33E9d88B0D9e921F448
// 0xF9c71902F4b487b8d900a33E9d88B0D9e921F448
// 0xF9c71902F4b487b8d900a33E9d88B0D9e921F448
