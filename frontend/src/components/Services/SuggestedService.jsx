import React, { useEffect, useState } from 'react'
import styles from '../../styles/styles';
import ServiceCard from '../Route/ServiceCard/ServiceCard';
import { useSelector } from 'react-redux';

const SuggestedService = ({data}) => {
    const {allServices} = useSelector((state) => state.services);
    const [serviceData,setServiceData] = useState();

    useEffect(() => {
        const d = allServices && allServices.filter((i) => i.category === data.category);
        setServiceData(d);
    }, [])

  return (
    <div>
        {
            data ? (
                <div className={`p-4 ${styles.section}`}>
                    <h2 className={`${styles.heading} text-[25px] font-[500] border-b mb-5`}>
                        Related Services
                    </h2>
                    <div className='grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[30px] mb-12'>
                        {
                            serviceData && serviceData.map((i,index) => (
                                <ServiceCard data={i} key={index} />
                            ))
                        }
                    </div>
                </div>
            ) : null
        }
    </div>
  )
}

export default SuggestedService