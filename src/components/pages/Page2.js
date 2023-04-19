import React from 'react';
import Chevron from '../../assets/img/chevron-double-left.svg';
import { Field } from 'formik';

const checkboxOptions = [
  { label: 'عادی', value: 'normal' },
  { label: 'برنزی', value: 'bronze' },
  { label: 'نقره ایی', value: 'silver' },
  { label: 'طلایی', value: 'gold' },
  { label: 'ويژه', value: 'special' }
];

const Page2 = (props) => {
  let { values, handleChange, handleSubmit, setFieldValue } = props;
  console.log(values);

  return (
    <>
      {/* <!-- form-sample section start  --> */}
      <form className="form-sample mt-4 col-12 col-md-10 text-right px-2">
        <div className="d-flex flex-column">
          <label className="mb-1">انتخاب سطح مشتریان :</label>
          {/* checkbox */}
          <div className="radio-box d-flex">
            {checkboxOptions.map((item) => (
              <label
                key={item.label}
                className={`d-inline-block p-2 px-3 ${
                  values.checkbox.includes(item.value) && 'active'
                } `}
              >
                {item.label}
                <input
                  className="position-absolute invisible"
                  value={item.value}
                  name="checkbox"
                  onChange={handleChange}
                  type="checkbox"
                />
              </label>
            ))}
          </div>
        </div>

        <div className="d-flex">
          <label className="w-100 d-flex flex-column mt-3">
            جنسیت :
            <select
              value={values.sex}
              onChange={handleChange}
              name="sex"
              className="form-control mt-1 text-bg-danger"
            >
              <option value="male">مذکر</option>
              <option value="female">مونث</option>
            </select>
          </label>

          <label className="d-flex flex-column w-100 mt-3 mr-2">
            محدوده سنی :
            <span className="d-flex age-range">
              <input
                type="text"
                placeholder="از سن"
                value={values.AgeRange[0]}
                onChange={(e) =>
                  setFieldValue("AgeRange[0]",e.target.value)
                }
                className="form-control mt-1"
              />
              <input
                type="text"
                placeholder="تا سن"
                value={values.AgeRange[1]}
                onChange={(e) =>
                  setFieldValue("AgeRange[1]",e.target.value)
                }
                className="form-control mt-1"
              />
            </span>
          </label>
        </div>

        <div className="d-flex">
          <label className="d-flex flex-column w-100 mt-3">
            میزان خرید :
            <span className="d-flex age-range">
              <input
                type="text"
                placeholder="از خرید (تومان)"
                value={values.PurchaseAmount[0]}
                onChange={(e) =>
                  setFieldValue("PurchaseAmount[0]", e.target.value)
                }
                className="form-control mt-1"
              />
              <input
                type="text"
                placeholder="تا خرید (تومان)"
                value={values.PurchaseAmount[1]}
                onChange={(e) =>
                  setFieldValue("PurchaseAmount[1]", e.target.value)
                }
                className="form-control mt-1"
              />
            </span>
          </label>
        </div>
        <div className="text-left mt-4 pt-2 btn-box d-flex justify-content-between align-items-center">
          <button
            onClick={() => props.SetStep((prev) => prev - 1)}
            className="btn btn-back py-2 px-1"
          >
            <img width="12px" src={Chevron} alt="chevron" />
            <span className="mr-1">مرحله قبل</span>
          </button>
          <button
            onClick={() => props.SetStep((prev) => prev + 1)}
            className="btn submit-btn py-2 px-3"
          >
            <span className="ml-1">تعیین پیامک</span>
            <img width="12px" src={Chevron} alt="chevron" />
          </button>
        </div>
      </form>
      {/* <!-- form-sample section end  --> */}
    </>
  );
};

export default Page2;
