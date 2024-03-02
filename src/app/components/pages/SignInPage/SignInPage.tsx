import { FC } from "react";
import { NavLink } from "react-router-dom";

const SignInPage: FC = () => {
    return (
        <div className="login">
            <div className="login__body">
                <h1 className="login__title login-title">Авторизация</h1>
                <h3 className="login__subtitle">
                    Авторизируйтесь, чтобы начать публиковать свои объявления
                </h3>
                <div className="login-offer">
                    Еще нет аккаунта?{" "}
                    <NavLink to={`/login/signup`}>Создайте акканут</NavLink>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
