import React from 'react';

const Test = () => {
  return (
    <form className="h-screen bg-gray-900 flex justify-center items-center">
      <div>
        <label className="customCheckBox" htmlFor="customCheckBox"></label>
        <input type="checkbox" className="customCheckBoxInput" id="customCheckBox" />
      </div>
    </form>
  );
};

export default Test;
