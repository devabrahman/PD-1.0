import React, { useState, useRef, useMemo } from 'react';
import SearchEngineIcon from 'assets/Images/products/SearchEngineIcon.png';
import JoditEditor from 'jodit-react';

const MetaSection = () => {
  const [content, setContent] = useState('');
  const editor = useRef(null);
  const config = useMemo(() => {
    return {
      readonly: false,
      placeholder:
        'Add a description to see how this product might appear in a search engine listing  ...'
    };
  }, []);

  return (
    <div className="my-5">
      <div className="flex gap-2">
        <img src={SearchEngineIcon} alt="Option icon" className="h-6 w-5" />
        <h5 className="font-medium text-xl">Search engine listing</h5>
      </div>
      <p className="text-xs pt-4 text-[#302323]">
        Add a title and description to see how this product might appear in a search engine listing
      </p>
      <form action="">
        <div className="mt-5">
          <label htmlFor="title" className="text-[19px] font-medium text-[#302323]">
            Page Title
          </label>
          <input
            type="text"
            name="Title"
            id="title"
            className="border border-[#D6D6D6]/70 mt-3 rounded-xl w-full py-2.5 pl-3 pr-1.5"
            placeholder="Add a title "
          />
        </div>

        <div className="mt-6">
          <label htmlFor="title" className="text-[19px] font-medium text-[#302323]">
            Meta description
          </label>

          <div className="shadow-[0px_4px_10px rgba(0, 0, 0, 0.15)] border border-[#D6D6D6]/70 mt-3 rounded-xl w-full">
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              // onChange={(newContent) => {}}
            />
          </div>
        </div>

        <div className="mt-3">
          <label htmlFor="title" className="text-[19px] font-medium text-[#302323]">
            URL
          </label>
          <input
            type="text"
            name="Title"
            id="title"
            className="border border-[#D6D6D6]/70 mt-3 rounded-xl w-full py-1.5 pl-3 pr-1.5"
          />
        </div>
      </form>
    </div>
  );
};

export default MetaSection;
