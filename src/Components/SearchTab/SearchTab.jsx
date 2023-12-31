import React, { useEffect, useState } from "react";
import { ButtonGroup, Modal } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { BiFilter } from "react-icons/bi";
import { translate } from "@/utils";
import LocationSearchBox from "../Location/LocationSearchBox";
import { GrRefresh } from "react-icons/gr";
import { RiCloseCircleLine, RiSendPlane2Line } from "react-icons/ri";
import { useRouter } from "next/router";

const SearchTab = ({ getCategories }) => {
  const router = useRouter();
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filterD, setFilterD] = useState();
  const [formData, setFormData] = useState({
    propType: "", // Set your default value here
    minPrice: "",
    maxPrice: "",
    postedSince: "",
    selectedLocation: null,
  });
  const [activeTab, setActiveTab] = useState(0);
  const [searchInput, setSearchInput] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const handleHideFilterModal = () => {
    setShowFilterModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePostedSinceChange = (e) => {
    setFormData({
      ...formData,
      postedSince: e.target.value,
    });
  };

  const handleLocationSelected = (locationData) => {
    setFormData({
      ...formData,
      selectedLocation: locationData,
    });
  };

  const handleTabClick = (tab) => {
    switch (tab) {
      case "sell":
        setActiveTab(0);
        break;
      case "rent":
        setActiveTab(1);
        break;
      case "bnb":
        setActiveTab(2);
        break;
      case "pln":
        setActiveTab(3);
        break;
      case "cmrcl":
        setActiveTab(4);
        break;
      default:
        setActiveTab(0); // Set a default value if none of the cases match
    }
  };
  
  const handleApplyFilter = () => {
    let postedSinceValue = "";
    if (formData.postedSince === "yesterday") {
      postedSinceValue = "0";
    } else if (formData.postedSince === "lastWeek") {
      postedSinceValue = "1";
    }

    // Include the postedSince value in the filterData object
    const filterData = {
      propType: formData.propType || "", // Set to empty string if not selected
      minPrice: formData.minPrice || "0", // Set to empty string if not selected
      maxPrice: formData.maxPrice || "", // Set to empty string if not selected
      postedSince: postedSinceValue, // Include it here
      selectedLocation: formData.selectedLocation || null, // Set to null if not selected
    };

    // Set the filter data in state
    setFilterD(filterData);
    setShowFilterModal(false); // Close the modal
  };
  useEffect(() => {
    // You can access the updated filterD value here
  }, [filterD]);
  const handleSearch = (e) => {
    e.preventDefault();

    const searchData = {
      filterData: filterD,
      activeTab: activeTab,
      searchInput: searchInput,
    };

    localStorage.setItem("searchData", JSON.stringify(searchData));

    setShowFilterModal(false); // Close the modal

    // Redirect to /search
    router.push(`/search`);
  };

  const handleClearFilter = () => {
    setFormData({
      propType: "",
      minPrice: "",
      maxPrice: "",
      postedSince: "",
      selectedLocation: null, // Set to null to clear it
    });
  };

  return (
    <div>
      <div id="searchbox" className="container">
        <div className="searchone">
          <ButtonGroup>
            <ul className="nav nav-tabs" id="tabs">
              <li className="">
                <a
                  className={`nav-link ${activeTab === 0 ? "tab-0" : ""}`}
                  aria-current="page"
                  id="sellbutton"
                  onClick={() => handleTabClick("sell")}
                >
                  {/* {translate("sell")} */} Buy
                </a>
              </li>
              <li className="">
                <a
                  className={`nav-link ${activeTab === 1 ? "tab-1" : ""}`}
                  onClick={() => handleTabClick("rent")}
                  aria-current="page"
                  id="rentbutton"
                >
                  {/* {translate("rent")} */} Sell
                </a>
              </li>
              <li className="">
                <a
                  className={`nav-link ${activeTab === 2 ? "tab-2" : ""}`}
                  aria-current="page"
                  id="airbutton"
                  onClick={() => handleTabClick("bnb")}
                >
                  {/* {translate("sell")} */} Airbnb
                </a>
              </li>
              <li className="">
                <a
                  className={`nav-link ${activeTab === 3 ? "tab-3" : ""}`}
                  aria-current="page"
                  id="offpln"
                  onClick={() => handleTabClick("pln")}
                >
                  {/* {translate("sell")} */} Off Plan
                </a>
              </li>
              <li className="">
                <a
                  className={`nav-link ${activeTab === 4 ? "tab-4" : ""}`}
                  aria-current="page"
                  id="cmcrlbutton"
                  onClick={() => handleTabClick("cmrcl")}
                >
                  {/* {translate("sell")} */} Commercial
                </a>
              </li>
            </ul>
          </ButtonGroup>
          {/* <div className="adtags">
                        <span className="tag2">Airbnb</span>
                        <span className="tag2">Off Plan</span>
                        <span className="tag3">Commercial</span>

                    </div> */}
        </div>

        <div id="searchcard">
          <div id="searchbuttoon">
            <FiSearch size={20} />
            <input
              className="searchinput"
              placeholder="Search your property"
              name="propertySearch"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <div id="leftside-buttons">
            <button className="filter" onClick={() => setShowFilterModal(true)}>
              <BiFilter size={25} />
              {translate("filter")}
            </button>
            <button className="fiadtagsnd" onClick={handleSearch}>
              {translate("search")}
            </button>
          </div>
        </div>

        <div className="searchboxadd">
          <span className="tags1">New York</span>
          <span className="tags1">South Africa</span>

          <span className="tags1">Ethiopia</span>

          <span className="tags1">Ghana</span>

          <span className="tags1">Dubai</span>
          <span className="tags1">Nigeria</span>
        </div>
      </div>
      <Modal
        show={showFilterModal}
        onHide={handleHideFilterModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        className="filter-modal"
      >
        <Modal.Header>
          <Modal.Title>{translate("filterProp")}</Modal.Title>
          <RiCloseCircleLine
            className="close-icon"
            size={40}
            onClick={handleHideFilterModal}
          />
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <div className="first-grup">
              <div className="prop-type-modal">
                <span>{translate("propTypes")}</span>
                <select
                  className="form-select"
                  aria-label="Default select"
                  name="propType"
                  value={formData.propType}
                  onChange={handleInputChange}
                >
                  <option value="">{translate("selectPropType")}</option>
                  {/* Add more options as needed */}
                  {getCategories &&
                    getCategories?.map((ele, index) => (
                      <option key={index} value={ele.id}>
                        {ele.category}
                      </option>
                    ))}
                </select>
              </div>

              <div className="prop-location-modal">
                <span>{translate("selectYourLocation")}</span>
                <LocationSearchBox
                  onLocationSelected={handleLocationSelected}
                />
              </div>
            </div>
            <div className="second-grup">
              <div className="budget-price-modal">
                <span>{translate("budget")}</span>
                <div className="budget-inputs">
                  <input
                    className="price-input"
                    type="number"
                    placeholder="Min Price"
                    name="minPrice"
                    value={formData.minPrice}
                    onChange={handleInputChange}
                  />
                  <input
                    className="price-input"
                    type="number"
                    placeholder="Max Price"
                    name="maxPrice"
                    value={formData.maxPrice}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="third-grup">
              <div className="posted-since">
                <span>{translate("postedSince")}</span>
                <div className="posted-duration-modal">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      value="anytime"
                      checked={formData.postedSince === "anytime"}
                      onChange={handlePostedSinceChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      {translate("anytime")}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      value="lastWeek"
                      checked={formData.postedSince === "lastWeek"}
                      onChange={handlePostedSinceChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      {translate("lastWeek")}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                      value="yesterday"
                      checked={formData.postedSince === "yesterday"}
                      onChange={handlePostedSinceChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault3"
                    >
                      {translate("yesterday")}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className="filter-footer">
          <div className="clear-filter-modal">
            <GrRefresh size={25} />
            <button
              id="clear-filter-button"
              type="submit"
              onClick={handleClearFilter}
            >
              {translate("clearFilter")}
            </button>
          </div>
          <div className="apply-filter-modal">
            <RiSendPlane2Line size={25} />
            <button
              id="apply-filter-button"
              type="submit"
              onClick={handleApplyFilter}
            >
              {translate("applyFilter")}
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SearchTab;
