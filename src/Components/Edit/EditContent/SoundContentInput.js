import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function audioToBase64(audioFile) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onerror = reject;
    reader.onload = (e) => resolve(e.target.result);
    reader.readAsDataURL(audioFile);
  });
}

function SoundContentInput({ content, onChange }) {
  const { url } = content;
  const [selectedFile, onSelectFile] = useState();

  function handleFileSelection(e) {
    const file = e.target.files[0];
    onSelectFile(file);
  }

  function handleUplaod(e) {
    audioToBase64(selectedFile).then((url) => onChange({ ...content, url }));
  }

  return (
    <>
      {url ? (
        <>
          <div className="d-flex justify-content-center">
            <audio controls src={url} />
          </div>
        </>
      ) : (
        <div className="">
          <Form.Label>Mp3 formatında bir ses dosyası yükleyin.</Form.Label>
          <div className="d-flex gap-2">
            <Form.Control type="file" accept="audio/mp3" onChange={handleFileSelection} />
            <Button disabled={selectedFile ? false : true} onClick={handleUplaod}>
              Yükle
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default SoundContentInput;
