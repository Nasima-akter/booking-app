import { format } from 'date-fns';
import React from 'react';
import { toast } from 'react-hot-toast';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { name: treatmentName, slots } = treatment;
    const date = format(selectedDate, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
        }

        // console.log(booking);s

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking Confirmed');
                    refetch()
                }
            })


    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered w-full" />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full" />
                        <input type="submit" className="input input-bordered w-full bg-neutral text-white" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;



































// import { format } from 'date-fns';
// import React from 'react';
// import toast from 'react-hot-toast';

// const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
//     const { name, slots } = treatment;
//     const date = format(selectedDate, 'PP');

//     const handleBooking = event => {
//         event.preventDefault();
//         const form = event.target;
//         const slot = form.slot.value;
//         const name1 = form.name.value;
//         const email = form.email.value;
//         const phone = form.phone.value;

//         const booking = {
//             appointmentDate: date,
//             treatment: name,
//             patient: name1,
//             slot,
//             email,
//             phone,
//         }

//         fetch('http://localhost:5000/booking', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(booking)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.acknowledged) {
//                     setTreatment(null);
//                     toast.success('Booking confirmed')
//                 }
//             })


//     }
//     return (
//         <>
//             <input type="checkbox" id="booking-modal" className="modal-toggle" />
//             <div className="modal">
//                 <div className="modal-box relative">
//                     <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//                     <h3 className="text-lg font-bold">{name}</h3>
//                     <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
//                         <input type="text" disabled value={date} className="input input-bordered w-full" />
//                         <select name='slot' className="select select-bordered">
//                             {
//                                 slots.map((slot, i) => <option
//                                     value={slot}
//                                     key={i}
//                                 >{slot}</option>)
//                             }
//                         </select>
//                         <input name='name' type="text" placeholder="Full Name" className="input input-bordered w-full" />
//                         <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full" />
//                         <input name='email' type="email" placeholder="Email" className="input input-bordered w-full" />
//                         <input type="submit" className="input input-bordered w-full bg-neutral text-white" value="Submit" />
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default BookingModal;