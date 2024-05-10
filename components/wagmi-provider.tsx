"use client";

import * as React from "react";
import {
  RainbowKitProvider,
  getDefaultWallets,
  getDefaultConfig,
  darkTheme,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  baseSepolia,
  degen,
} from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import { projectId } from "@/lib/wagmi-client";
import { WagmiProvider } from "wagmi";

const { wallets } = getDefaultWallets();

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
// Setup queryClient
const queryClient = new QueryClient();

if (!projectId) throw new Error("Project ID is not defined");

const config = getDefaultConfig({
  appName: "Goudan",
  projectId: projectId,
  wallets: [
    ...wallets,
    {
      groupName: "Other",
      wallets: [argentWallet, trustWallet, ledgerWallet],
    },
  ],
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    baseSepolia,
    degen,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  ssr: true,
});

export default function WagmiCtx({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={{
            lightMode: lightTheme(),
            darkMode: darkTheme(),
          }}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
