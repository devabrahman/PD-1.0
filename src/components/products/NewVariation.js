/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import DeleteIcon from 'components/SVGIcons/DeleteIcon';
import RightMarkIcon from 'components/SVGIcons/RightMarkIcon';
import SettingIcon from 'components/SVGIcons/SettingIcon';

import OptionIcon from 'assets/Images/products/OptionIcon.png';
import CheckMarkIcon from 'components/SVGIcons/CheckMarkIcon';

const NewVariation = ({ variation, setVariation, isVariable, setIsVariable }) => {
  const [variationList, setVariationList] = useState(variation);
  const [done, setDone] = useState(true);

  const addVariationValue = (itemIndex, valueIndex) => {
    const list = [...variationList];
    list[itemIndex].value[valueIndex + 1] = '';
    setVariationList(list);
  };

  const removeVariation = (itemIndex) => {
    const list = [...variationList];
    list.splice(itemIndex, 1);
    setVariationList(list);
  };

  const removeVariationValue = (itemIndex, valueIndex) => {
    const list = [...variationList];
    list[itemIndex].value.splice(valueIndex, 1);
    setVariationList(list);
  };

  const updateVariationName = (itemIndex, value) => {
    const list = [...variationList];
    list[itemIndex].name = value;
    setVariationList(list);
  };

  const updateVariationValue = (itemIndex, valueIndex, value) => {
    const list = [...variationList];
    list[itemIndex].value[valueIndex] = value;
    setVariationList(list);
  };

  const addVariation = () => {
    const list = [...variationList];
    list[list.length] = { name: '', value: [''] };
    setVariationList(list);
    setDone(false);
  };

  const handelDone = () => {
    setDone(true);
    setVariation(variationList);
  };
  return (
    <div className="my-5">
      <div className="flex gap-4">
        <img src={OptionIcon} alt="Option icon" className="h-6 w-5" />
        <h5 className="font-medium text-xl">Variations</h5>
      </div>

      <div className="border w-full border-[#D6D6D6]/60 py-2.5 rounded-xl my-2">
        <div className="ml-4 flex items-center gap-1.5">
          <div className="w-8 flex justify-center items-center">
            <input
              type="checkbox"
              checked={isVariable || false}
              className="check-input cursor-pointer"
              onChange={() => {}}
            />
            <label
              onClick={() => setIsVariable(isVariable ? false : true)}
              htmlFor="input-2"
              className={`checkbox dark:fill-dark cursor-pointer ${
                isVariable ? 'rounded-[9px] bg-[#48f685] w-6 h-6' : 'w-4 h-4 rounded-[4px]'
              }`}>
              <CheckMarkIcon className="dark:stroke-dark stroke-white" />
            </label>
          </div>
          <p>Add variation like Color, Size, etc</p>
        </div>

        {isVariable && (
          <>
            <hr className="h-0.5 my-2.5 w-full bg-[#CDCDCD]/20" />
            {variationList.map((item, itemIndex) => (
              <>
                <div className="w-3/5 mx-10 my-3">
                  <p>Variation name</p>
                  <div className="flex items-center">
                    <SettingIcon className="w-5 h-6 -ml-6 mr-6" />
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border pl-3 border-[#B9B9B9] bg-[#F8F8F8] h-9 mt-3 rounded-xl w-full pr-1.5 mr-6"
                      value={item?.name}
                      onChange={(event) => updateVariationName(itemIndex, event.target.value)}
                    />
                    {!done && (
                      <span onClick={() => removeVariation(itemIndex)} className="cursor-pointer">
                        <DeleteIcon className="w-7 h-10" />
                      </span>
                    )}
                  </div>
                </div>

                <div className="w-3/5 mx-14 my-3 mb-16">
                  <p className="ml-4">Variation values</p>

                  {item?.value?.map((value, valueIndex) => (
                    <div key={valueIndex} className="flex items-center">
                      <SettingIcon className="w-5 h-6 -ml-4 mr-6 opacity-25" />
                      <input
                        type="text"
                        name=""
                        id=""
                        className="border pl-3 border-[#B9B9B9] bg-[#F8F8F8] h-9 mt-3 rounded-xl w-4/5 pr-1.5 mr-6"
                        placeholder="Add another value"
                        value={value}
                        onChange={(event) =>
                          updateVariationValue(itemIndex, valueIndex, event.target.value)
                        }
                      />
                      {!done && (
                        <span
                          onClick={() => removeVariationValue(itemIndex, valueIndex)}
                          className="cursor-pointer mr-2">
                          <DeleteIcon className="w-8 h-10 " />
                        </span>
                      )}
                      {!done && item?.value?.length - 1 == valueIndex && (
                        <span onClick={() => addVariationValue(itemIndex, valueIndex)}>
                          <PlusIcon className="w-7 h-7 bg-[#1C92FF] text-white p-1 rounded-xl" />
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </>
            ))}

            {variationList?.length !== 0 && <hr className="h-0.5 w-11/12 bg-[#CDCDCD]/20 ml-6" />}
            <div className="flex justify-between items-center ml-5">
              <p onClick={addVariation} className="text-accent/80 cursor-pointer">
                + Add another option
              </p>
              {!done ? (
                <p
                  onClick={handelDone}
                  className="bg-primary text-xl px-8 py-2 rounded-xl text-white mr-5 my-2">
                  Done
                </p>
              ) : (
                <p
                  onClick={() => setDone(false)}
                  className="bg-primary text-xl px-8 py-2 rounded-xl text-white mr-5 my-2">
                  Edit
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NewVariation;
