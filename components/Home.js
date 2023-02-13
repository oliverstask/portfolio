import styles from '../styles/Home.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import  Button  from '@mui/material/Button'
import Header from './Header';
import { motion } from 'framer-motion';



function Home() {
  const AnimatedText = motion(Grid);


  return (

    <Box className={styles.container}>

   
  
   <div className={styles.containerCircle}>
      <div className={styles.circle} />
      <div className={styles.circle1} />
      <div className={styles.circle2} />
    </div>

   <AnimatedText
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -20 }}
           initial={{ opacity: 0, y: 20 }}
           transition={{ duration: 1, delay: 0.5 }}
          >
      <Grid spacing={2} className={styles.main}> 

       
        <Grid className={styles.elements}>
        <Header />
        <div className={styles.text} >
         
        <p className={styles.p1}>Welcome to my website</p>
        <h1 className={styles.h1}>Hi ! I’m Oliver <br></br>
            Web/Mobile Developer</h1>
            
            <p className={styles.p2}>
            Web and mobile developer, I use technologies such as <span className={styles.span}>Javascript</span>, <span className={styles.span}>React</span>, <span className={styles.span}>React Native</span>, <span className={styles.span}>TypeScript</span> and more. <br></br>
            
            </p>
            
            <Stack spacing={2} direction="row" className={styles.buttons}>
          <Button variant="contained"
          href="https://linktr.ee/oliver.stask"
          sx={{
            position: 'unset',
            width: 115,
            height: 30,
            fontFamily: '\'Poppins\', sans-serif',
            fontSize: 12,
            backgroundColor: '#000000',
            textTransform: 'none',
            ':hover': {
              bgcolor: 'white',
              color: 'black',
            },
          }} 
        
          >Hire me !</Button>
          <Button variant="contained"
          href="/projects"
          sx={{
            position: 'unset',
            width: 115,
            height: 30,
            fontFamily: '\'Poppins\', sans-serif',
            fontSize: 12,
            color: '#000000',
            backgroundColor: '#FFFFFF',
            textTransform: 'none',
            whiteSpace: 'nowrap',
            ':hover': {
              bgcolor: 'black',
              color: 'white',
            },
          }}
          
          >See my projects</Button>
     </Stack>
  
            </div>
            
        </Grid>
        
        <Grid className={styles.pic}>
        <div className={styles.blur}></div>

           <Image src="/oliver.png"
           alt='Oliver'
           width={355}
           height={397}
           className={styles.Oliver}
           />
         
        </Grid>
     
      </Grid>
      </AnimatedText>
    </Box>
    
  );
}

export default Home;
