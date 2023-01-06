import React,{useState, useEffect} from 'react'
import axios from 'axios'

function Services() {
    const [services, setServices] = useState([])
    
    useEffect(() => {
        const getServices = async () => {
        const res = await axios.get('http://goadway-api.onrender.com/api/services')
        setServices(res.data)
        }
        getServices()
    }, [])

    

  return (
    <div>
        {services.map((service) => (
            <div key={service._id}>
                <h1>{service.title}</h1>
                <p>{service.description}</p>
            </div>
        ))}
    </div>

  )
}

export default Services