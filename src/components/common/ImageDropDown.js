import React from 'react';
import ImageIcon from '../SVGIcons/ImageIcon';

const ImageDropDown = () => {
  return (
    <>
      <div className="max-w-sm">
        <label className="flex justify-center w-full h-44 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-3xl appearance-none cursor-pointer hover:border-gray-400 focus:outline-none items-center">
          <div className="">
            <div className="flex justify-center py-3">
              <ImageIcon className="" />
            </div>
            <span className="flex items-center space-x-2">
              <span className="font-medium text-gray-600">
                Drop your image here, or
                <span className="text-blue-600"> browse</span>
                <p className="text-center text-[#CDCDCD]">JPG, PNG,JPEG </p>
              </span>
            </span>
          </div>
          <input type="file" name="file_upload" className="hidden" />
        </label>
      </div>
    </>
  );
};
export default ImageDropDown;
