import Home from '../components/Home';
import { Vollkorn } from '@next/font/google';

const vollkorn = Vollkorn({subsets:['latin']})

function Index() {
  return <Home className={vollkorn.className}/>;
}

export default Index;
