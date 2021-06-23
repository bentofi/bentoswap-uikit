import React from "react";
import { Login } from "../WalletModal";
interface Props {
    account?: string;
    login: Login;
    logout: () => void;
}
declare const UserBlock: React.FC<Props>;
export default UserBlock;
