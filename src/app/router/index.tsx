import React from "react";
import { Navigate } from "react-router-dom";
import { UserBreadcrumb } from "../components/common/Breadcrumbs";
import ProtectedRoute from "../components/common/ProtectedRoute";

const LoginWrapper = React.lazy(() => import("../layouts/login"));
const Home = React.lazy(() => import("../layouts/home"));
const Users = React.lazy(() => import("../layouts/users"));

const SignInPage = React.lazy(() => import("../components/pages/SignInPage"));
const SignUpPage = React.lazy(() => import("../components/pages/SignUpPage"));
const UserEditPage = React.lazy(
    () => import("../components/pages/UserEditPage")
);
const UserProfilePage = React.lazy(
    () => import("../components/pages/UserProfilePage")
);
const CreateJob = React.lazy(
    () => import("../components/pages/UserProfilePage")
);

export type RoutesLinksType = {
    id: number;
    item: string;
    path: string;
    icon?: string;
};

export type RoutesNavType = {
    path: string;
    element: string;
    submenu?: RoutesNavType[];
};

const routes = [
    {
        path: "/job-openings",
        breadcrumb: "Главная",
        element: <Home />,
        children: [
            {
                path: "/create",
                element: (
                    <ProtectedRoute>
                        <CreateJob />
                    </ProtectedRoute>
                ),
            },
        ],
    },
    {
        path: "login",
        element: <LoginWrapper />,
        children: [
            { path: "", element: <Navigate to="/login/signin" /> },
            {
                path: "signup",
                breadcrumb: "Регистрация",
                element: <SignUpPage />,
            },
            { path: "signin", breadcrumb: "Вход", element: <SignInPage /> },
        ],
    },
    {
        path: "users",
        breadcrumb: "Пользователи",
        element: <Users />,
        children: [
            {
                path: ":userId",
                breadcrumb: UserBreadcrumb,
                element: (
                    <ProtectedRoute>
                        <UserProfilePage />
                    </ProtectedRoute>
                ),
            },
            {
                path: ":userId/edit",
                breadcrumb: "Редактировать",
                element: (
                    <ProtectedRoute>
                        <UserEditPage />
                    </ProtectedRoute>
                ),
            },
        ],
    },
    {
        path: "*",
        breadcrumb: "Не найдено",
        element: <Navigate to="/job-openings" />,
    },
];

export default routes;
