import { FC } from "react";
import { useParams } from "react-router-dom";

const UserProfilePage: FC = () => {
    const { userId } = useParams<{ userId: string }>();

    return <>{userId}</>;
};

export default UserProfilePage;
