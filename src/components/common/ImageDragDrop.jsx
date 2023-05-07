import { XMarkIcon } from '@heroicons/react/24/outline';
import ImageIcon from 'components/SVGIcons/ImageIcon';
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0
  // overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

const ImageDropDown = () => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: (acceptedFiles) => {
      setFiles((prevFile) => {
        const newFileList = [...prevFile, ...acceptedFiles];
        return newFileList.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        );
      });
    }
  });

  const removeThumbnail = (file, index) => {
    const newArr = [...files];
    newArr.splice(index, 1);
    setFiles(newArr);
  };

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <>
      <div className="max-w-sm">
        <div className="flex justify-center w-full h-44 px-4 transition bg-white dark:bg-dark border-2 border-gray-300 dark:border-darkBorder border-dashed rounded-3xl appearance-none cursor-pointer hover:border-gray-400 focus:outline-none items-center">
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <div className="flex justify-center py-3">
              <ImageIcon />
            </div>
            <span className="flex items-center space-x-2">
              <span className="font-medium text-gray-600 dark:text-[#CDCDCD]">
                Drop your image here, or
                <span className="text-blue-600"> browse</span>
                <p className="text-center text-[#CDCDCD]">JPG, PNG,JPEG </p>
              </span>
            </span>
          </div>
        </div>
        <aside style={thumbsContainer}>
          {files.map((file, index) => (
            <div style={thumb} key={file.name}>
              <div className="relative group" style={thumbInner}>
                <img
                  src={file.preview}
                  style={img}
                  // Revoke data uri after image is loaded
                  className="object-contain"
                  onLoad={() => {
                    URL.revokeObjectURL(file.preview);
                  }}
                />
                <span
                  onClick={() => removeThumbnail(file, index)}
                  className="hidden absolute right-0 w-4 h-4 bg-red-600 rounded-full group-hover:inline-flex items-center justify-center cursor-pointer">
                  <XMarkIcon className="w-4 text-white" />
                </span>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </>
  );
};
export default ImageDropDown;
