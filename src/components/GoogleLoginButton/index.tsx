import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import { useToast } from "../../context/ToastContext";
interface IGoogleResponse {
  iss: string
  azp: string
  aud: string
  sub: string
  email: string
  email_verified: boolean
  nbf: number
  name: string
  picture: string
  given_name: string
  family_name: string
  locale: string
  iat: number
  exp: number
  jti: string
}


function GoogleLoginButton() {
  const {googleLogin} = useContext(UserContext)
  const { displayToast } = useToast();

  return (
    <GoogleLogin
      onSuccess={async (response) => {
        const decodedResponse: IGoogleResponse = jwtDecode(response.credential!);
        const data = {
          fullName: decodedResponse.name,
          email: decodedResponse.email,
          password: decodedResponse.sub,
          image: decodedResponse.picture,
          isGoogleAccount: true
        }
        await googleLogin(data)
      }}
      onError={() => {
        displayToast({
          message: "",
          severity: "error",
          title: "Não foi possível efetuar o login",
          variant: "filled",
          isLoading: false,
        });
      }}
    />
  );
}

export default GoogleLoginButton;
