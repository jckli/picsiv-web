import type { NextPage } from "next";
import { GitHubButton } from "../components/GitHubButton";
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <>
            <div className="w-full h-[100vh] flex flex-col items-center justify-center text-white text-3xl font-semibold text-center">
                <h1>in development - picsiv web</h1>
                <div className="mb-6">
                    <div className="md:inline-block md:mr-4">
                        <Link href="/terms">
                            <a className="text-[#494e53] transition-all ease-in-out duration-300 hover:text-[#a385b3]">terms of service</a>
                        </Link>
                    </div>
                    <div className="md:inline-block">
                        <Link href="/privacy">
                            <a className="text-[#494e53] transition-all ease-in-out duration-300 hover:text-[#a385b3]">privacy policy</a>
                        </Link>
                    </div>
                </div>
                <GitHubButton />
            </div>
        </>
    );
};

export default Home;
