import type { NextPage } from "next";
import { GitHubButton } from "../components/GitHubButton";

const Home: NextPage = () => {
    return (
        <>
            <div className="w-full h-[100vh] flex flex-col items-center justify-center text-white text-3xl font-semibold text-center">
                <h1>in development - picsiv web</h1>
                <a className="text-[#494e53] transition-all ease-in-out duration-300 hover:text-[#a385b3] mb-6" href="/tos">terms of service</a>
                <GitHubButton />
            </div>
        </>
    );
};

export default Home;
