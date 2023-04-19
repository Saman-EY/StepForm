import React, { useState, useRef } from 'react';
import Chevron from '../../assets/img/chevron-double-left.svg';
import MainDatapicker from '../MainDatapicker';


const Page1 = (props) => {
  let { values, handleChange, handleSubmit, setFieldValue } = props;
  console.log(values);

  return (
    <>
      <form className="form-sample mt-4 col-12 col-md-10 text-right px-2">
        <div>
          <label className="d-flex flex-column w-100">
            عنوان کمپین :
            <input
              type="text"
              name="CampaignTitle"
              value={values.CampaignTitle}
              onChange={handleChange}
              className="form-control mt-2"
            />
          </label>
        </div>

       
        <MainDatapicker values={values} handleChange={handleChange} setFieldValue={setFieldValue} />
        

        <div className="d-flex flex-column mt-3">
          <label className="mb-1">نوع تخفیف :</label>
          <div
            name="DiscountType"
            onChange={handleChange}
            className="radio-box d-flex mt-2"
          >
            <label
              className={`p-2 ${values.DiscountType === 'درصدی' && 'active'}`}
            >
              <input
                name="DiscountType"
                checked={values.DiscountType === 'درصدی'}
                value={'درصدی'}
                type="radio"
                className="ml-1"
              />
              تخفیف درصدی
            </label>
            <label
              className={`p-2 ${values.DiscountType === 'مبلغی' && 'active'}`}
            >
              <input
                name="DiscountType"
                value={'مبلغی'}
                type="radio"
                className="ml-1"
              />
              تخفیف مبلغی
            </label>
          </div>
        </div>

        <section id="percent-box">
          <div>
            <label className="d-flex flex-column w-100 mt-3">
              درصد تخفیف :
              <div className="d-flex align-items-center percent-change px-2 mt-2">
                <p className="ml-2 d-flex align-items-center justify-content-center my-2">
                  {values.DiscountPercent}
                </p>
                <input
                  value={values.DiscountPercent}
                  type="range"
                  onChange={handleChange}
                  name="DiscountPercent"
                  max="100"
                  min="0"
                  className="form-control"
                />
              </div>
            </label>
          </div>

          <div>
            <label className="d-flex flex-column w-100 mt-3">
              حداکثر مبلغ تخفیف :
              <input
                placeholder="حداکثر مبلغ تخفیف (تومان)"
                name="MaximumDiscountAmount"
                value={values.MaximumDiscountAmount}
                onChange={handleChange}
                min="0"
                type="number"
                className="form-control mt-2"
              />
            </label>
          </div>
        </section>

        <section id="amount-box" className="d-none">
          <div>
            <label className="d-flex flex-column w-100 mt-3">
              مبلغ تخفیف :
              <input
                placeholder="مبلغ تخفیف (تومان)"
                min="0"
                type="number"
                className="form-control"
              />
            </label>
          </div>
          <div>
            <label className="d-flex flex-column w-100 mt-3">
              حداقل خرید :
              <input
                placeholder="حداقل خرید (تومان)"
                min="0"
                type="number"
                className="form-control"
              />
            </label>
          </div>
        </section>

        <div className="text-left mt-4 pt-2 btn-box">
          <button
            onClick={() => props.SetStep((prev) => prev + 1)}
            className="btn submit-btn py-2 px-3"
          >
            <span className="ml-1">تعیین مخاطبان</span>
            <img width="12px" src={Chevron} alt="chevron" />
          </button>
        </div>
      </form>
    </>
  );
};

export default Page1;
