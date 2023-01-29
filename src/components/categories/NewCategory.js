import React from 'react';
import CategoryPic from '../../Images/CategoryPic.png';

const NewCategory = () => {
  return (
    <>
      <div className="grid grid-cols-2 auto-cols-max">
        <div className="w-72 h-78 mt-5">
          <img src={CategoryPic} alt="Category Icon" className="mx-auto align-middle" />
        </div>
        <div>
          <form>
            <label>Hello</label>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewCategory;
