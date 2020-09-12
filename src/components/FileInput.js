import React, { Fragment, useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const FileInput = ({ name, label, inputRef, validation, getValues, errors, submitted }) => {
  const [fileLength, setFileLength] = useState(0);
  const [fileList, setFileList] = useState([]);

  const onFileUpload = () => {
    const files = getValues("submissionProof");
    const tempFileList = [];

    Object.keys(files).forEach((key) => {
      if (key !== "length") {
        tempFileList.push(files[key].name);
      }
    });

    setFileLength(files.length);
    setFileList(tempFileList);
  };

  useEffect(() => {
    if (submitted) {
      setFileLength(0);
      setFileList([]);
    }
  }, [submitted]);

  return (
    <Fragment>
      <label
        htmlFor={name}
        className="w-100 flex flex-row justify-center px-3 py-2 mt-4 bg-background normal-case rounded-lg tracking-wide border border-blue cursor-pointer"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="ml-2 text-sm">{label}</span>
        <input
          id={name}
          name={name}
          type="file"
          className="w-0 h-0"
          multiple
          accept="image/*, .pdf"
          ref={inputRef({ required: true, ...validation })}
          onChange={onFileUpload}
        />
      </label>
      
      {errors && (
        <CSSTransition timeout={500} classNames="fade" key="fileUploads">
          <p className="text-sm text-primary mt-1">Unfortunately, your documents are required to complete this form.</p>
        </CSSTransition>
      )}

      <TransitionGroup>
        {fileLength > 0 && (
          <CSSTransition timeout={500} classNames="fade" key="fileUploads">
            <Fragment>
              <p className="text-sm">
                {fileLength} file{fileLength > 1 && "s"} uploaded
              </p>
              <ul className="text-sm list-disc ml-4 mt-2">
                {fileList && fileList.map((file) => <li key={file.split(' ').join('-')}>{file}</li>)}
              </ul>
            </Fragment>
          </CSSTransition>
        )}
      </TransitionGroup>
    </Fragment>
  );
};

export default FileInput;
