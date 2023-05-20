import React from 'react';

const ProductPrimaryImage = () => {
  return (
    <div className="w-full rounded-xl overflow-hidden input-accent-box-shadow mt-5 px-5 pt-3 pb-5 bg-white dark:bg-dark">
      <label htmlFor="primary-image font-medium">Primary picture</label>
      <input
        type="file"
        name="primary-image"
        id="primary-image"
        className="w-full border dark:bg-lightDark border-gray-200 rounded-lg mt-4 text-xs bg-transparent"
      />
    </div>
  );
};

export default ProductPrimaryImage;
