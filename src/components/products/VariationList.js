/* eslint-disable no-unused-vars */
import EditIcon from 'components/SVGIcons/Editicon';
import SettingIcon from 'components/SVGIcons/SettingIcon';
import { BiX } from 'react-icons/bi';

const VariationList = ({ variation, setVariation }) => {
  return (
    <div className="my-5">
      <div className="flex">
        <label className="block font-medium text-xl ml-2">Variations</label>
      </div>
      <div className="border w-full border-[#D6D6D6]/60 rounded-xl my-2">
        {Array.isArray(variation) &&
          variation.length > 0 &&
          variation.map((variable, index) => (
            <div key={index} className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex">
                  <SettingIcon className="w-5 h-6 mr-7" />
                  <p className="text-xl font-medium capitalize">{variable?.name}</p>
                </div>
                <EditIcon />
              </div>
              <div className="flex">
                {variable?.value?.map((item, i) => (
                  <div key={i} className="bg-green/20 rounded-md w-min flex items-center ml-10">
                    <span className="text-xs py-1.5 px-2 font-medium">{item}</span>
                    <BiX />
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default VariationList;
