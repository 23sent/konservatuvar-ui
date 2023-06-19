import React, { useState } from 'react';
import { Button, CloseButton, Form, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

function ImageContentInput({ content, onChange }) {
  const { url } = content;

  const [selectedFile, onSelectFile] = useState();
  const dispatch = useDispatch();

  function handleFileSelection(e) {
    const file = e.target.files[0];
    onSelectFile(file);
  }

  function handleUplaod(e) {
    toBase64(selectedFile).then((url) => onChange({ ...content, url: url }));
  }

  return (
    <>
      {url ? (
        <>
          <div className="" style={{ maxWidth: '500px', maxHeight: '500px' }}>
            <Image src={url} alt="" height="200"></Image>
          </div>
        </>
      ) : (
        <div className="">
          <Form.Label>Jpeg formatında bir resim dosyası.</Form.Label>
          <div className="d-flex gap-2">
            <Form.Control type="file" accept="image/jpeg" onChange={handleFileSelection} />
            <Button disabled={selectedFile ? false : true} onClick={handleUplaod}>
              Yükle
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageContentInput;
