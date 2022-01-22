import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
import { ToastContainer } from "react-toastify";
import { ProfessionProvider } from "./hooks/useProfession";
import { QualityProvider } from "../app/hooks/useQualities";
import AuthProvider from "./hooks/useAuth";
import LoginProvider from "./hooks/useLogin";

function App() {
    return (
        <div>
            <AuthProvider>
                <LoginProvider>
                    <NavBar />

                    <QualityProvider>
                        <ProfessionProvider>
                            <Switch>
                                <Route
                                    path="/users/:userId?/:edit?"
                                    component={Users}
                                />
                                <Route path="/login/:type?" component={Login} />
                                <Route path="/" exact component={Main} />
                                <Redirect to="/" />
                            </Switch>
                        </ProfessionProvider>
                    </QualityProvider>
                </LoginProvider>
            </AuthProvider>
            <ToastContainer />
        </div>
    );
}

export default App;
