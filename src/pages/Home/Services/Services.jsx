import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc, setIsAsc] = useState(true);
    const [search, setSearch] = useState('');
    const searchRef = useRef()
    // `https://genius-car-server-liard-two.vercel.app/services`
    useEffect(() => {
        fetch(`https://genius-car-server-liard-two.vercel.app/services?search=${search}&order=${isAsc ? 'desc' : 'asc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isAsc, search])

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    }
    return (
        <div>
            <div className='text-center'>
                <h6 className='text-xl font-bold text-orange-700'>Services</h6>
                <h1 className='text-5xl font-bold my-5'>Our Service Area</h1>
                <p className='mb-12 font-semibold'>the majority have suffered alteration in some form, by injected humour, or <br />randomised words which don't look even slightly believable. </p>
                <input className='input  input-bordered input-sm' ref={searchRef} type="text" />
                <button className='btn btn-sm ml-2' onClick={handleSearch}>Search</button>
                <button className='btn btn-ghost' onClick={() => setIsAsc(!isAsc)}>{isAsc ? 'desc' : 'asc'}</button>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;