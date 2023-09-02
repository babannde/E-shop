import React, { useEffect, useState } from 'react'
import styles from '../../../styles/styles';
import { useSelector } from "react-redux";
import { serviceData } from '../../../static/data';
import ServiceCard from '../ServiceCard/ServiceCard';
import { Link } from 'react-router-dom';

const FeaturedService = () => {
  const [data,setData] = useState([]);
  const {allServices} = useSelector((state) => state.services);

  useEffect(() => {
        const firstFive = allServices && allServices.slice(0,4);
        setData(firstFive);
    }, [allServices]);
  return (
    <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
            <h1>Featured Services</h1>
        </div>
        <div className='grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-4 xl:gap-[30px] mb-12 border-0'>
            {
            data && data.length !== 0 &&(
              <>
              {data && data.map((i, index) => <ServiceCard data={i} key={index} />)}
              </>
              )
            }
            <h4>
              {
                data?.length === 0 && (
                  `No Featured Service!`
                )
              }
            </h4>
        </div>
    </div>
  );
}

export default FeaturedService