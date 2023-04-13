import React, { useContext, useState } from 'react';
import './RecentAppointment.css';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-hot-toast';
import { Form, Link, Navigate } from 'react-router-dom';



const RecentAppointment = () => {
  const { user } = useContext(AuthContext);
  const [deletingRecentAppointment, setDeletingRecentAppointment] = useState(null);
  const [viewRecentAppointment, setViewRecentAppointment] = useState(null);

  const closeModal = () => {
    setDeletingRecentAppointment(null);
  }
  

  const url = `http://localhost:5000/bookings/admin?_id=${user?._id}`;


  const { data: bookings, isLoading, refetch = [] } = useQuery({
    queryKey: ['bookings', user?._id],
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

  // testing

  // const LoadDetail= (id) =>{
  //   Navigate('/Dashboard/EditUser'+id);
  // }

  // testing
const handleViewRecentAppointment = viewBooking => {
  console.log(viewBooking);
 
}

  const handleDeleteRecentAppointment = booking => {
    console.log(booking);
    fetch(`http://localhost:5000/bookings/admin?_id${booking?._id}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          console.log(data);
          refetch();
          toast.success(`seller ${booking.patient}deleted successfully`)
        }
      })
  }

  if (isLoading) {
    return <Loading></Loading>
  }


  return (

    <div>
      <div>
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Service Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Date</th>
              {/* <th>Time</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              bookings &&
              bookings?.map((booking, i) => <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.patient}</td>
                <td>{booking.treatment}</td>
                <td>{booking.email}</td>
                <td>{booking.phone}</td>

                <td>{booking.appointmentDate}</td>
                {/* <td>{booking.slot}</td> */}
                
                  <td>
                    <label onClick={() => setDeletingRecentAppointment(booking)} htmlFor="confirmation-modal" className="btn btn-sm  btn-info">Cancel</label>
                  </td>
                  <td>
                    {/* <label htmlFor="confirmation-modal" className="btn btn-sm  btn-info">Approved</label> */}


                    {/* <Link className='btn btn-sm  btn-info m-2' to='/Dashboard/EditUser' >View</Link> */}
                    <Link className='btn btn-sm  btn-info m-2' to={`/Dashboard/EditUser`} >View</Link>
                    <Link onClick={() => setViewRecentAppointment(booking)} htmlFor="confirmation-modal" className='btn btn-sm  btn-info m-2'>View</Link>


                    
                  </td>
                  {/* <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>  /Dashboard/EditUser  
                <p>{slots.length} {slots.length >1 ? 'Spaces' : 'Space'} Available</p> */}
                {/* <td className='widgetLgStatus'><Button type="Approved"></Button></td> */}
              </tr>)
            }
          </tbody>
        </table>

      </div>
      {
        deletingRecentAppointment && <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingRecentAppointment.patient}. It cannot be undo.`}
          successAction={handleDeleteRecentAppointment}
          successButtonName="Cancel"
          modalData={deletingRecentAppointment}
          closeModal={closeModal}
        >

        </ConfirmationModal>
      }
      {/* {
        viewRecentAppointment && <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${viewRecentAppointment.patient}. It cannot be undo.`}
          successAction={handleViewRecentAppointment}
          successButtonName="Cancel"
          modalData={viewRecentAppointment}
          closeModal={closeModal}
        >

        </ConfirmationModal>
      } */}

    </div>
  );
};

export default RecentAppointment;