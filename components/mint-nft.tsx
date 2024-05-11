"use client";
import { readContract, writeContract } from "wagmi/actions";
import { useAccount, useConfig } from "wagmi";
import { formatEther } from "viem";
import { AttToken } from "@/lib/contract/att-token";
import { useCallback } from "react";
import { Button } from "./ui/button";
import { AttTokenMirror } from "@/lib/contract/att-token-mirror";
import { PayToken } from "@/lib/contract/paytoken";

export default function MintNFT() {
  const { address } = useAccount();
  const config = useConfig();
  // const mintToken = useCallback(async () => {
  //   await writeContract(config, {
  //     address: AttToken.address as `0x${string}`,
  //     abi: AttToken.abi,
  //     functionName: "mintToken",
  //     args: [address, 6 * 10 ** 6 * 10 ** 18],
  //   });
  // }, [config, address]);

  const getMintNFTPrice = useCallback(async () => {
    const data = (await readContract(config, {
      address: AttToken.address as `0x${string}`,
      abi: AttToken.abi,
      functionName: "getMintNFTPrice",
      args: [1],
    })) as bigint;
    console.log("mint nft price", formatEther(data));
    return data;
  }, [config]);

  const mintAttNFT = useCallback(async () => {
    const payTokenAllowance = (await readContract(config, {
      address: PayToken.address as `0x${string}`,
      abi: PayToken.abi,
      functionName: "balanceOf",
      args: [address],
    })) as bigint;
    console.log({ payTokenAllowance });

    const mintPrice = await getMintNFTPrice();
    console.log({ mintPrice });
    if (payTokenAllowance < mintPrice) {
      alert("insufficient balance");
    }

    const remainedAllowance = (await readContract(config, {
      address: PayToken.address as `0x${string}`,
      abi: PayToken.abi,
      functionName: "allowance",
      args: [address, AttToken.address as `0x${string}`],
    })) as bigint;
    console.log({ remainedAllowance });

    if (remainedAllowance < mintPrice) {
      await writeContract(config, {
        address: PayToken.address as `0x${string}`,
        abi: PayToken.abi,
        functionName: "approve",
        args: [AttToken.address as `0x${string}`, payTokenAllowance],
      });
    }

    await writeContract(config, {
      address: AttToken.address as `0x${string}`,
      abi: AttToken.abi,
      functionName: "mintNFT",
      args: [1, mintPrice],
    });
  }, [config, address, getMintNFTPrice]);

  const burnAttNFT = useCallback(async () => {
    await writeContract(config, {
      address: AttToken.address as `0x${string}`,
      abi: AttToken.abi,
      functionName: "burnNFT",
      args: [1],
    });
  }, [config]);

  const printTokenAndNFT = useCallback(async () => {
    const payToken = await readContract(config, {
      address: AttToken.address as `0x${string}`,
      abi: AttToken.abi,
      functionName: "_payToken",
    });
    console.log("payToken", payToken);
    const token = (await readContract(config, {
      address: AttToken.address as `0x${string}`,
      abi: AttToken.abi,
      functionName: "balanceOf",
      args: [address],
    })) as bigint;
    console.log("token", formatEther(token));
    const nft = await readContract(config, {
      address: AttTokenMirror.address as `0x${string}`,
      abi: AttTokenMirror.abi,
      functionName: "balanceOf",
      args: [address],
    });
    console.log("nft", nft);
  }, [config, address]);

  const printBoundingCurve = useCallback(async () => {
    const data = await readContract(config, {
      address: AttToken.address as `0x${string}`,
      abi: AttToken.abi,
      functionName: "BONDING_CURVE",
    });
    console.log("bounding curve", data);
  }, [config]);

  const printMirror = useCallback(async () => {
    const data = await readContract(config, {
      address: AttToken.address as `0x${string}`,
      abi: AttToken.abi,
      functionName: "mirrorERC721",
    });
    console.log("mirror contract", data);
  }, [config]);

  return (
    <div className="flex flex-col">
      {/* <Button onClick={mintToken}>mint token</Button> */}

      <Button onClick={mintAttNFT}>mintNFT</Button>
      <Button onClick={burnAttNFT}>burnNFT</Button>
      <Button onClick={printTokenAndNFT}>printTokenAndNft</Button>
      <Button onClick={printMirror}>printMirror </Button>
      <Button onClick={printBoundingCurve}>printBoundingCurve </Button>
      <Button onClick={getMintNFTPrice}>getMintNFTPrice</Button>
    </div>
  );
}
//1155022050000000001155022
//399999999999999966445568
