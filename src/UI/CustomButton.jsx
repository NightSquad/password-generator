import { Button } from "@mui/material";



function CustomButton(props) {
    return ( 
        <Button {...props} sx={{backgroundColor: "#648DE5", color: "#304C89" , width: '100%', marginTop: '20px', "&:hover":{backgroundColor: '#304C89', color: "#648DE5"}}}>{props.children}</Button>
     );
}

export default CustomButton;