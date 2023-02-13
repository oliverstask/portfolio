import styles from '../styles/Header.module.css'
import Link from 'next/link';
import { Button } from '@mui/material/Button';
import { Box, Flex, Text  } from 'rebass';
import { Spin as Hamburger } from 'hamburger-react';
import { useState } from 'react';

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [isOpen, setOpen] = useState(false);

    return (
        <header className={styles.head}>
            <Flex
              px={2}
              color='white'
              bg='transparent'
              alignItems='center'
              className={styles.container}>
                <Link href="/" className={styles.link}>
            <Text p={2} fontWeight='500' color='white' fontSize={2}>Oliver Staskiewicz</Text>
            </Link>
  <Box mx='auto' />
   <Box className={styles.linksContainer}>
    <Link href="/about" className={styles.link}>About Me</Link>
    <Link href="/projects" className={styles.link}>Projects</Link>
    <Link href="/Contact" className={styles.link}>Contact</Link>
    <Button variant='contained' component="label" className={styles.button1}
  sx={{
      ':hover': {
        bgcolor: '#7A6AC6',
        color: 'white',
        
      },
    }}
  >
  <a
      href="/files/Oliver-Resume.pdf"
      alt="alt text"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.buttonCV}
    >See my CV</a>
  </Button>
  </Box>

</Flex>

        <div className={styles.container2}>
      <button
        className={styles.button}
        onClick={() => setShowMenu(!showMenu)}
      >
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </button>
      {showMenu && (
        <ul className={styles.menu}
        >
          <li > 
            <a href="#" className={styles.links}>About Me</a>
          </li>
          <li >
            <a href="#" className={styles.links}>Contact</a>
          </li>
          <li >
            <a href="#" className={styles.links}>Projects</a>
          </li>
        </ul>
      )}
    </div>
   
        </header>
        
    )
}

export default Header