import React, { useState } from 'react';

const Tabbar = (props) => {
  let { Step, SetStep } = props;

  return (
    <>
      <div className="col-12">
        <div className="w-100 d-flex tabbar font-weight-bold mb-2">
          <div
            className={`tabbar-item w-100 d-flex flex-column justify-content-center align-items-center active`}
          >
            <button
              onClick={() => SetStep(1)}
              className="item d-flex align-items-center justify-content-center mb-1"
            >
              ۱
            </button>
            <span>تعریف کمپین</span>
          </div>
          <div
            className={`tabbar-item w-100 d-flex flex-column justify-content-center align-items-center ${
              Step === 2 || Step === 3 || Step === 4 ? 'active' : null
            } `}
          >
            <button
              onClick={() => SetStep(2)}
              className="item d-flex align-items-center justify-content-center mb-1"
            >
              ۲
            </button>
            <span>تعیین مخاطبان</span>
          </div>
          <div
            className={`tabbar-item w-100 d-flex flex-column justify-content-center align-items-center ${
              Step === 3 || Step === 4 ? 'active' : null
            } `}
          >
            <button
              onClick={() => SetStep(3)}
              className="item d-flex align-items-center justify-content-center mb-1"
            >
              ۳
            </button>
            <span>تعریف پیامک</span>
          </div>
          <div
            className={`tabbar-item w-100 d-flex flex-column justify-content-center align-items-center ${
              Step === 4 ? 'active' : null
            } `}
          >
            <button
              onClick={() => SetStep(4)}
              className="item d-flex align-items-center justify-content-center mb-1"
            >
              ۴
            </button>
            <span>بررسی نهایی</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabbar;
