import React from 'react';
import { Link } from 'react-router-dom';

const Approved = () => {
    return (
        <div>
            <p>New to Booking Service <Link className='text-secondary' to="/signup">Create new Account</Link></p>
            <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
        </div>
    );
};

export default Approved;