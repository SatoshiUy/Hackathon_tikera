import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useUploadFile } from "react-firebase-hooks/storage";
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage'
import { v4 } from "uuid";
import { storage } from "../config/firebase";
import { useRouter } from "next/router";

export default function PrivatePage({request}) {
  const [imageUpload, setImageUpload] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const router = useRouter()

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImageUpload(i);
      setCreateObjectURL(URL.createObjectURL(i));
      console.log(URL.createObjectURL(i))
    }
  };

  const imagesListRef = ref(storage, "images/");
  const uploadFile = async () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    await uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        request = {...request, url}
      });
    });
    return request;
  };

  const uploadToServer = async () => {
    await fetch(`https://w7kp3tssu4.execute-api.ap-southeast-1.amazonaws.com/Prod?Category=${request.category}&Description=${request.description}&Type=${request.type}&Style=${request.style}&ImageReference=${request.url}`, {
      method: "POST"
    })
    .then((response) => response.json())
    .then((data) => router.push({
      pathname: `/suggest/${data}`
    }));
  };
  return (
    <div>
      <Box sx={{display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
        <Typography sx={{fontSize:'40px'}}>Add Reference</Typography>
        <Typography sx={{fontSize:'20px'}} my={2}>By telling us more about what you do, we can create better designs for you.</Typography>
        <img src={createObjectURL} style={{maxWidth: '300px', maxHeight:'300px'}}/>
        <input type="file" name="myImage" onChange={uploadToClient} style={{margin: '10px 0'}}/>
        <Button
          variant="contained"
          color="success"
          sx={{ width: '150px', fontSize: '16px', marginTop: '10px' }}
          onClick={() => {
            uploadFile();
            setTimeout(uploadToServer, 1000)
          }}
        >
          Complete
        </Button>
      </Box>
    </div>
  );
}
