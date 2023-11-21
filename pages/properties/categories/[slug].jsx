import React, { useEffect, useState } from "react";

import Link from "next/link";
import Breadcrumb from "@/Components/Breadcrumb/Breadcrumb";
import VerticalCard from "@/Components/Cards/VerticleCard";
import FilterForm from "@/Components/AllPropertyUi/FilterForm";
import { useRouter } from "next/router";
import GridCard from "@/Components/AllPropertyUi/GridCard";
import AllPropertieCard from "@/Components/AllPropertyUi/AllPropertieCard";
import ReactPaginate from "react-paginate";
import { GetFeturedListingsApi } from "@/store/actions/campaign";
import CustomHorizontalSkeleton from "@/Components/Skeleton/CustomHorizontalSkeleton";
import { useSelector } from "react-redux";
import { languageData } from "@/store/reducer/languageSlice";
import Pagination from "@/Components/Pagination/ReactPagination";
import Layout from "@/Components/Layout/Layout";
import { translate } from "@/utils";
import NoData from "@/Components/NoDataFound/NoData";

const AllProperties = () => {
    const [grid, setGrid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [CategoryListByPropertyData, setCategoryListByPropertyData] = useState();
    const [cateName, setCateName] = useState("");
    const [filterData, setFilterData] = useState({
        propType: "",
        category: "",
        minPrice: "",
        maxPrice: "",
        postedSince: "",
        selectedLocation: null,
    });
    const [total, setTotal] = useState();
    const [offsetdata, setOffsetdata] = useState(0);
    const limit = 8;

    const router = useRouter();
    const cateId = router.query;

    const isLoggedIn = useSelector((state) => state.User_signup);
    const userCurrentId = isLoggedIn && isLoggedIn.data ? isLoggedIn.data.data.id : null;

    const lang = useSelector(languageData);

    useEffect(() => {}, [lang]);

    useEffect(() => {
        setIsLoading(true);

        GetFeturedListingsApi(
            "",
            "",
            "",
            cateId,
            "",
            "",
            "",
            offsetdata.toString(),
            limit.toString(),
            isLoggedIn ? userCurrentId : "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            (response) => {
                setTotal(response.total);
                const propertyData = response.data;
                setIsLoading(false);
                setCategoryListByPropertyData(propertyData);

                setCateName(propertyData && propertyData[0].category.category);
            },
            (error) => {
                setIsLoading(false);
                console.log(error);
            }
        );
    }, [offsetdata, isLoggedIn]);
    const handlePageChange = (selectedPage) => {
        const newOffset = selectedPage.selected * limit;
        setOffsetdata(newOffset);
        window.scrollTo(0, 0);
    };
    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        // Ensure that the input value is a positive number
        if (type === "number") {
            const sanitizedValue = Math.max(0, parseInt(value));
            setFilterData({
                ...filterData,
                [name]: sanitizedValue,
            });
        } else {
            setFilterData({
                ...filterData,
                [name]: value,
            });
        }
    };

    const handleTabClick = (tab) => {
        const propTypeValue = tab === "sell" ? 0 : 1;
        setFilterData({
            ...filterData,
            propType: propTypeValue,
        });
    };
    const handlePostedSinceChange = (e) => {
        setFilterData({
            ...filterData,
            postedSince: e.target.value,
        });
    };

    const handleLocationSelected = (locationData) => {
        setFilterData({
            ...filterData,
            selectedLocation: locationData,
        });
    };

    const handleClearFilter = () => {
        setFilterData({
            propType: "",
            category: "",
            minPrice: "",
            maxPrice: "",
            postedSince: "",
            selectedLocation: null,
        });
    };
    const handleApplyfilter = (e) => {
        e.preventDefault();

        // Determine the value for the postedSince parameter based on filterData.postedSince
        let postedSinceValue = "";
        if (filterData.postedSince === "yesterday") {
            postedSinceValue = "0";
        } else if (filterData.postedSince === "lastWeek") {
            postedSinceValue = "1";
        }

        GetFeturedListingsApi(
            "",
            "",
            "",
            cateId,
            "",
            filterData ? filterData?.selectedLocation?.city : "",
            "",
            offsetdata.toString(),
            limit.toString(),
            isLoggedIn ? userCurrentId : "",
            filterData ? filterData?.propType : "",
            filterData ? filterData?.maxPrice : "",
            filterData ? filterData?.minPrice : "",
            postedSinceValue, // Set the postedSince parameter
            filterData ? filterData?.selectedLocation?.state : "",
            filterData ? filterData?.selectedLocation?.country : "",
            "",
            "",
            "",
            (response) => {
                setTotal(response.total);
                const propertyData = response.data;

                setCategoryListByPropertyData(propertyData);
                setIsLoading(false);
            },
            (error) => {
                setIsLoading(false);
                console.log(error);
            }
        );
    };

    return (
        <Layout>
            <Breadcrumb title={`${cateName} Properties`} />

            <div id="all-prop-containt">
                <div className="all-properties container">
                    <div className="row " id="main-all-prop">
                        <div className="col-12 col-md-12 col-lg-3">
                            <FilterForm
                                filterData={filterData}
                                cateName={cateName}
                                handleInputChange={handleInputChange}
                                handleTabClick={handleTabClick}
                                handlePostedSinceChange={handlePostedSinceChange}
                                handleLocationSelected={handleLocationSelected}
                                handleApplyfilter={handleApplyfilter}
                                handleClearFilter={handleClearFilter}
                            />
                        </div>
                        <div className="col-12 col-md-12 col-lg-9">
                            <div className="all-prop-rightside">
                                {CategoryListByPropertyData && CategoryListByPropertyData.length > 0 ? <GridCard total={total} setGrid={setGrid} /> : null}
                                {CategoryListByPropertyData && CategoryListByPropertyData.length > 0 ? (
                                    // Row cards
                                    !grid ? (
                                        <div className="all-prop-cards" id="rowCards">
                                            {isLoading
                                                ? // Show skeleton loading when data is being fetched
                                                  Array.from({ length: 8 }).map((_, index) => (
                                                      <div className="col-sm-12  loading_data">
                                                          <CustomHorizontalSkeleton />
                                                      </div>
                                                  ))
                                                : CategoryListByPropertyData.map((ele) => (
                                                      <Link href="/properties-details/[slug]" as={`/properties-details/${ele.id}`} passHref>
                                                          <AllPropertieCard ele={ele} />
                                                      </Link>
                                                  ))}
                                        </div>
                                    ) : (
                                        // Column cards
                                        <div id="columnCards">
                                            <div className="row" id="all-prop-col-cards">
                                                {CategoryListByPropertyData.map((ele, index) => (
                                                    <div className="col-12 col-md-6 col-lg-4" key={index}>
                                                        <Link href="/properties-details/[slug]" as={`/properties-details/${ele.id}`} passHref>
                                                            <VerticalCard ele={ele} />
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                ) : (
                                    <div className="noDataFoundDiv">
                                        <NoData />
                                    </div>
                                )}

                                {CategoryListByPropertyData && CategoryListByPropertyData.length > 0 ? (
                                    <div className="col-12">
                                        <Pagination pageCount={Math.ceil(total / limit)} onPageChange={handlePageChange} />
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AllProperties;