import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer className='p-10' 
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover',
                // background: url(/static/media/footer.44c3058….png) 0% 67% / cover;
            }}
            >
            <div className="footer p-10 ">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="/" className="link link-hover">Emergency Checkup</Link>
                    <Link to="/" className="link link-hover">Monthly Checkup</Link>
                    <Link to="/" className="link link-hover">Weekly Checkup</Link>
                    <Link to="/" className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <Link to="/" className="link link-hover">Fluoride Treatment</Link>
                    <Link to="/" className="link link-hover">Cavity Filling</Link>
                    <Link to="/" className="link link-hover">Teeth Whitening</Link>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <Link to="/" className="link link-hover">New York - 101010 Hudson</Link>
                </div>
            </div>
            <div className='text-center mt-32 '>
                <p>Copyright 2023 All Rights Reserved by Whatson</p>
            </div>
        </footer>
    );
};

export default Footer;