import React, { useEffect, useState } from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import ServiceDetails from "../components/Services/ServiceDetails"
import { useParams, useSearchParams } from 'react-router-dom'
import { serviceData } from '../static/data'
import SuggestedService from "../components/Services/SuggestedService"
import { useSelector } from 'react-redux'

const ServiceDetailsPage = () => {
    const {allServices} = useSelector((state) => state.services);
    const {id} = useParams(); 
    const [data,setData] = useState(null);
    const [searchParams] = useSearchParams();
    
    useEffect(() => {
      const data = allServices && allServices.find((i) => i._id === id);
      setData(data);
      
    }, [allServices,data])
    console.log(data);

  return (
    <div>
        <Header />
        <ServiceDetails data={data} />
        {
            data && <SuggestedService data={data} />
        }
        <Footer />
    </div>
  )
}

export default ServiceDetailsPage