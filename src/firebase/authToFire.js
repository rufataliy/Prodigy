import { auth0Client } from "../auth0/auth0"
import { firebaseClient } from "../firebase/firebase"

const auth0ToFirebase = async() => {
    const authToken = await auth0Client.handleCallback();
    return authToken;

}

const firebaseCustomToken = async function setFirebaseCustomToken(tokenFromAuth) {
    const firebaseTokenRequest = await fetch('https://localhost:3001/firebase', {
        headers: {
            'Authorization': `Bearer ${tokenFromAuth}`,
        },
    }).then(token => token.json());
    const token = await firebaseTokenRequest.firebaseToken;
    await firebaseClient.setToken(token);
}

export const authTokenFirebAuth0 = () => auth0ToFirebase().then(token => {
    firebaseCustomToken(token)
})