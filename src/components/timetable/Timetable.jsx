import React from 'react';
import { Card, Table } from 'react-bootstrap';

import RequestIndicator from './RequestIndicator';
import Notification from './Notification';

const Timetable = () => {
  const daysOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

  const generateTimeSlots = () => {
    const blockedTimeSlots = [
        { dayIndex: 1, slotIndex: 1 },
        { dayIndex: 1, slotIndex: 2 },
        { dayIndex: 1, slotIndex: 3 },
        { dayIndex: 1, slotIndex: 4 }, 
        { dayIndex: 1, slotIndex: 5 }, 
      ];
    
      const isCellActive = (slotIndex, dayIndex) => {
        return !blockedTimeSlots.some((blockedSlot) => blockedSlot.slotIndex === slotIndex && blockedSlot.dayIndex === dayIndex);
      };
  
    const timeSlots = Array.from({ length: 7 }, (_, slotIndex) => (
      <tr key={slotIndex}>
        <td style={{ fontSize: '12px', textAlign: 'center'}}>10:35 - 12:10</td>
        {[...Array(7)].map((_, dayIndex) => (
          <td key={dayIndex} style={{
            backgroundColor: isCellActive(slotIndex, dayIndex) ? 'white' : 'lightgrey',
            color: isCellActive(slotIndex, dayIndex) ? 'black' : 'white',
            minWidth:'8rem',
            position: 'relative',
            }}>
                {shouldShowLesson() &&  isCellActive(slotIndex, dayIndex) && (
                <RequestIndicator name="Иванов Иван Иванович" role={shouldShowLesson() ? 'Student' : 'Teacher'} />
                )}
                {shouldShowLesson() && isCellActive(slotIndex, dayIndex) && (<Notification />)}
          </td>
        ))}
      </tr>
    ));
  

    return timeSlots;
  };

  const shouldShowLesson = () => {
    return Math.random() < 0.5; 
  };

  const renderHeaderRow = () => (
    <tr>
      <th></th>
      {daysOfWeek.map((day, index) => (
        <th key={index} style={{ background: 'none', fontSize: '16px' }}>
          {day} <br />
          {new Date().toLocaleDateString('ru-RU', { month: 'short', day: 'numeric' })}
        </th>
      ))}
    </tr>
  );

  return (
    <Card style={{ margin: '0', padding: '0' }}>
        <Table bordered style={{ margin: '0', padding: '0'}} responsive={true}>
            <thead>{renderHeaderRow()}</thead>
            <tbody>{generateTimeSlots()}</tbody>
        </Table>
        
  </Card>
  );
};

export default Timetable;



