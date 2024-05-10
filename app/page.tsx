import DeployNewAtt from "@/components/deploy-new-att";
import MintNFT from "@/components/mint-nft";
import WalletConnectBtn from "@/components/wallet-connect-btn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <WalletConnectBtn />

      <div className="flex gap-3">
        <div>
          <DeployNewAtt />
        </div>
        <div>
          <MintNFT />
        </div>
      </div>
    </main>
  );
}
