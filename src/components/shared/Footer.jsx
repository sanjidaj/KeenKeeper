import instagramImg from "../../assets/instagram.png"
import facebookImg from "../../assets/facebook.png"
import twitterImg from "../../assets/twitter.png"
import footerLogo from "../../assets/logo-xl.png"


const Footer = () => {
    return (
        <div className="bg-[#244D3F] px-6 md:px-10 py-8">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
                <img className="inline-flex mt-10 w-40 md:w-auto" src= {footerLogo} alt=""/>

                <p className="text-[#FAFAFA] text-sm md:text-base">Your personal shelf of meaningful connections. Browse, tend,
                    and nurture the relationships that matter most.
                </p>

                <h4 className="text-[#FAFAFA] font-medium"> Social Links</h4>

                <div className="flex justify-center gap-4">
                    <a href="">
                        <img className="w-8 h-8 md:w-auto md:h-auto" src={instagramImg} alt="" />
                    </a>

                    <a href="">
                        <img className="w-8 h-8 md:w-auto md:h-auto" src={facebookImg} alt=""/>
                    </a>

                    <a href="">
                        <img className="w-8 h-8 md:w-auto md:h-auto" src={twitterImg} alt=""/>
                    </a>
                </div>
            </div>

            <div className="divider text-[#1A8862]"></div>

            <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between gap-4 text-center">
                <p className="text-[#FAFAFA] text-sm">
                    &copy; 2026 KeenKeeper. All rights reserved.
                </p>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-[#FAFAFA]">
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Service</a>
                    <a href="">Cookies</a>
                </div>
            </div>
        </div>
);
};

export default Footer;