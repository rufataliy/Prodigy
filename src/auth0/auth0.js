import auth0 from "auth0-js"


let _auth0Client = null;
let _idToken = null;
let _profile = null;
let _result = null;

class Auth0Client {
    constructor() {
        _auth0Client = new auth0.WebAuth({
            domain: 'prodigy-gate.auth0.com',
            audience: 'https://prodigy-gate.auth0.com/userinfo',
            clientID: 'miketN2zFghcI3DiW2pkdBOYmA3uLslb',
            redirectUri: 'https://localhost:3001',
            responseType: 'token id_token',
            scope: 'openid email profile'
        });
    }
    getResult() {
        return _result
    }
    getIdToken() {
        return _idToken;
    }

    getProfile() {
        return _profile;
    }

    handleCallback() {
        return new Promise((resolve, reject) => {
            _auth0Client.parseHash(async(err, authResult) => {
                window.location.hash = '';
                if (err) return reject(err);

                if (!authResult || !authResult.idToken) {
                    // not an authentication request
                    return resolve(false);
                }
                _idToken = authResult.idToken;
                _profile = authResult.idTokenPayload;
                _result = authResult
                return resolve(_idToken);

            });
        });

    }
    signIn() {
        _auth0Client.authorize();
    }

    signOut() {
        _auth0Client.logout({
            returnTo: "https://localhost:3001",
            clientID: 'miketN2zFghcI3DiW2pkdBOYmA3uLslb',
            federated: true
        })
        _idToken = null;
        _profile = null;
    }
}

export const auth0Client = new Auth0Client();