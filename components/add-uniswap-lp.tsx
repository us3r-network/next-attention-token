"use client";

import { UniERC20 } from "@/lib/contract/uni/uni-erc20";
import { use, useCallback } from "react";
import { readContract, writeContract } from "wagmi/actions";
import { useAccount, useConfig } from "wagmi";
import { erc20Abi, formatEther, parseEther } from "viem";
import { AttToken } from "@/lib/contract/att-token";
import { Button } from "./ui/button";
import { AttTokenMirror } from "@/lib/contract/att-token-mirror";
import { PayToken } from "@/lib/contract/paytoken";

export function AddUniLP() {
  const { address } = useAccount();
  const config = useConfig();

  const addUniLP = useCallback(async () => {
    await writeContract(config, {
      address: PayToken.address as `0x${string}`,
      abi: PayToken.abi,
      functionName: "approve",
      args: [AttToken.address as `0x${string}`, 1e64],
    });
    await writeContract(config, {
      address: AttToken.address as `0x${string}`,
      abi: AttToken.abi,
      functionName: "approve",
      args: [AttToken.address as `0x${string}`, 1e64],
    });

    await writeContract(config, {
      address: AttToken.address as `0x${string}`,
      abi: AttToken.abi,
      functionName: "addUniswapLiquidity",
      args: [10 * 1e18, 30 * 1e18],
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
