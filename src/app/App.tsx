import { FC } from "react";
import { withRedux, withRouter } from "./components/ui/HOC";
import "./scss/app.scss";

const App: FC = () => {
    return <div>dsfdfs</div>;
};

const AppWithStoreAndRoutes = withRedux(withRouter(App));
export default AppWithStoreAndRoutes;
