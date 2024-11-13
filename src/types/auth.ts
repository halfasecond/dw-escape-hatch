export interface AuthProps {
    loggedIn: string | undefined;
    handleSignIn: () => void;
    handleSignOut: () => void;
    isDapper: boolean;
}

export interface WalletDetails {
    dapperWallet?: string,
    dapperWalletInput: string,
    authVersion?: string;
    cosigner?: string;
}