import { UploadFile } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import { Box, Container, flexbox } from "@mui/system";
import { useRouter } from "next/router";
import { useState } from "react";
import InputContainer from '../components/InputContainer'
// You can use a query string to set the step and `router.push(href, as)` to handle the form steps within the same page but have different URLs displayed
import UploadFileComponent from './UploadFileComponent'
import PrivatePage from './UploadFile'
import EditPage from "../pages/edit";

export default function LogoRequest() {
  const [step, setStep] = useState(0);

  const router = useRouter();
  const {category} = router.query;
  const [vl, setVl] = useState('')
  const [request, setRequest] = useState({category});
  const stepTotal = ['description', 'type', 'style'];
  console.log(request)
  return (
    <Box>
      <Box sx={{display:flexbox, justifyContent: 'center', alignItems: 'center'}}>
        <Container sx={{height:'80vh', width: '60vw', marginTop:'75px', display: 'flex', justifyContent:'center', alignItems:'center', flexDirection: 'column'}}>
          { step >= stepTotal.length ? (<>
            <PrivatePage request={request}/>
          
          </>) : (
            <>
              <Typography sx={{fontSize:'40px'}}>Enter {stepTotal[step]}</Typography>
              <Typography sx={{fontSize:'25px'}} my={5}>By telling us more about what you do, we can create better designs for you.</Typography>
              <TextField
                  id="outlined-textarea"
                  label={stepTotal[step]}
                  placeholder={stepTotal[step]}
                  multiline
                  fullWidth
                  value = {vl}
                  onChange={(e) => {
                    setVl(e.target.value);
                  }}

                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ width: '150px', fontSize: '16px', marginTop: '10px' }}
                  onClick={() => {
                    if (step >= stepTotal.length) {
                      
                    } else {
                      setStep(step+1);
                      console.log({[stepTotal[step]]:vl})
                      const a = {[stepTotal[step]]:vl};
                      console.log(request,a);
                      setRequest({...request,...a})
                      setVl("")
                    }
                  }}
                >
                Next
              </Button>
            </>
          )}
        </Container>
      </Box>
    </Box>
  );
}