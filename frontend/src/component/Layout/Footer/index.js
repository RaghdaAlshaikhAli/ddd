import React from "react";
import "./style.css";
import check from '../../../assets/images/check.png'
import accessibility from '../../../assets/images/accessibility.png'
import facebook from '../../../assets/images/facebook.png'
import linkedin from '../../../assets/images/linkedin.png'
import pinterest from "../../../assets/images/pinterest.png"
import instagram from '../../../assets/images/instagram.png'
import language from '../../../assets/images/language.png'
import coin from '../../../assets/images/coin.png'


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="top">
                    <div className="item">
                        <h2>Categories</h2>
                        <span>Graphics & Design</span>
                        <span>Digital Marketing</span>
                        <span>Writing & Translation</span>
                        <span>Video & Animation</span>
                        <span>Music & Audio</span>
                        <span>Programming & Tech</span>
                        <span>Data</span>
                        <span>Business</span>
                        <span>Lifestyle</span>
                        <span>Photography</span>
                        <span>Sitemap</span>
                    </div>
                    <div className="item">
                        <h2>About</h2>
                        <span>Press & News</span>
                        <span>Partnerships</span>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Intellectual Property Claims</span>
                        <span>Investor Relations</span>
                        <span>Contact Sales</span>
                    </div>
                    <div className="item">
                        <h2>Support</h2>
                        <span>Help & Support</span>
                        <span>Trust & Safety</span>
                        <span>Selling on Heritage</span>
                        <span>Buying on Heritage</span>
                    </div>
                    <div className="item">
                        <h2>Community</h2>
                        <span>Customer Success Stories</span>
                        <span>Community hub</span>
                        <span>Forum</span>
                        <span>Events</span>
                        <span>Blog</span>
                        <span>Influencers</span>
                        <span>Affiliates</span>
                        <span>Podcast</span>
                        <span>Invite a Friend</span>
                        <span>Become a Seller</span>
                        <span>Community Standards</span>
                    </div>
                    <div className="item">
                        <h2>More From Heritage</h2>
                        <span>Heritage Business</span>
                        <span>Heritage Pro</span>
                        <span>Heritage Logo Maker</span>
                        <span>Heritage Guides</span>
                        <span>Get Inspired</span>
                        <span>Heritage Select</span>
                        <span>ClearVoice</span>
                        <span>Heritage Workspace</span>
                        <span>Learn</span>
                        <span>Working Not Working</span>
                    </div>
                </div>
                <hr />
                <div className="bottom">
                    <div className="left">
                        <h2>Heritage</h2>
                        <span>© Heritage International Ltd. 2023</span>
                    </div>
                    <div className="right">
                        <div className="social">
                            <img src={check} alt="" />
                            <img src={accessibility} alt=",mk" />
                            <img src={facebook} alt="nnnn" />
                            <img src={linkedin} alt="lll" />
                            <img src={pinterest} alt="l" />
                            <img src={instagram} alt="ppp" />
                        </div>
                        <div className="link">
                            <img src={language} alt="" />
                            <span>English</span>
                        </div>
                        <div className="link">
                            <img src={coin} alt="" />
                            <span>USD</span>
                        </div>
                        <img src={accessibility} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;