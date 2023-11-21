import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
import adminlogo from "@/assets/Images/Superman.jpeg";
import { translate } from "@/utils";
import Image from "next/image";

const ArticleCard = ({ ele, expandedStates, index, PlaceHolderImg }) => {
    const stripHtmlTags = (htmlString) => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = htmlString;
        return tempDiv.textContent || tempDiv.innerText || "";
    };

    return (
        <div>
            <Card id="article_main_card">
                <Image loading="lazy" height={0} width={0} variant="top" id="article_card_img" src={ele.image ? ele.image : PlaceHolderImg} />
                {ele.category?.category && ele.category?.category ? <span id="apartment_tag">{ele.category?.category}</span> : <span id="apartment_tag">General</span>}
                <Card.Body id="article_card_body">
                    <div id="article_card_headline">
                        <span>{stripHtmlTags(ele.title).substring(0, 30)}</span>
                        {ele && ele.description && (
                            <>
                                <p>{expandedStates[index] ? stripHtmlTags(ele.description) : stripHtmlTags(ele.description).substring(0, 100) + "..."}</p>
                                {ele.description.length > 100 && (
                                    <div id="readmore_article">
                                        <Link href="/article-details/[slug]" as={`/article-details/${ele.id}`} passHref>
                                            <button className="readmore">
                                                {translate("showMore")}
                                                <AiOutlineArrowRight className="mx-2" size={18} />
                                            </button>
                                        </Link>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </Card.Body>
                <Card.Footer id="article_card_footer">
                    <div id="admin_pic">
                        <Image loading="lazy" src={adminlogo.src} alt="" className="admin" width={200} height={200} />
                    </div>
                    <div className="article_footer_text">
                        <span className="byadmin"> {translate("byAdmin")}</span>
                        <p>1 day ago</p>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default ArticleCard;
