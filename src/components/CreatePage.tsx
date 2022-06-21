import React, { useState } from 'react'
import {  Button, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../utils/store';
import { ChangeCurrentShake } from '../utils/store/CurrentShakeReducer';
import { useNavigate } from 'react-router-dom';
type Props = {}

const CreatePage = (props: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const creamList = useSelector<RootState, string[][]>((state) => state.list.cream);
  const milkList = useSelector<RootState, string[][]>((state) => state.list.milk);
  const syrupList = useSelector<RootState, string[][]>((state) => state.list.syrup);
  const tubuleList = useSelector<RootState, string[][]>((state) => state.list.tubule);

  const [creamValue, setCreamValue] = useState<string>(`${creamList[0][1]}`)
  const [milkValue, setMilkValue] = useState<string>(`${milkList[0][1]}`)
  const [syrupValue, setSyrupValue] = useState<string>(`${syrupList[0][1]}`)
  const [tubuleValue, setTubuleValue] = useState<string>(`${tubuleList[0][1]}`)


  


  const createShake = () => {
    dispatch(ChangeCurrentShake(['true',creamValue,milkValue,syrupValue,tubuleValue]))
    toCreate()
  };
  
  const toCreate = () =>{
    navigate(`/shake/${creamValue}/${milkValue}/${syrupValue}/${tubuleValue}`)
  }
  const toHome = () =>{
    navigate(`/home`)
  }
  

  return (
    <>
      <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" width={"100%"} height={"100vh"}>

      <Grid container direction="column" justifyContent="space-around" alignItems="center" width={"50%"} bgcolor='background.secondary' height={"120vh"}>
        <Grid className='big' container direction="column" justifyContent="space-around" alignItems="center" width={"50%"} bgcolor='background.secondary' height={"50vh"}>
        <Typography variant="h4" component="div">
          Create your own cocktail
        </Typography>
        <TextField 
          select
          label="cream"
          defaultValue={creamList[0][0]}
          sx={{ width: 300 }}
          onChange={(e) => setCreamValue(e.target.value)}
          value={creamValue}>
          {creamList.map((item)=>(<MenuItem key={item[1]} value={item[1]}>{item[0]}</MenuItem>))}
        </TextField>
        <TextField 
          select
          label="milk"
          defaultValue={milkList[0][0]}
          sx={{ width: 300 }}
          onChange={(e) => setMilkValue(e.target.value)}
          value={milkValue}>
          {milkList.map((item)=>(<MenuItem key={item[1]} value={item[1]}>{item[0]}</MenuItem>))}
        </TextField>
        <TextField 
          select
          label="syrup"
          defaultValue={syrupList[0][0]}
          sx={{ width: 300 }}
          onChange={(e) => setSyrupValue(e.target.value)}
          value={syrupValue}>
          {syrupList.map((item)=>(<MenuItem key={item[1]} value={item[1]}>{item[0]}</MenuItem>))}
        </TextField>
        <TextField 
          select
          label="tubule"
          defaultValue={tubuleList[0][0]}
          sx={{ width: 300 }}
          onChange={(e) => setTubuleValue(e.target.value)}
          value={tubuleValue}>
          {tubuleList.map((item)=>(<MenuItem key={item[1]} value={item[1]}>{item[0]}</MenuItem>))}
        </TextField>
      
        <Button variant="contained" className='createButton' onClick={createShake}>Create</Button>
        </Grid>
      </Grid>
      <Grid container direction="column" justifyContent="space-around" alignItems="center" width={"50%"}  height={"120vh"}>
        <svg width="325" height="466" viewBox="0 0 325 466" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.5663 29.3531C20.3387 17.5526 29.5947 7.28381 41.459 7.28381H284.767C296.658 7.28381 305.923 17.5964 304.653 29.4192L260.227 443.135C259.136 453.296 250.561 461 240.342 461H84.4965C74.252 461 65.6639 453.259 64.6039 443.069L21.5663 29.3531Z" stroke="#D3ECFF" stroke-width="10"/>
        <rect width="325" height="24" rx="12" fill="#D2EAFD"/>
        <line x1="61.9302" y1="107.391" x2="87.8384" y2="373.134" stroke="white" stroke-width="15" stroke-linecap="round"/>
        </svg>
      </Grid>
      <Button variant="text" color='error' id='toHomeButton' onClick={toHome}>Back</Button>
      </Grid>
    </>
  )
}

export default CreatePage