import axios from "axios";

const instance = axios.create({
    baseURL:"https://taskflow-api-cyan.vercel.app"
})
const useInstance = () => {
    return instance
};

export default useInstance;