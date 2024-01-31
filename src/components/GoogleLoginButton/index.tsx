import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function GoogleLoginButton() {
  return (
    <GoogleLogin
      onSuccess={(response) => {
        const decodedResponse = jwtDecode(response.credential!);
        console.log(decodedResponse);
      }}
      onError={() => {
        console.log("Login Failed");
        console.log(import.meta.env.VITE_GOOGLE_CLIENTID)
      }}
    />
  );
}

export default GoogleLoginButton;
