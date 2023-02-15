import Header from './Header';
import styles from '../styles/Projects.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';




function Projects() {

    return (
    
      <Box className={styles.container}>
        
           <div className={styles.containerCircle}>
      <div className={styles.circle} />
      <div className={styles.circle1} />
      <div className={styles.circle2} />
    </div>
    

      
      
        <Grid spacing={2} className={styles.main} >
          
            <Grid xs={8} className={styles.elements} container
  direction="column"
  justifyContent="center"
  alignItems="center">
    
              <h1 className={styles.heading}>
                Projects
              </h1>
              
              <Grid container
  direction="row"
  justifyContent="space-around"
  alignItems="center">
    <Grid>
              <Card sx={{ minHeight:370,minWidth:350,maxWidth: 500, backgroundColor:'white', marginTop:10}} >
                <CardActionArea href="https://vimeo.com/791108085">
                
      <CardMedia
        sx={{ height: 140 }}
        image="/onecard.png"
        title="Profile picture"
        
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" color={'black'} fontFamily='Poppins' >
          OneCard
        </Typography>
        <Typography variant="body2" color={'black'} fontFamily='Poppins'>
          Application de carte de visite <br></br>

         
          <ul className={styles.decoration}>
            <li>React Native / Javascript </li>
            <li>Native Base / Expo </li>
            <li>Node / Express / Mongo Db / Mongoose</li>
          </ul>
   
        </Typography>
      </CardContent>
    
      </CardActionArea>
      <CardActions>
        <Button size="small" color='secondary' href="https://github.com/oliverstask/onecard-frontend">
          Github-Frontend
        </Button>
      
        <Button size="small" color="primary" href="https://github.com/oliverstask/onecard-backend">
          Github-Backend
        </Button>
   
      </CardActions>
    </Card>
              </Grid>
              <Grid>
              <Card sx={{ minHeight:370,minWidth:350,maxWidth: 500, backgroundColor:'white', marginTop:10}} >
                <CardActionArea href="https://ticket-hack-frontend.vercel.app/" >
                
      <CardMedia
        sx={{ height: 140 }}
        image="/ticket.png"
        title="Profile picture"
        
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" color={'black'} fontFamily='Poppins' >
          TicketHack
        </Typography>
        <Typography variant="body2" color={'black'} fontFamily='Poppins'>
          Train tickets website <br></br>

         
          <ul className={styles.decoration}>
            <li>Javascript / HTML / CSS</li>
            <li>Express / Mongo Db / Mongoose</li>
          </ul>
   
        </Typography>
      </CardContent>
      
      </CardActionArea>
      <CardActions>
        <Button size="small" color='secondary' href="https://github.com/oliverstask/ticket-hack_frontend">
          Github-Frontend
        </Button>
      
        <Button size="small" color="primary" href="https://github.com/oliverstask/ticket-hack_backend">
          Github-Backend
        </Button>
      </CardActions>
    </Card>
              </Grid>
              <Grid>
              <Card sx={{ minHeight:370,minWidth:350,maxWidth: 500, backgroundColor:'white', marginTop:10}} >
                <CardActionArea href="https://musicstore-frontend-7ukg-166j915d7-oliverstask.vercel.app/">
                
      <CardMedia
        sx={{ height: 140 }}
        image="/music.png"
        title="Profile picture"
        
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" color={'black'} fontFamily='Poppins' >
          Devialet
        </Typography>
        <Typography variant="body2" color={'black'} fontFamily='Poppins'>
          Example of a Devialet website <br></br>

         
          <ul className={styles.decoration}>
            <li>Javascript / React</li>
          </ul>
   
        </Typography>
      </CardContent>
      
      </CardActionArea>
      <CardActions>
        <Button size="small" color='secondary' href="https://github.com/oliverstask/musicstore">
          Github-Frontend
        </Button>
      
      </CardActions>
    </Card>
              </Grid>
              
              </Grid>
            </Grid>
            <Header/>
        </Grid>
     
      </Box>
      
    );
   }
   
   export default Projects;