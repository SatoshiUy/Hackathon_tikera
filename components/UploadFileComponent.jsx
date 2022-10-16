// import { getStorage, storageRef } from 'firebase/storage';
import { useUploadFile } from 'react-firebase-hooks/storage';
import { storage } from '../config/firebase';

import React from 'react'

export default function UploadFileComponent() {
  const [uploadFile, uploading, snapshot, error] = useUploadFile();
  const ref = storageRef(storage, 'file');
  const [selectedFile, setSelectedFile] = useState('');

  const upload = async () => {
    if (selectedFile) {
      const result = await uploadFile(ref, selectedFile, {
        contentType: 'image/jpeg'
      });
      alert(`Result: ${JSON.stringify(result)}`);
    }
  }

  return (
    <div>
      <p>
        {error && <strong>Error: {error.message}</strong>}
        {uploading && <span>Uploading file...</span>}
        {snapshot && <span>Snapshot: {JSON.stringify(snapshot)}</span>}
        {selectedFile && <span>Selected file: {selectedFile.name}</span>}
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files ? e.target.files[0] : undefined;
            setSelectedFile(file);
          }}
        />
        <button onClick={upload}>Upload file</button>
      </p>
    </div>
)}