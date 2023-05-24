import chair from '../../../assets/images/chair.png';
// import bg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import bannar from './AppointmentBanner.css'

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <header id="overlay" className='my-6'
            // style={{
            //     background: `url(${bg})`,
            //     backgroundSize: '100%',
            // }}
            // max-w-sm   <img src={chair} className=" rounded-lg shadow-2xl mb-3" alt='chair' />
        >
            <div className="hero bd">
                <div className="hero-content flex-col flex-row-reverse">
                    <img src={chair} className=" rounded-lg shadow-xl  m-2" alt='chair' />
                    <div className='shadow-xl  rounded-2xl'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                        {/* <p>You have selected date: {format(selectedDate, 'PP')}</p> */}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;