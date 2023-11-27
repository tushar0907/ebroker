import React, { useEffect, useState } from "react";
import ViewPageImg from "@/assets/Images/Breadcrumbs.jpg";

import { CiLocationOn } from "react-icons/ci";
import { BiTime } from "react-icons/bi";
import { useSelector } from "react-redux";
import { settingsData } from "@/store/reducer/settingsSlice";
import { toast } from "react-hot-toast";
import { AddFavourite } from "@/store/actions/campaign";
import { IoShare } from "react-icons/io5";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Detailcrumb = (props) => {
   
    let { data, title } = props;
    const priceSymbol = useSelector(settingsData);
    const CurrencySymbol = priceSymbol && priceSymbol.currency_symbol;

    const isLoggedIn = useSelector((state) => state.User_signup);
    const userCurrentId = isLoggedIn && isLoggedIn.data ? isLoggedIn.data.data.id : null;
    // Initialize isLiked based on props.data.is_favourite
    const [isLiked, setIsLiked] = useState(props.data && props.data.is_favourite);

    // Initialize isDisliked as false
    const [isDisliked, setIsDisliked] = useState(false);

    const handleLike = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isLoggedIn && isLoggedIn.data && isLoggedIn.data.token) {
            AddFavourite(
                props.data.propId,
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
            props.data.propId,
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
        // Update the state based on props.data.is_favourite  when the component mounts
        setIsLiked(props.data && props.data.is_favourite === 1);
        setIsDisliked(false);
    }, [props.data && props.data.is_favourite]);

    return (
        <div
            id="detailcrumb-content"
        >
            {!props.data ? (
                <div className="container" id="breadcrumb-headline">
                    <h2>{props.title}</h2>
                </div>
            ) : (
                <>
                    <div id="detailcrumb" className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="left-side-content">
                                    {/* <span className="prop-types">{data.type}</span> */}
                                    <span className="currenname">{CurrencySymbol}{data.price}</span>
                                    <span className="currentname">
                                        <CiLocationOn size={25} /> {data.title}
                                    </span>
                                    {/* <div className="prop-sell-time">
                                        <span className="propertie-sell-tag">{data.propertyType}</span>
                                        <span>
                                            {" "}
                                            <BiTime size={20} /> {data.time}
                                        </span>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="contentt">
                                    <span className="detailshare">
                                    {/* {isLiked ? (
                                            <button onClick={handleDislike}>
                                                <AiFillHeart size={25} className="" />
                                            </button>
                                        ) : isDisliked ? (
                                            <button onClick={handleLike}>
                                                <AiOutlineHeart size={25} className="" />
                                            </button>
                                        ) : (
                                            <button onClick={handleLike}>
                                                <AiOutlineHeart size={25} />
                                            </button>
                                        )} */}

                                        <div className="saveh">
                                        <AiOutlineHeart className="logoo"/>Save
                                        </div>
                                        <div className="saveh">
                                        <IoShare className="logoo"/>Share
                                        </div>
                                    </span>
                                    <div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Detailcrumb;
