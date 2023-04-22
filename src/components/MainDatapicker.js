import React, { useState } from 'react';
// import "react-modern-calendar-datepicker/lib/DatePicker.css";
// import DatePicker from "react-modern-calendar-datepicker";
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';

const MainDatapicker = (props) => {
  let { values, handleChange, setFieldValue } = props;
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null
  });
  // const [selectedDay1, setSelectedDay1] = useState(null);
  // const [selectedDay2, setSelectedDay2] = useState(null);

  const renderCustomInput1 = ({ ref }) => (
    <input
      ref={ref}
      placeholder="انتخاب کنید"
      defaultValue={values.StartDate}
      className="form-control p-2"
    />
  );

  const renderCustomInput2 = ({ ref }) => (
    <input
      ref={ref}
      placeholder="انتخاب کنید"
      defaultValue={values.EndDate}
      className="form-control p-2"
    />
  );

  // console.log(values);

  // let ChangeValue1 = (e) => {
  //   const year = e.year;
  //   const month = String(e.month).padStart(2, '0');
  //   const day = String(e['day']).padStart(2, '0');
  //   const formattedDate = `${year}/${month}/${day}`;
  //   setSelectedDay1(e);
  //   setFieldValue('StartDate', formattedDate);
  // };

  // let ChangeValue2 = (e) => {
  //   const year = e.year;
  //   const month = String(e.month).padStart(2, '0');
  //   const day = String(e['day']).padStart(2, '0');
  //   const formattedDate = `${year}/${month}/${day}`;
  //   setSelectedDay2(e);
  //   setFieldValue('EndDate', formattedDate);
  // };

  let ChangeValue = (e) => {
    let array = [e.from, e.to];
    if (array) {
      array.forEach((item, index) => {
        if (item) {
          const year = item.year;
          const month = String(item.month).padStart(2, '0');
          const day = String(item['day']).padStart(2, '0');
          const formattedDate = `${year}/${month}/${day}`;
          index === 0
            ? setFieldValue('StartDate', formattedDate)
            : setFieldValue('EndDate', formattedDate);
        }
      });
    }
    setSelectedDayRange(e);
  };

  return (
    <>
      <div className="d-flex">
        {/* <label className="d-flex flex-column w-100 mt-3">
          <span className="mb-1">تاریخ شروع :</span>
          <DatePicker
            value={selectedDay1}
            onChange={(e) => ChangeValue1(e)}
            renderInput={renderCustomInput1}
            className="form-control p-2"
            shouldHighlightWeekends
            locale={'fa'}
          />
        </label>
        <label className="d-flex flex-column w-100 mt-3 mr-2">
          <span className="mb-1">تاریخ پایان :</span>
          <DatePicker
            value={selectedDay2}
            onChange={(e) => ChangeValue2(e)}
            renderInput={renderCustomInput2}
            shouldHighlightWeekends
            locale={'fa'}
          />
        </label> */}
        <label className="d-flex flex-column w-100 mt-3">
          <span className="mb-1">تاریخ شروع :</span>
          <DatePicker
            value={selectedDayRange}
            onChange={(e) => ChangeValue(e)}
            renderInput={renderCustomInput1}
            inputPlaceholder="Select a day range"
            shouldHighlightWeekends
            locale={'fa'}
          />
        </label>
        <label className="d-flex flex-column w-100 mt-3 mr-2">
          <span className="mb-1">تاریخ پایان :</span>
          <DatePicker
            value={selectedDayRange}
            onChange={(e) => ChangeValue(e)}
            renderInput={renderCustomInput2}
            inputPlaceholder="Select a day range"
            shouldHighlightWeekends
            locale={'fa'}
          />
        </label>
      </div>
    </>
  );
};

export default MainDatapicker;
