"use client";

import { Button } from "@/components/ui/button";
import { TokenA } from "@/lib/contract/uni/token-a";
import { TokenB } from "@/lib/contract/uni/token-b";
import { UniERC20 } from "@/lib/contract/uni/uni-erc20";
import { use, useCallback } from "react";
import { readContract, writeContract } from "wagmi/actions";
import { useAccount, useConfig } from "wagmi";
import { erc20Abi, formatEther, parseEther } from "viem";
import { AttToken } from "@/lib/contract/att-token";

export function AddABUniLP() {
  const { address } = useAccount();
  const config = useConfig();

  const addUniLP = useCallback(async () => {
    await writeContract(config, {
      address: TokenA.address as `0x${string}`,
      abi: TokenA.abi,
      functionName: "approve",
      args: [AttToken.address as `0x${string}`, 1e64],
    });
    await writeContract(config, {
      address: TokenB.address as `0x${string}`,
      abi: TokenB.abi,
      functionName: "approve",
      args: [AttToken.address as `0x${string}`, 1e64],
    });

    await writeContract(config, {
      address: AttToken.address as `0x${string}`,
      abi: AttToken.abi,
      functionName: "addLiquidity",
      args: [TokenA.address, TokenB.address, 10 * 1e18, 30 * 1e18],
    });
  }, [config]);

  return (
    <div className="flex gap-3">
      <Button onClick={addUniLP}>AddABUniLP</Button>
    </div>
  );
}
