import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { CREATE_ROUTE } from '../utils/consts'

type Props = {
}

const HomePage = (props: Props) => {
  return (
    <Container>
      <Grid container direction="column" justifyContent="space-around" alignItems="center" width={"100%"} marginTop={"20px"} height={"25vh"}>
        <Typography variant="h3" fontSize={"40px"} component="div" className='h1'>
          milkshake creator
        </Typography>
        <Typography variant="h1"  fontSize={"70px"} component="div"  className='h2'>
          Create your own cocktail
        </Typography>
        <Link className='link' to={CREATE_ROUTE} ><Button variant="contained" className='homeButton'>Create</Button></Link>
        <img className='homeShak' src="https://cdn.discordapp.com/attachments/562601704948760588/988222995262734476/1.png" alt="Shack"></img>
      </Grid>
      <Grid className='recipe' container direction="column" justifyContent="center" bgcolor="background.white" alignItems="center" >
        <Typography variant="h3" component="div" color="text.dark">
          Come up with your own recipe
        </Typography>
      </Grid>
      <div className='ingredients'>
        <Grid container direction="column" justifyContent="center" alignItems="flex-start" >
        <Typography variant="h4" fontSize='40px' component="div">
          Use different ingredients
        </Typography>
        <Typography variant="subtitle1" fontSize='30px' component="div" width="100px" marginTop="20px">
        •chocolate 
        •vanilla
        •banana
        •strawberry
        •mint
        •pumpkin
        •cherry
        •blackberry
        </Typography>
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center" >
          <img className='homeIngredients' src="https://cdn.discordapp.com/attachments/562601704948760588/988232533139411024/Group_17.png" alt="Shack"></img>
        </Grid>
      </div>
    </Container>
  )
}

export default HomePage