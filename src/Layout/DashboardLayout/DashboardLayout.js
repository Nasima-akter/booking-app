import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import dashboardLayout from './DashboardLayout.css';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile bg-slate-100 mt-5">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu  dropdown-content custom-menu-padding shadow bg-base-100 text-base-content">
                        {/* menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 */}
                        <li><Link to="/dashboard">My Appointments</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li><Link to="/dashboard/allusers">All users</Link></li>
                                <li><Link to="/dashboard/adddoctor">Add Seller</Link></li>
                                <li><Link to="/dashboard/managesellers">Manage Seller</Link></li>
                                <li><Link to="/dashboard/recentAppointment">Recent Appointment</Link></li>
                                <li><Link to="/dashboard/allAppointment">All Appointment</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;