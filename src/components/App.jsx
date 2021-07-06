import React, { useEffect } from "react";
import SideNav from "./Nav.jsx"
import TopNav from "./TopNav.jsx"
import { authTokenFirebAuth0 } from "../firebase/authToFire"
import useGlobalState from "../store/useGlobalState"
import Context from "../store/context"
import { firebaseClient } from "../firebase/firebase"
import { LogoHome } from "./Logo.jsx"
const App = () => {
    console.log("app rerendered");
    const store = useGlobalState();
    const { appState, actions } = store
    useEffect(
        () => {
            if (!appState.loggedIn) {
                authTokenFirebAuth0().then(() => {
                    firebaseClient.setAuthStateListener(() => {
                        if (firebaseClient.getCurrentUser()) {
                            const user = firebaseClient.getCurrentUser()
                            console.log(user);
                            actions({
                                type: "setAppState",
                                payload: { ...appState, loggedIn: true, uid: user.uid }
                            })
                        }
                    })
                })
            }

        }, [appState.loggedIn]
    )
    return (
        <div>
            <Context.Provider value={store}>
                <TopNav />
                {appState.loggedIn ? <SideNav /> : <LogoHome />}
            </Context.Provider>
        </div>
    )
}

export default App