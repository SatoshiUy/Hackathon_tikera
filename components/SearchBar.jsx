import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useRouter } from 'next/router';
import  {Button} from '@mui/material'
export default function SearchBar() {
  const router = useRouter()
  const [category, setCategory] = React.useState('logo');
  console.log(category)
  return (
    <>
      <Autocomplete
        disablePortal
        autoHighlight
        clearOnEscape
        id="combo-box-demo"
        options={categories}
        sx={{ width: 300, margin:'15px 0' }}
        renderInput={(params) => <TextField variant="filled" {...params} label="Category" 
          
        />}
        onChange={(event, value) => {
          setCategory(value.label);
          console.log(value.label)
        }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ width: '200px', fontSize: '16px' }}
        onClick={() => {
          if(category){
            router.push({
              pathname: '/request',
              query: {category: category.toLowerCase()},
            })
          }
        }}
      >
        Getting Started
      </Button>
      
    </>
  );
}

const categories = [
  { label: 'Logo', category: 'Logo' },
  { label: 'Inforgraphic', category: 'Inforgraphic' },
  { label: 'Poster', category: 'Poster' },
  { label: 'Banner', category: 'Banner' },
  { label: 'Standee', category: 'Standee' },
];

