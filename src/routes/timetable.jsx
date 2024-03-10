import React from 'react';
import RoomPicker from '../components/timetable/RoomPicker';
import Timetable from '../components/timetable/Timetable';

const TimetablePage = () => {

  return (
    < div style={{ width: '80%', margin: '0 auto' }}>
        <RoomPicker />
        <Timetable />
    </div>
  );
};

export default TimetablePage;