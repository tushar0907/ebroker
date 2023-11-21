import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import { languageData } from "@/store/reducer/languageSlice";
import { useEffect } from "react";
import Loader from "../Loader/Loader";
import { settingsData, settingsLoaded } from "@/store/reducer/settingsSlice";

const Layout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const isLoggedIn = useSelector((state) => state.User_signup);
    const userCurrentId = isLoggedIn && isLoggedIn.data ? isLoggedIn.data.data.id : null;

    const settingData = useSelector(settingsData);
    useEffect(() => {
        // setIsLoading(false)
        if (settingData) {
            setIsLoading(false);
        } else {
            settingsLoaded(
                null,
                isLoggedIn ? userCurrentId : "",
                (res) => {
                    setIsLoading(false);
                },
                (err) => {
                    console.log(err);
                }
            );
        }
    }, [isLoggedIn]);

    const lang = useSelector(languageData);
    useEffect(() => {}, [lang]);
    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Header />
                    {children}
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Layout;
