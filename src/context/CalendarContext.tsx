import React, { createContext, useContext, useState } from 'react';
import dayjs from 'dayjs';

interface CalendarContextType {
  currentDate: dayjs.Dayjs;
  setCurrentDate: (date: dayjs.Dayjs) => void;
  nextMonth: () => void;
  prevMonth: () => void;
}

const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

export const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error('useCalendar must be used within a CalendarProvider');
  }
  return context;
};

export const CalendarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const nextMonth = () => {
    setCurrentDate((prev) => prev.add(1, 'month'));
  };

  const prevMonth = () => {
    setCurrentDate((prev) => prev.subtract(1, 'month'));
  };

  return (
    <CalendarContext.Provider value={{ currentDate, setCurrentDate, nextMonth, prevMonth }}>
      {children}
    </CalendarContext.Provider>
  );
};
