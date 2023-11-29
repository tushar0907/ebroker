import { AddFavourite } from "@/store/actions/campaign";
import { settingsData } from "@/store/reducer/settingsSlice";
import { translate } from "@/utils";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import Image from "next/image";
import Logo from "../../assets/Logo_Color.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineCall } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";



const HorizontalCard = ({ ele }) => {
    const priceSymbol = useSelector(settingsData);
    const CurrencySymbol = priceSymbol && priceSymbol.currency_symbol;
    const isLoggedIn = useSelector((state) => state.User_signup);

    const DummyImgData = useSelector(settingsData);
    const PlaceHolderImg = DummyImgData?.img_placeholder;
    const [isLiked, setIsLiked] = useState(ele.is_favourite === 1);

    // Initialize isDisliked as false
    const [isDisliked, setIsDisliked] = useState(false);

    const handleLike = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isLoggedIn && isLoggedIn.data && isLoggedIn.data.token) {
            AddFavourite(
                ele.id,
                "1",
                (response) => {
                    setIsLiked(true);
                    setIsDisliked(false);
                    toast.success(response.message);
                },
                (error) => {
                    console.log(error);
                }
            );
        } else {
            toast.error("Please login first to add this property to favorites.");
        }
    };

    const handleDislike = (e) => {
        e.preventDefault();
        e.stopPropagation();
        AddFavourite(
            ele.id,
            "0",
            (response) => {
                setIsLiked(false);
                setIsDisliked(true);
                toast.success(response.message);
            },
            (error) => {
                console.log(error);
            }
        );
    };

    useEffect(() => {
        // Update the state based on ele.is_favourite when the component mounts
        setIsLiked(ele.is_favourite === 1);
        setIsDisliked(false);
    }, [ele.is_favourite]);

    return (
        <div className="horizontal_card">
            <div className="card" id="main_prop_card">
                <div className="image_div col-md-5">
                    <Image loading="lazy" className="card-img" id="prop_card_img" src={ele.title_image ? ele.title_image : PlaceHolderImg} width={20} height={20} />
                </div>

                <div className="card-body" id="main_prop_card_body">
                    {ele.promoted ? <span className="prop_feature">{translate("feature")}</span> : null}
                    <span className="prop_like">
                        {isLiked ? (
                            <AiFillHeart size={25} className="liked_property" onClick={handleDislike} />
                        ) : isDisliked ? (
                            <AiOutlineHeart size={25} className="disliked_property" onClick={handleLike} />
                        ) : (
                            <AiOutlineHeart size={25} onClick={handleLike} />
                        )}
                    </span>
                    <span className="prop_sell">{ele.propery_type}</span>
                    {/* <span className="prop_price">
                        {CurrencySymbol} {ele.price}
                    </span> */}

                    <div className="card-headerr">
                        <div className="prop_card_mainbody">
                            <div className="cate_image">
                                <Image loading="lazy" src={ele.category.image} alt="" width={20} height={18} />
                            </div>
                            <span className="body_title"> 
                            {ele.category.category}
                            <Image loading="lazy" src={Logo.src} alt="Logo" className="loogo" width={0} height={26} style={{ width: "60px", height:"50px" }} />

                              </span>
                        </div>

                        <div className="symprice">
                        {CurrencySymbol} {ele.price}
                        </div>
                       
                        <div id="prop_card_middletext">
                            <span>{ele.title}</span>
                           
                        </div>
                    </div>
                    <div className="card-footer" id="prop_card_footer">
                        <div className="row">
                            {ele.parameters &&
                                ele.parameters.slice(0, 4).map((elem, index) => (
                                    <div className="col-sm-12 col-md-6" key={index}>
                                <p className="logcity">
                                  <FaMapMarkerAlt className="mapp" />  {ele.city} {ele.city ? "," : null} {ele.state} {ele.state ? "," : null} {ele.country}
                                </p>
                                        <div id="footer_content" key={index}>
                                            <div>
                                                <Image loading="lazy" src={elem.image} alt="" width={20} height={20} />
                                            </div>
                                            <p className="text_footer"> {elem.name}</p>
                                        </div>

                                    </div>
                                ))}
                                
                        </div>
                        <div className="desccall">
                            <div className="contactdes">
                                <p className="cont"><MdOutlineCall className="logov" />Call</p>
                                <p className="cont"><MdOutlineEmail className="logov"  />Email</p>
                                <p className="cont"><IoLogoWhatsapp className="logov"  />Whatsapp</p>
                                <p className="cont"><AiOutlineHeart size={18} /></p>
                                <p className="cont"><BsThreeDotsVertical size={18} /></p>
                            </div>
                        </div>

                        
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default HorizontalCard;
