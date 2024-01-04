import checkAccessToken from "./validateToken";
import checkRefreshToken from "./CheckRefreshToken";
import RefreshToken from "./RefreshToken";

async function checkRefreshAndAccess() {
    const isRefreshTokenValid = await checkRefreshToken();
    if (isRefreshTokenValid){
        const isAccessTokenValid = await checkAccessToken();
        if (!isAccessTokenValid){
            RefreshToken();
            console.log("token refreshed");
        }
        return true
    }
    console.log("Unauthorized");
    return false;
}

export default checkRefreshAndAccess;