import { AddABUniLP } from "@/components/add-ab-lp";
import { AddAPUniLP } from "@/components/add-ap-lp";
import { AddUniLP } from "@/components/add-uniswap-lp";
import DeployNewAtt from "@/components/deploy-new-att";
import MintNFT from "@/components/mint-nft";
import WalletConnectBtn from "@/components/wallet-connect-btn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex gap-3">
        <div>
          <DeployNewAtt />
        </div>
        <div>
          <MintNFT />
        </div>
        <div>
          <AddUniLP />
          <AddAPUniLP />
          <AddABUniLP />
        </div>
      </div>
    </main>
  );
}
