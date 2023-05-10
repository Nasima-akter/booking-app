import React, { useContext, useState } from 'react';
import './RecentAppointment.css';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';



const RecentAppointment = () => {
  const { user } = useContext(AuthContext);
  const [deletingRecentAppointment, setDeletingRecentAppointment] = useState(null);
  // const [viewRecentAppointment, setViewRecentAppointment] = useState(null);

  const closeModal = () => {
    setDeletingRecentAppointment(null);
  }

// view button
  // const loadDetail = () => {
  //   console.log('get Detail')
  // }


// view button




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


  const handleDeleteRecentAppointment = booking => {
    console.log(booking);
    // http://localhost:5000/admin?
    fetch(`http://localhost:5000/bookings/${booking?._id}`, {
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
          toast.success(`seller ${booking.patient} deleted successfully`)
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
              
              bookings?.map((booking, i) => <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.patient}</td>
                <td>{booking.treatment}</td>
                <td>{booking.email}</td>
                <td>{booking.phone}</td>

                <td>{booking.appointmentDate}</td>
                {/* <td>{booking.slot}</td> */}

                <td>
                  <label onClick={() => setDeletingRecentAppointment(booking)} htmlFor="confirmation-modal" className="btn btn-sm  btn-info">Remove</label>
                </td>
                <td>
                  {/* <Link className='btn btn-sm  btn-info m-2' to={`/Dashboard/EditUser/${booking?._id}`}>View R</Link>
                  <Link className='btn btn-sm  btn-info m-2' to={`/Dashboard/EditUser`} >View</Link>
                    */}
                  {/* <Link className='btn btn-sm  btn-info m-2' onClick="loadDetail(${})" >View</Link> */}
                  {/* <button className='btn btn-accent w-64' >pending</button> */}

                  {/* <Link className='btn btn-sm  btn-info m-2' to={`/Dashboard/viewUser`} >View</Link> */}
                  {/* <Link className='btn btn-sm  btn-info m-2' to={`/EditUser/${booking?.id}`} >View</Link> */}
                </td>
              </tr>)
            }
          </tbody>
        </table>

      </div>
      {
        deletingRecentAppointment && <ConfirmationModal
          title={`Are you sure you want to remove?`}
          message={`If you Remove ${deletingRecentAppointment.patient}. It cannot be undo.`}
          successAction={handleDeleteRecentAppointment}
          successButtonName="Remove"
          modalData={deletingRecentAppointment}
          closeModal={closeModal}
        >

        </ConfirmationModal>
      }
    </div>
  );
};

export default RecentAppointment;