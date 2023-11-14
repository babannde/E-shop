import React, { useEffect, useState } from "react";
import Header from '../components/Layout/Header';
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import styles from '../styles/styles';
import ServiceCard from '../components/Route/ServiceCard/ServiceCard';
import Loader from "../components/Layout/Loader";
import Footer from '../components/Layout/Footer';



const ServicesPage = () => {

  const [data,setData] = useState([]);
  const {allServices} = useSelector((state) => state.services);

  useEffect(() => {
        const allArtisans = allServices && allServices;
        setData(allArtisans);
    }, [allServices]);

  return (
  
        <div>
        <Header activeHeading={3} />
        <br />
        <br />
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
                  `No Featured Services!`
                )
              }
            </h4>
        </div>
    </div>
        <Footer />
      </div>
      )
}

export default ServicesPage