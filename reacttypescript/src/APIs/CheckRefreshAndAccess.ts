import exp from "constants";
import checkAccessToken from "./CheckAccessToken";
import checkRefreshToken from "./CheckRefreshToken";
import RefreshToken from "./RefreshToken";

async function checkRefreshAndAccess() {
    const isRefreshTokenValid = await checkRefreshToken();
    if (isRefreshTokenValid){
        const isAccessTokenValid = await checkAccessToken();
        if (!isAccessTokenValid){
            RefreshToken();
        }
        return true
    }
    return false;
}

export default checkRefreshAndAccess;