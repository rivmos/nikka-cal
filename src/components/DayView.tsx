import dayjs from 'dayjs';
import React from 'react';

const DayView: React.FC<{ date: dayjs.Dayjs }> = ({ date }) => {
  return (
    <div>
      <h2>{date.format('dddd, MMMM D, YYYY')}</h2>
      {/* Add more detailed content here */}
    </div>
  );
};

export default DayView;
