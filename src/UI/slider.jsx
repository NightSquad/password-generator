import { Slider, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const PrettoSlider = styled(Slider)({
    color: '#304C89',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#304C89',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });

function CustomSlider(props) {
    return ( 
        <Stack spacing={2} direction="row" alignItems="center">
            <span>{props.min}</span>
            <PrettoSlider
            {...props}
            size="small"
            aria-label="Small"
            valueLabelDisplay="auto"
            />
            <span>{props.max}</span>
      </Stack>
     );
}

export default CustomSlider;