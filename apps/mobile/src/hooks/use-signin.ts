import { RPCError, RPCErrorCode } from "@magic-sdk/react-native-expo";
import { useCallback } from "react";

import { apiSignIn } from "../lib/api";
import magic from "../lib/magic";

type LoginData = {
  token: string;
  user_id: string;
};

const handleMagicError = (error: unknown) => {
  console.error("Error logging in with Magic: ", error);
  if (error instanceof RPCError)
    switch (error.code) {
      case RPCErrorCode.MagicLinkFailedVerification:
      case RPCErrorCode.MagicLinkExpired:
      case RPCErrorCode.MagicLinkRateLimited:
      case RPCErrorCode.UserAlreadyLoggedIn:
        throw new Error(error.message);
    }

  throw new Error("Error logging in with Magic. Please try again.");
};

export default function useSignin() {
  const handleLogin = useCallback(async (email: string) => {
    if (!magic) return;

    try {
      const didToken = await magic.auth.loginWithEmailOTP({ email });

      const {
        data: { data, message },
      } = await apiSignIn(didToken);
      if (!data) throw new Error(message);

      return data as LoginData;
    } catch (error) {
      handleMagicError(error);
    }
  }, []);

  return handleLogin;
}
