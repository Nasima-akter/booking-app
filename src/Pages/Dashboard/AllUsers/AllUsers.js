import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllUsers = () => {
  const [deleteAdmin, setDeleteAdmin] = useState(null);

  const closeModal = () => {
    setDeleteAdmin(null);
  }

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('https://booking-app-server-green.vercel.app/users');
      const data = await res.json();
      return data;
    }
  });

  const handleMakeAdmin = id => {
    console.log(id, 'admin')
    fetch(`https://booking-app-server-green.vercel.app/users/admin/${id}`, {
      method: 'PATCH',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data, 'admin data')
        if (data.modifiedCount > 0) {
          toast.success('Make admin successful.')
          refetch();
        }
      })
  }

  const handleDeleteAdmin = user => {
    // console.log(user);
    fetch(`https://booking-app-server-green.vercel.app/users/${user._id}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      refetch();
    })

  }

  return (
    <div>
      <h2 className="text-3xl">All Users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, i) => <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                <td>
                  <label onClick={() => setDeleteAdmin(user)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                </td>

                {/* <td>{ user?.role !== 'admin' && <button onClick={() => handleDeleteAdmin(user._id)} className='btn btn-xs btn-danger'>Delete</button>}</td> */}
                {/* <td><button  className='btn btn-xs btn-danger'>Delete</button></td> */}
              </tr>)
            }

          </tbody>
        </table>
      </div>
      {
        deleteAdmin && <ConfirmationModal
        title={`Are you sure you want to delete?`}
                    message={`If you delete ${deleteAdmin.name}. It cannot be undo.`}
                    successAction = {handleDeleteAdmin}
                    successButtonName="Delete"
                    modalData = {deleteAdmin}
                    closeModal={closeModal}
        >

        </ConfirmationModal>
      }
    </div>
  );
};

export default AllUsers;