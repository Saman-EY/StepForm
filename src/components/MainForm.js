import React, { useState } from 'react';
import { useFormik } from 'formik';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Tabbar from './Tabbar';

const MainForm = () => {
  // FORM STEP
  let [Step, SetStep] = useState(1);

  // FORMIK
  let formik = useFormik({
    initialValues: {
      CampaignTitle: '',
      DiscountType: 'درصدی',
      StartDate: '',
      EndDate: '',
      DiscountPercent: 0,
      MaximumDiscountAmount: '',
      checkbox: ['normal'],
      sex: 'male',
      AgeRange: ['', ''],
      PurchaseAmount: ['', ''],
      SMSFormat: 'NoFormat',
      SMSText: ''
    },
    onSubmit: (values) => {
      let data = values;

      console.log(data, 'original');
    }
  });

  let formikState = {
    values: formik.values,
    handleChange: formik.handleChange,
    handleSubmit: formik.handleSubmit,
    setFieldValue: formik.setFieldValue
  };

  // DISPLAY EACH STEP
  let DisplayPage = () => {
    if (Step === 1) {
      return <Page1 {...props} {...formikState} />;
    } else if (Step === 2) {
      return <Page2 {...props} {...formikState} />;
    } else if (Step === 3) {
      return <Page3 {...props} {...formikState} />;
    } else if (Step === 4) {
      return <Page4 {...props} {...formikState} />;
    }
  };

  let props = {
    Step,
    SetStep
  };

  return (
    <section className="container">
      <div className="px-1">
        <div className="row page-form-container py-4 my-5">
          <Tabbar {...props} />
          {DisplayPage()}
        </div>
      </div>
    </section>
  );
};

export default MainForm;
