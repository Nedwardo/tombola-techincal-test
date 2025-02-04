import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { CartContext } from './CartContext';
import { ChangeEvent, Dispatch, useContext } from 'react';
import { Bean } from './Bean';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
}));

function filterBeans(beans: Bean[], setFilteredBeans: Dispatch<React.SetStateAction<Bean[]>>, beanSearchValue: string) {
  setFilteredBeans(
    beans.filter(
      bean => bean.Name.toLowerCase().includes(beanSearchValue.toLowerCase())
    )
  )
}

export default function BeanAppBar(props: {beans: Bean[], setFilteredBeans: Dispatch<React.SetStateAction<Bean[]>>}) {
  const { setShowCart } = useContext(CartContext);

  return (
    <>
    <Box sx={{ flexGrow: 1, display: "flex", marginBottom: "20px" }}>
      <AppBar position="static">
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {filterBeans(props.beans, props.setFilteredBeans, event.target.value)}}
            />
          </Search>
          <Box sx={{ flexGrow: 1}} />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => setShowCart(true)}
          >
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}
