import { Box } from "@mui/material";
import styles from './GroupBox.module.css'

function GroupBox(props) {
    return ( 
        <div className={styles.GroupBox}>
            <p className={styles.label}>{props.label}</p>
            <Box
                {...props}
                sx={{
                backgroundColor: '#648DE5',
                padding: '10px',
                borderRadius: '5px'
                }}
            >
                {props.children}
            </Box>
        </div>
     );
}

export default GroupBox;