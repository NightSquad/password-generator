import { Box, IconButton, Stack, Switch, Collapse, Alert } from '@mui/material';
import { useState } from 'react';
import './App.css';
import generatePassword from './functions/generatePassword';
import CustomButton from './UI/CustomButton';
import GroupBox from './UI/GroupBox/GroupBox';
import CustomSlider from './UI/slider';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function App() {
  const [settings, setSettings] = useState({"UpperCase": true, "LowerCase": false, "numbers": false, "symbols": false})
  const [password, setPassword] = useState("password")
  const [length, setLength] = useState(4)
  const [open, setOpen] = useState(false)

  const handleChange = (id) => {
    setSettings({...settings, [id]: !settings[id]})
  }

  const lenghtChange = (event, newValue) => {
    setLength(newValue)
  }

  const handleClick = () => {
    setPassword(generatePassword(length, settings))
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(password).then(() => {
      setOpen(true)
      setTimeout(() => setOpen(false), 3000)
    })
  }

  return (
    <div className="App">
      <Box
      sx={{
        marginTop: '50%',
        width: 300,
        height: "fit-content",
        backgroundColor: '#9EB7E5',
        padding: '15px',
        borderRadius: '10px'
      }}
      >
        <p className='title'>Password Generator</p>
        <GroupBox>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
          <p style={{width: '90%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{password}</p>
          <IconButton onClick={handleCopy}><ContentCopyIcon/></IconButton>
          </Stack>
        </GroupBox>
        <Collapse in={open}>
        <Alert sx={{marginTop: '5px'}} variant="filled" severity="success">
          Copied!
        </Alert>
      </Collapse>
        <GroupBox label="LENGTH">
          <CustomSlider onChange={lenghtChange} min={4} max={28}/>
        </GroupBox>
        <GroupBox label="SETTINGS">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <span className='settingsTitle'>Include Uppercase</span>
            <Switch
              id='UpperCase'
              checked={settings['UpperCase']}
              onChange={(e) => handleChange(e.target.id)}
            />
          </Stack>
        </GroupBox>
        <GroupBox>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <span className='settingsTitle'>Include Lowercase</span>
            <Switch
              id='LowerCase'
              checked={settings["LowerCase"]}
              onChange={(e) => handleChange(e.target.id)}
            />
          </Stack>
        </GroupBox>
        <GroupBox>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <span className='settingsTitle'>Include Numbers</span>
            <Switch
              id='numbers'
              checked={settings["numbers"]}
              onChange={(e) => handleChange(e.target.id)}
            />
          </Stack>
        </GroupBox>
        <GroupBox>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <span className='settingsTitle'>Include Symbols</span>
            <Switch
              id='symbols'
              checked={settings["symbols"]}
              onChange={(e) => handleChange(e.target.id)}
            />
          </Stack>
        </GroupBox>
        <CustomButton onClick={handleClick}>Generate Password</CustomButton>
      </Box>
    </div>
  );
}

export default App;
