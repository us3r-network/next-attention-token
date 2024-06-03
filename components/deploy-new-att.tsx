"use client";

import { useAccount, useConfig } from "wagmi";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useCallback } from "react";
import { writeContract } from "wagmi/actions";
import { AttentionFactory } from "@/lib/contract/attention-factory";

const EtherUnit = 10 ** 18;

export default function DeployNewAtt() {
  const { address } = useAccount();
  const config = useConfig();
  const createNewAttToken = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // const data = {
      //   name: e.currentTarget["att-token-name"].value,
      //   symbol: e.currentTarget["att-token-symbol"].value,
      //   basePrice: e.currentTarget["att-token-base-price"].value,
      //   linearPriceSlope: 0,
      //   inflectionPrice: 0,
      //   inflectionPoint: 0,
      //   initialTokenSupply: 0,
      //   initialSupplyOwner: address,
      //   payToken: e.currentTarget["att-token-pay-token"].value,
      //   tokenAdmin: e.currentTarget["att-token-admin"].value,
      //   adminFee: e.currentTarget["att-token-admin-fee"].value,
      // };
      // console.log(data);

      await writeContract(config, {
        address: AttentionFactory.address as `0x${string}`,
        abi: AttentionFactory.abi,
        functionName: "deploy",
        args: [
          {
            name: "ATT Token Third",
            symbol: "ATT3",
            basePrice: 1e3,
            linearPriceSlope: 1e2,
            inflectionPrice: 1e2 * 845,
            inflectionPoint: 200,
            initialTokenSupply: 1e5 * EtherUnit,
            initialSupplyOwner: address,
            payToken: "0x5ff79657987e282e7f343381e567F97ef45429a8",
            tokenAdmin: address,
            adminFee: 500,
          },
        ],
      });
    },
    [config, address]
  );
  return (
    <div>
      <form onSubmit={createNewAttToken}>
        {/* <Input placeholder="ATT token name" name="att-token-name" />
        <Input placeholder="ATT token symbol" name="att-token-symbol" />
        <Input placeholder="ATT token uri" name="att-token-uri" />
        <Input placeholder="ATT token admin addr" name="att-token-admin" />
        <Input
          placeholder="ATT token admin fee 500"
          name="att-token-admin-fee"
        />
        <Input placeholder="ATT token pay token" name="att-token-pay-token" />
        <Input placeholder="ATT token base price" name="att-token-base-price" /> */}
        <Button type="submit">Deploy New Attention Token</Button>
      </form>
    </div>
  );
}
