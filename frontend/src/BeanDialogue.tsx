import { Bean } from "./Bean";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import BeanCardComponent from "./BeanCardComponent";
import AddToCartComponent from "./AddToCartComponent";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

export default function BeanDialogue(props: {bean: Bean, open: boolean, closeDialogue: () => void}) {
  return (
      <BootstrapDialog
      onClose={props.closeDialogue}
      aria-labelledby={props.bean.Name + " detailed view"}
      open={props.open}
    >
          <DialogTitle sx={{ m: 0, p: 2, "textAlign": "center" }} id={props.bean.Name + " detailed view"}>
              {props.bean?.Name}
          </DialogTitle>
          <IconButton
          aria-label="close"
          onClick={props.closeDialogue}
          sx={(theme) => ({
              position: 'absolute',
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
          })}>
              <CloseIcon />
          </IconButton>
      <BeanCardComponent bean={props.bean} showDetailed={true}/>
      <AddToCartComponent bean={props.bean}/>
    </BootstrapDialog>
  )
}