import { FC } from "react";
import { Outlet } from "react-router-dom";

const Login: FC = () => {
    return (
        <main className="login-page">
            {/* <Breadcrumbs /> */}
            <div className="login-page__container _container">
                <Outlet />
            </div>
        </main>
    );
};

export default Login;
