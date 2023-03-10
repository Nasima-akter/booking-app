import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <header className='my-6'
            style={{
                background: `url(${bg})`,
                backgroundSize: '100%',
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='chair' />
                    <div className='mr-8 shadow-xl h-312 w-312 rounded-2xl'>
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