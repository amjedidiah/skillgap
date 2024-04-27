import { Magic as MagicSDK } from "@magic-sdk/react-native-expo";
import { isDev } from "@skillgap/shared/constants";

const magic = new MagicSDK(
  process.env.EXPO_PUBLIC_MAGIC_PUBLISHABLE_API_KEY as string,
  {
    testMode: isDev,
    network: {
      rpcUrl:
        "https://eth-mainnet.g.alchemy.com/v2/fYFybLQFR9Zr2GCRcgALmAktStFKr0i0",
      chainId: 1,
    },
  }
);

export default magic;
