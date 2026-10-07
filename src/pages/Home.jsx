import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Hero from "../components/Hero";

const Home = () => {
    const {email} = useContext(AuthContext)
    console.log(email)
    return (
     <div>
        <Hero />
     </div>
    );
};

export default Home;