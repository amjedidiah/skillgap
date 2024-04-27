import { Magic as MagicSDK } from "@magic-sdk/react-native-expo";

const magic = new MagicSDK(
  process.env.EXPO_PUBLIC_MAGIC_PUBLISHABLE_API_KEY as string,
  {
    // testMode: isDev,
    // network: {
    //   rpcUrl:
    //     "https://eth-mainnet.g.alchemy.com/v2/fYFybLQFR9Zr2GCRcgALmAktStFKr0i0",
    //   chainId: 1,
    // },
    network: "mainnet",
  }
);

export default magic;
