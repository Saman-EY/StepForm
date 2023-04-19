import React from 'react';
import Chevron from '../../assets/img/chevron-double-left.svg';
import CheckCircle from '../../assets/img/check2-circle.svg';

const Page4 = (props) => {
  let { values, handleSubmit} = props;
  console.log(values);

  return (
    <>
      <form onSubmit={handleSubmit} className="form-sample final-result mt-4 col-12 col-md-10 text-right px-2">
        <div className="d-flex">
          <label className="w-100 p-2 rounded">
            {/* عنوان کمپین :<span className="item-field mr-2">عید فطر ۱۴۰۲</span> */}
            عنوان کمپین :
            <span className="item-field mr-2">{values.CampaignTitle}</span>
          </label>
        </div>

        <div className="d-flex mt-3">
          <label className="w-100 p-2 rounded">
            {/* نوع کد تخفیف :<span className="item-field mr-2">درصدی</span> */}
            نوع کد تخفیف :
            <span className="item-field mr-2">{values.DiscountType}</span>
          </label>
          <label className="w-100 p-2 rounded mr-2">
            میزان درصد تخفیف :
            <span className="item-field mr-2">{values.DiscountPercent}٪</span>
          </label>
        </div>

        <div className="d-flex mt-3">
          <label className="w-100 p-2 rounded">
            {/* حداکثر مبلغ تخفیف :<span className="item-field mr-2">۳۰٪</span> */}
            حداکثر مبلغ تخفیف :
            <span className="item-field mr-2">
              {values.MaximumDiscountAmount &&
                `${values.MaximumDiscountAmount} تومان`}
            </span>
          </label>
        </div>

        <div className="d-flex mt-3">
          <label className="w-100 p-2 rounded">
            تاریخ شروع :<span className="item-field mr-2">۱۴۰۲/۰۱/۱۲</span>
          </label>
          <label className="w-100 p-2 rounded mr-2">
            تاریخ اتمام :<span className="item-field mr-2">۱۴۰۲/۰۱/۲۲</span>
          </label>
        </div>

        <div className="d-flex mt-3">
          <label className="w-100 d-flex flex-column p-2 rounded">
            متن پیامک :
            <span className="item-field message-box-show mt-2 py-3">
              {values.SMSText}
            </span>
          </label>
        </div>

        <div className="d-flex mt-3">
          <label className="w-100 p-2 rounded">
            تعداد مخاطب :<span className="item-field mr-2">۴۳۴ نفر</span>
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

          <button type='submit' className="btn submit-btn py-2 px-3">
            <img width="14px" src={CheckCircle} alt="check" />
            <span className="mr-1">تایید نهایی</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default Page4;
