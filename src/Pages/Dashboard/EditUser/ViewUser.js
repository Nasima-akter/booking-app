// const loadSingleBooking = () => {
//     fetch('https://booking-app-server-green.vercel.app/bookings')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

// loadSingleBooking();































// import { useQuery } from '@tanstack/react-query';
// import React, { useContext, useEffect } from 'react';
// import { useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { AuthContext } from '../../../contexts/AuthProvider';
// const ViewUser = () => {
//     const { user } = useContext(AuthContext);
//     const [booking, setBooking] = useState({
//         patient: '',
//         treatment: '',
//         email: '',
//         phone: '',
//         appointmentDate: '',
//         slot: '',
//         address: ''
//     });
//     const { id } = useParams();

//     useEffect(() => {
//         loadBooking();
//     }, []);


//     const loadBooking = async () => {
//         const res = await fetch(`https://booking-app-server-green.vercel.app/bookings/admin?_id=${booking?.id}`)
//         setBooking(res.data);
//     }
//     const { data: bookings = [] } = useQuery({
//         queryKey: ['bookings', user?._id],
//         queryFn: async () => {

//             // https://booking-app-server-green.vercel.app/
//             const res = await fetch(`https://booking-app-server-green.vercel.app/bookings/admin?_id=${user?._id}`, {
//                 headers: {
//                     authorization: `bearer ${localStorage.getItem('accessToken')}`
//                 }
//             });
//             const data = await res.json();
//             return data;
//         }
//     })

//     return (
//         <div>
//         {/* <h1>View User Appointment</h1> */}
//         <Link className='btn btn-info text-white' to='/'>Back to Home</Link>
//         <h1>Booking Id: {bookings?._id}</h1>
//         <hr />

//         <div>
//             {
//                 bookings?.map((booking, i) => <ul key={booking?._id}>
//                     <li to={`/Dashboard/viewUser/${booking.id}`}>{booking.email}</li>
//                 </ul>)
//             }
//         </div>
//     </div>
// );
// };

// export default ViewUser;