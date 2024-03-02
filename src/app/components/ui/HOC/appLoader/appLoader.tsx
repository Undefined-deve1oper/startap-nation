import { useEffect } from "react";
// import Loader from "../../../common/Loader"

const AppLoader = ({ children }: any) => {
    // const dispatch = useAppDispatch();

    useEffect(() => {
        console.log("Hello");
    }, []);

    if (true) return <h1>Loading...</h1>;

    return children;
};

export default AppLoader;
