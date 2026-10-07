import axios from "axios";
import useAuth from "./useAuth";

const useAxiosSecure = () => {
    const { user } = useAuth();

    const instance = axios.create({
        baseURL: "https://taskflow-api-cyan.vercel.app"
    });

    instance.interceptors.request.use((config) => {
        if (user) {
            config.headers.authorization = `Bearer ${user.accessToken}`;
        }

        return config;
    });

    return instance;
};

export default useAxiosSecure;