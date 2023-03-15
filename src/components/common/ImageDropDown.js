import ImageIcon from 'components/SVGIcons/ImageIcon';
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
// import ImageIcon from '../SVGIcons/ImageIcon';

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
  minWidth: 0,
  overflow: 'hidden'
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

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);
  console.log('🔐 -> file: ImageDropDown.js:73 -> useEffect -> files:', files);

  return (
    /*
    <section className="container">
    <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag drop some files here, or click to select files</p>
        </div>
        <aside style={thumbsContainer}>{thumbs}</aside>
        </section>
        */

    <>
      <div className="max-w-sm">
        <div className="flex justify-center w-full h-44 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-3xl appearance-none cursor-pointer hover:border-gray-400 focus:outline-none items-center">
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
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
        </div>
        <aside style={thumbsContainer}>
          {thumbs}
          sdfsd
        </aside>
      </div>
    </>
  );
};
export default ImageDropDown;
