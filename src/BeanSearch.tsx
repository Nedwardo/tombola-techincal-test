import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Bean } from './bean';
import BeanListComponent from './BeanList';
import { useEffect, useState } from 'react';

export default function BeanSearchComponent(props: {beans: Bean[]}) {
  const [beanSearchFieldValue, setSearchField] = useState('');
  const [filteredBeans, setFilteredBeans] = useState<Bean[]>(props.beans);

  useEffect(() =>{
    setFilteredBeans(
      props.beans.filter(
        bean => bean.Name.toLowerCase().includes(beanSearchFieldValue.toLowerCase())
      )
    )
  }, [beanSearchFieldValue, props.beans]);
  
  return (
    <>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <TextField id="bean-search-box" label="Search Beans" variant="outlined" value={beanSearchFieldValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSearchField(event.target.value);
        }}/>
      </Box>
      <BeanListComponent beans={filteredBeans}/>
    </>
  );
}