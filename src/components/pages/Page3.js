import React from 'react';
import Chevron from '../../assets/img/chevron-double-left.svg';

const Page3 = (props) => {

  let { values, handleChange, handleSubmit, setFieldValue } = props;
  console.log(values);


  return (
    <>

      {/* <!-- form-sample section start  --> */}
      <form className="form-sample mt-4 col-12 col-md-10 text-right px-2">

        <div className="d-flex flex-column">
          <label className="d-flex flex-column w-100">
            قالب پیامک :
            <select value={values.SMSFormat} onChange={handleChange} name='SMSFormat' className="form-control mt-1">
              <option value="NoFormat">
                بدون قالب
              </option>
              <option value="TestFormat">قالب تست</option>
            </select>
          </label>
        </div>

        <div className="d-flex">
          <label className="d-flex flex-column w-100 mt-3">
            متن پیامک :
            <textarea
              placeholder="متن پیامک خود را بنویسید..."
              className="form-control mt-1 textarea py-2"
              rows="5"
              value={values.SMSText}
              onChange={handleChange}
              name='SMSText'
            ></textarea>
          </label>
        </div>

        <label className="sms-test">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="ml-2 bi bi-info-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg>
          پیامک آزمایشی به شماره ۰۹۱۲۳۴۵۶۷۸۹۰ ارسال میگردد.
        </label>

        <div className="text-left mt-4 pt-2 btn-box d-flex justify-content-between align-items-center">
          <button
            onClick={() => props.SetStep((prev) => prev - 1)}
            className="btn btn-back py-2 px-1"
          >
            <img width="12px" src={Chevron} alt="chevron" />
            <span className="mr-1">مرحله قبل</span>
          </button>
          <div>
            <button
              type="button"
              className="btn submit-btn py-2 px-3 add-field"
            >
              پیامک آزمایشی
            </button>
            <button
              onClick={() => props.SetStep((prev) => prev + 1)}
              className="btn submit-btn py-2 px-3 mr-1 "
            >
              <span className="ml-1">بررسی نهایی</span>
              <img className="mt-1" width="12px" src={Chevron} alt="chevron" />
            </button>
          </div>
        </div>

      </form>
      {/* <!-- form-sample section end  --> */}
    </>
  );
};

export default Page3;
