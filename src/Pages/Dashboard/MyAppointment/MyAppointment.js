import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    // https://booking-app-server-green.vercel.app

    const url = `https://booking-app-server-green.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
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
            <h3 className="text-3xl mb-6 mt-6 ml-12 font-bold">My Appointments</h3>
            <div className="overflow-x-auto w-11/12 ml-12">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Service Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings &&
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i+1}</th>
                                <td>{booking.patient}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.email}</td>
                                <td>{booking.phone}</td>
                                
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                                <td>{booking.address}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;