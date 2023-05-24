import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from '../AppointmentOptions/AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');
    const {data:appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async() => {
            const res = await fetch(`https://booking-app-server-green.vercel.app/v2/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <section className='my-16 max-w-[1048px] mx-auto'>
            <p className='text-center text-success font-bold text-2xl'>Available Services on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 sm:gap-6 lg:gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 lg:mt-6 max-sm:mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch = {refetch}
                ></BookingModal>}
        </section>
    );
};

export default AvailableAppointments;