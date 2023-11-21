import React, { useEffect } from "react";
import EditPropertyTabs from "@/Components/EditPropertyTabs/EditPropertyTabs";
import VerticleLayout from "@/Components/AdminLayout/VerticleLayout";
import { translate } from "@/utils";
import { languageData } from "@/store/reducer/languageSlice";
import { useSelector } from "react-redux";

const index = () => {
    const lang = useSelector(languageData);

    useEffect(() => {}, [lang]);
    return (
        <VerticleLayout>
            <div className="container">
                <div className="dashboard_titles">
                    <h3>{translate("editProp")}</h3>
                </div>
                <div className="card" id="add_prop_tab">
                    <EditPropertyTabs />
                </div>
            </div>
        </VerticleLayout>
    );
};

export default index;
