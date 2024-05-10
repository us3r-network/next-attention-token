"use client";

import { Button } from "@/components/ui/button";
/* eslint-disable @next/next/no-img-element */
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function WalletConnectBtn() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            className="flex items-center border pl-2 py-1 rounded-md gap-2"
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    variant={null}
                    className="w-full"
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button
                    variant={"destructive"}
                    onClick={openChainModal}
                    type="button"
                  >
                    Wrong network
                  </Button>
                );
              }

              return (
                <>
                  <Button
                    className="flex-grow p-0 text-start justify-start"
                    variant={null}
                    onClick={openAccountModal}
                    type="button"
                  >
                    {account.displayName}
                  </Button>
                  <Button
                    className="w-[120px]  overflow-hidden pr-2 justify-end"
                    onClick={openChainModal}
                    variant={null}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 6,
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            className="w-3 h-3 min-w-3"
                          />
                        )}
                      </div>
                    )}
                    <span>{chain.name}</span>
                  </Button>
                </>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
