
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const EditUser = () => {
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState({
        patient: '',
        treatment: '',
        email: '',
        phone: '',
        appointmentDate: '',
        slot: '',
        address: ''
    });
    const { id } = useParams ();

    useEffect(() => {
        loadBooking();
    }, []);

    
    const loadBooking = async () => {
        const res = await fetch(`http://localhost:5000/bookings/admin?_id=${booking?.id}`)
        setBooking(res.data);
        // .then( data => res.json())
        // .then(data => {
        //     console.log(data);
        // })
    }
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?._id],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings/admin?_id=${user?._id}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h1>EditUser</h1>
            <Link to='/'>back to home</Link>
            <h1>Booking Id: {id}</h1>
            <hr />
        
            <div>
                {
                    bookings &&
                    bookings?.map((booking, i) => <ul key={booking._id}>
                        <li>{i+1}</li>
                        <li className='list-group-item'>Name: {booking.patient}</li>
                        <li className='list-group-item'>Service Name: {booking.treatment}</li>
                        <li className='list-group-item'>Email: {booking.email}</li>
                        <li className='list-group-item'>Phone Number: {booking.phone}</li>
                        <li className='list-group-item'>Appointment Date: {booking.appointmentDate}</li>
                        <li className='list-group-item'>Slot time: {booking.slot}</li>
                        <li className='list-group-item'>Address: {booking.address}</li>

                    </ul>)
                }
            </div>
        </div>
    );
};

export default EditUser;