

const Footer = () => {
    return (
        <div className="bg-[#244D3F] px-10 py-8">
            <div className="text-center space-y-4">
                <img className="inline-flex mt-10" src="/src/assets/logo-xl.png" alt="" />
                 <p className="text-[#FAFAFA]">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                 <h4 className="text-[#FAFAFA] font-medium">Social Links</h4>
                 <div className="flex justify-center gap-3">
                    <a href=""><img src="/src/assets/instagram.png" alt="" /></a>
                    <a href=""><img src="/src/assets/facebook.png" alt="" /></a>
                    <a href=""><img src="/src/assets/twitter.png" alt="" /></a>

                 </div>
            </div>
             <div className="divider text-[#1A8862]"></div>
            <div className="flex justify-around">
                <div className="text-[#FAFAFA] text-sm">
                    <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
                </div>
                <div className="text-[#FAFAFA] flex gap-8 text-sm">
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Service</a>
                    <a href="">Cookies</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;