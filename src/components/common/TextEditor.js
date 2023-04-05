import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const TextEditor = ({ description = '' }) => {
  const [content, setContent] = useState(description);

  const editor = useRef(null);
  const config = useMemo(() => {
    return { readonly: false, placeholder: 'Start typings ...' };
  }, []);
  return (
    <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-lightDark">
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        // onChange={(newContent) => {}}
      />
    </div>
  );
};

export default TextEditor;
