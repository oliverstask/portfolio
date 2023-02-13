import Header from './Header';
import styles from '../styles/About.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { Text } from 'rebass';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import { motion } from 'framer-motion';
import { border } from '@mui/system';


function About() {
  const AnimatedText = motion(Grid);
    return (
    
      <Box className={styles.container}>
        
           <div className={styles.containerCircle}>
      <div className={styles.circle} />
      <div className={styles.circle1} />
      <div className={styles.circle2} />
    </div>
    
    <AnimatedText
      animate={{ opacity: 2, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 1, delay: 0.5 }}
     >
      
      
        <Grid spacing={2} className={styles.main} >
          
            <Grid xs={8} className={styles.elements} container
  direction="column"
  justifyContent="center"
  alignItems="center">
    
              <h1 className={styles.heading}>
                About Me
              </h1>
              <Grid item xs={8}>
                <Grid container
  direction="row"
  justifyContent="center"
  alignItems="center">
                  <Grid >
                  <Avatar alt="Remy Sharp" src="/oliver.png" sx={{ width: 200, height: 200 }}/>
                
                  </Grid>
                  <Grid >
                  <Card sx={{ maxWidth: 500, backgroundColor:'transparent', marginRight:0, border:'none'}} variant="outlined">
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" color={'white'} fontFamily='Poppins' marginLeft={4}>
        Hey ! I'm Oliver
        </Typography>
        <Typography variant="body2" color={'white'} fontFamily='Poppins' marginLeft={4}>
        <EventIcon/> 27 years old<br></br>
        <LocationOnIcon/> Bruxelles, Belgium (but open for remote work)<br></br>
        If you want to talk about The Beach Boys, learn to surf or make an application, give me a call !
        </Typography>
      </CardContent>
    
    </Card>
                 
                  </Grid>
                </Grid>
              <Text color={'white'} textAlign={'center'}  className={styles.p2}>
I am passionate about team-work and innovative projects, with an artistic and creative
dimension in addition to the tech from my experience in the sound and music industry.
I am looking for a web developer opportunity to put my skills into action and continue
learning in a challenging environment.
              </Text>
              </Grid>
              <Grid container
  direction="row"
  justifyContent="space-around"
  alignItems="center">
              <Grid>
              <Card sx={{ minHeight:350,minWidth:230,maxWidth: 500, backgroundColor:'white', marginTop:10}} >
      <CardMedia
        sx={{ height: 140 }}
        image="/frontend.png"
        title="Profile picture"
        
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" color={'black'} fontFamily='Poppins'>
          Front-End
        </Typography>
        <Typography variant="body2" color={'black'} fontFamily='Poppins'>
          Languages & Tools
          <ul>
            <li>Javascript/HTML/CSS</li>
            <li>React/React Native</li>
            <li>TypeScript/Redux</li>
            <li>Ui Kits</li>
          </ul>
        </Typography>
      </CardContent>
    
    </Card>
              </Grid>
              <Grid>
              <Card sx={{ minHeight:350,minWidth:230,maxWidth: 500, backgroundColor:'white', marginTop:10}} >
      <CardMedia
        sx={{ height: 140 }}
        image="/backend.png"
        title="Profile picture"
        
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" color={'black'} fontFamily='Poppins'>
          Back-End
        </Typography>
        <Typography variant="body2" color={'black'} fontFamily='Poppins'>
          Languages & Tools
          <ul>
            <li>Javascript</li>
            <li>Node Js</li>
            <li>Express Js</li>
            <li>Mongo Db</li>
          </ul>
        </Typography>
      </CardContent>
    
    </Card>
              </Grid>
              <Grid>
              <Card sx={{ minHeight:350,minWidth:230,maxWidth: 500, backgroundColor:'white', marginTop:10}} >
      <CardMedia
        sx={{ height: 140 }}
        image="/brain.png"
        title="Profile picture"
        
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" color={'black'} fontFamily='Poppins'>
          Skills
        </Typography>
        <Typography variant="body2" color={'black'} fontFamily='Poppins'>
          Design & DevOps
          <ul>
            <li>Figma/Miro/Whimsical</li>
            <li>Git/GitHub</li>
            <li>Agile/SCRUM</li>
          </ul>
        </Typography>
      </CardContent>
    
    </Card>
              </Grid>
              </Grid>
            </Grid>
            <Header/>
        </Grid>
        </AnimatedText>
      </Box>
      
    );
   }
   
   export default About;