import React, { useState } from "react";
import { AiFillStar, AiOutlineEye, AiOutlineStar } from "react-icons/ai";
import ServiceDetailsCard from "../ServiceDetailsCard/ServiceDetailsCard";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";

const ServiceCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>

        <div className="flex items-start">
          <Link to={`/shop/preview/${data?.shop._id}`}>
            <img
              src={`${data?.shop?.avatar?.url}`}
              className="w-[50px] h-[50px] rounded-full mr-2"
              alt=""
            />
          </Link>
          <div className="p-3">
            <Link to={`/shop/preview/${data?.shop._id}`}>
              <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
            </Link>
            <Link to={`/service/${data._id}`}>
              <h4 className="pb-3 font-[500]">
                {data.name.length > 20
                  ? data.name.slice(0, 20) + "..."
                  : data.name}
              </h4>
              <div className="py-2 flex items-center">
                <div className="flex">
                  <p className="font-[400] text-[14px]">
                    {data.operationYears} Years | {data.staffNumber} Staffs
                  </p>
                </div>
              </div>
              <div className="flex pb-2">
                <p className="font-[400] text-[14px]">{data.shop.address}</p>
              </div>
            </Link>
            <div className="flex">
              <AiFillStar
                className="mr-2 cursor-pointer"
                size={20}
                color="#F6BA00"
              />
              <AiFillStar
                className="mr-2 cursor-pointer"
                size={20}
                color="#F6BA00"
              />
              <AiFillStar
                className="mr-2 cursor-pointer"
                size={20}
                color="#F6BA00"
              />
              <AiFillStar
                className="mr-2 cursor-pointer"
                size={20}
                color="#F6BA00"
              />
              <AiOutlineStar
                className="mr-2 cursor-pointer"
                size={20}
                color="#F6BA00"
              />
            </div>
          </div>
        </div>
        {/* side options */}
        <div>
          <AiOutlineEye
            size={22}
            className="cursor-pointer absolute right-2 top-7"
            onClick={() => setOpen(!open)}
            color="#333"
            title="Quick view"
          />

          {/* Pop up */}
          {open ? <ServiceDetailsCard setOpen={setOpen} data={data} /> : null}
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
