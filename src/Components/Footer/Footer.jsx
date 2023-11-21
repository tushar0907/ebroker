import React from "react";
import eBroker from "@/assets/Logo_Color.png";
import { FiMail, FiPhone } from "react-icons/fi";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { ImPinterest2 } from "react-icons/im";
import playstore from "../../assets/playStore.png";
import appstore from "../../assets/appStore.png";
import Link from "next/link";
import { useSelector } from "react-redux";
import { settingsData } from "@/store/reducer/settingsSlice";
import { translate } from "@/utils";

import Image from "next/image";

const Footer = () => {
    const systemData = useSelector(settingsData);
    const webdata = systemData && systemData;
  
    return (
        <section id="footer">
            <div className="container">
                <div className="row py-5" id="footer_deatils">
                    <div className="subfooter">
                    <div className="">
                        <div id="footer_logo_section">
                            <Link href="/">
                                <Image
                                    loading="lazy"
                                    src={eBroker.src}
                                    alt="eBroker_logo"
                                    width={0}
                                    height={0}
                                    className="footer_logo"
                                />
                            </Link>
                            <div className="footer_contact_us">
                                <div>
                                    <FiMail size={25} />
                                </div>
                                <div className="footer_contactus_deatils">
                                    <span className="footer_span">{translate("email")}</span>
                                    <a href={`mailto:${webdata && webdata.company_email}`}>
                                        <span className="footer_span_value">{webdata && webdata.company_email}</span>
                                    </a>
                                </div>
                            </div>
                            <div className="footer_contact_us">
                                <div>
                                    <FiPhone size={25} />
                                </div>
                                <div className="footer_contactus_deatils">
                                    <span className="footer_span">{translate("contactOne")}</span>
                                    <a href={`tel:${webdata && webdata.company_tel1}`}>
                                        <span className="footer_span_value">{webdata && webdata.company_tel1}</span>
                                    </a>
                                </div>
                            </div>
                            <div className="footer_contact_us">
                                <div>
                                    <FiPhone size={25} />
                                </div>
                                <div className="footer_contactus_deatils">
                                    <span className="footer_span">{translate("contactTwo")}</span>
                                    <a href={`tel:${webdata && webdata.company_tel2}`}>
                                        <span className="footer_span_value">{webdata && webdata.company_tel2}</span>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h4> {translate("followUs")}</h4>
                                <div id="follow_us">
                                    {process.env.NEXT_PUBLIC_FACEBOOK_LINK ? (
                                        <a href={process.env.NEXT_PUBLIC_FACEBOOK_LINK} target="_blank">
                                            <CiFacebook size={28} />
                                        </a>
                                    ) : null}
                                    {process.env.NEXT_PUBLIC_INSTAGRAM_LINK ? (
                                        <a href={process.env.NEXT_PUBLIC_INSTAGRAM_LINK} target="_blank">
                                            <AiOutlineInstagram size={28} />
                                        </a>
                                    ) : null}
                                    {process.env.NEXT_PUBLIC_PINTREST_LINK ? (
                                        <a href={process.env.NEXT_PUBLIC_PINTREST_LINK}>
                                            <ImPinterest2 size={25} />
                                        </a>
                                    ) : null}
                                    {process.env.NEXT_PUBLIC_LINKEDIN_LINK ? (
                                        <a href={process.env.NEXT_PUBLIC_LINKEDIN_LINK} target="_blank">
                                            <AiOutlineLinkedin size={28} />
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div id="footer_page_section">
                            <div className="page_links">
                              All properties
                            </div>
                            <div className="page_links">
                              Career
                            </div>
                            <div className="page_links">
                                Agents
                            </div>
                            <div className="page_links">
                                <Link href="/terms&condition">{translate("terms&condition")}</Link>
                            </div>

                            <div className="page_links">
                                <Link href="/privacy-policy">{translate("privacyPolicy")}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div id="footer_download_section">
                            <div className="download_app_platforms">
                                {process.env.NEXT_PUBLIC_PLAYSTORE ? (
                                    <div id="playstore_logo">
                                        <a href={process.env.NEXT_PUBLIC_PLAYSTORE} target="_blank">
                                            <Image loading="lazy" src={playstore.src} alt="" className="platforms_imgs" width={0} height={0} style={{ width: "100%", height: "100%" }} />
                                        </a>
                                    </div>
                                ) : null}
                                {process.env.NEXT_PUBLIC_APPSTORE ? (
                                    <div id="appstore_logo">
                                        <a href={process.env.NEXT_PUBLIC_APPSTORE} target="_blank">
                                            <Image loading="lazy" src={appstore.src} alt="" className="platforms_imgs" width={0} height={0} style={{ width: "100%", height: "100%" }} />
                                        </a>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="rights_footer">
                <hr />
                <h6>Copyright @ 2023 {webdata.company_name}. All Rights Reserved</h6>
            </div>
        </section>
    );
};

export default Footer;
