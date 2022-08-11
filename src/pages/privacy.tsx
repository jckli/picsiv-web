import type { NextPage } from "next";
import { GitHubButton } from "../components/GitHubButton";
import Link from "next/link";

const Privacy: NextPage = () => {
    return (
        <>
            <div className="w-full flex flex-col items-center justify-center text-white text-3xl font-semibold">
                <div className="my-20 px-20 max-w-[1200px]">
                    <div className="text-center">
                        <div className="mb-6">
                            <Link href="/">
                                <a className="text-[#494e53] transition-all ease-in-out duration-300 hover:text-[#a385b3]">Go Home</a>
                            </Link>
                        </div>
                        <h1><b>Privacy Policy</b></h1>
                    </div>
                    <br />
                    <div>
                        <h2 className="mb-4"><b>Introduction</b></h2>
                        <p className="font-normal text-lg mb-4">
                            Picsiv was developed as an open source application. This service is provided as is, and by the Picsiv team at no cost.
                            This page is used to inform users regarding our policies with the collection, use, and disclosure of Personal Information.
                        </p>
                    </div>
                    <div>
                        <h2 className="mb-4"><b>Information Collection and Use</b></h2>
                        <p className="font-normal text-lg mb-4">
                            We do not store any information or data given by users nor share this information with third parties.
                            None of the data used by Picsiv is stored on our servers. All information used in commands and general messages to the bot are used
                            soley for providing the images and allowing the completion of the bot&apos;s purpose.
                        </p>
                        <p className="font-normal text-lg mb-4">
                            Although you can rest assured that your data is not being stored, you can easily remove Picsiv from your server at any time or stop using it.
                        </p>
                    </div>
                    <div>
                        <h2 className="mb-4"><b>Contact Us</b></h2>
                        <p className="font-normal text-lg mb-4">
                            If you have any questions about this Privacy Policy, please contact us at: <a className="text-[#494e53] transition-all ease-in-out duration-300 hover:text-[#a385b3] mb-6" href="mailto:jack@jackli.dev">
                                jack@jackli.dev
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Privacy;
