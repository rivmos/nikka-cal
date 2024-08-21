import React, { useState } from 'react';
import { useCalendar } from '../context/CalendarContext';
import DayView from './DayView';
import dayjs from 'dayjs';

const MonthView: React.FC = () => {
  const { currentDate, nextMonth, prevMonth } = useCalendar();
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);

  const daysInMonth = currentDate.daysInMonth();
  const firstDayOfMonth = currentDate.startOf('month').day();

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="empty-slot" />);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(
      <div key={i} className="day" onClick={() => setSelectedDate(currentDate.date(i))}>
        {i}
      </div>
    );
  }

  return selectedDate ? (
    <DayView date={selectedDate} />
  ) : (
    <div>
      <div className="month-header">
        <button onClick={prevMonth}>Prev</button>
        <span>{currentDate.format('MMMM YYYY')}</span>
        <button onClick={nextMonth}>Next</button>
      </div>
      <div style={{marginBottom:'10px'}} className='days-name'>{['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day} className="day">{day}</div>)}</div>
      <div className="month-view">
        {days}
      </div>
    </div>
  );
};

export default MonthView;
