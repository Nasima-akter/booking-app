
import React, {  useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditUser = () => {
    // const { user } = useContext(AuthContext);
    const [setBooking] = useState({
        patient: '',
        treatment: '',
        email: '',
        phone: '',
        appointmentDate: '',
        slot: '',
        address: ''
    });
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        loadBooking();
    }, );


    const loadBooking = async () => {
        const res = await fetch(`https://booking-app-server-green.vercel.app/bookings/admin?_id=${id}`)
        setBooking(res.data);
    }
    // const { data: bookings = [] } = useQuery({
    //     queryKey: ['bookings', user?._id],
    //     queryFn: async () => {

    //         // https://booking-app-server-green.vercel.app/
    //         const res = await fetch(`https://booking-app-server-green.vercel.app/bookings/admin?_id=${user?._id}`, {
    //             headers: {
    //                 authorization: `bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         });
    //         const data = await res.json();
    //         return data;
    //     }
    // })

    return (
        <div>
            {/* <h1>View User Appointment</h1> */}
            <Link className='btn btn-info text-white' to='/'>Back to Home </Link>
            <h1>Booking Id: {id}</h1>
            <hr />

            <ul>
                <li>email: </li>
            </ul>

            {/* <div>
                {
                   
                    bookings?.map((booking, i) => 
                    <ul>
                        
                        <li>{i + 1}</li>
                        <li className='list-group-item'>Name: {booking.patient}</li>
                        <li className='list-group-item'>Service Name: {booking.treatment}</li>
                        <li className='list-group-item'>Email: {booking.email}</li>
                        <li className='list-group-item'>Phone Number: {booking.phone}</li>
                        <li className='list-group-item'>Appointment Date: {booking.appointmentDate}</li>
                        <li className='list-group-item'>Slot time: {booking.slot}</li>
                        <li className='list-group-item'>Address: {booking.address}</li>

                    </ul>)
                }
            </div> */}
        </div>
    );
};

export default EditUser;