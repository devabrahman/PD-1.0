/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { BiX } from 'react-icons/bi';

const ProductTag = () => {
  const [tagList, setTagList] = useState(['apple', 'lenovo']);
  const [tagName, setTagName] = useState('');

  const removeTag = (index) => {
    const newArr = [...tagList];
    newArr.splice(index, 1);
    setTagList(newArr);
  };

  const addNewTag = () => {
    event.preventDefault();
    setTagList((tag) => [...tag, tagName]);
    setTagName('');
    // console.log('🔐 -> file: ProductTag.js:16 -> addNewTag -> tag:', tag);
  };
  return (
    <div className="w-full rounded-xl input-accent-box-shadow mt-5 px-5 py-3">
      <label className="text-[#424141] font-medium text-base block">Tags</label>
      <p className="text-[10px] text-[#939090] flex justify-end m-0 p-0">Manage</p>
      <form onSubmit={addNewTag}>
        <input
          type="text"
          name="tag"
          id=""
          value={tagName}
          className="border border-accent/30 h-9 mt-3 rounded-xl w-full px-2.5 py-0.5"
          placeholder="Find or creat tags"
          onChange={() => setTagName(event.target.value)}
        />
      </form>
      <div className="flex mt-3 flex-wrap gap-y-2">
        {tagList.map((tag, i) => (
          <div key={i} className="bg-green/20 rounded-md w-min flex items-center mr-5 font-normal">
            <span className="text-xs py-1.5 px-3 font-medium">{tag}</span>
            <BiX onClick={() => removeTag(i, tag)} className="cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTag;
