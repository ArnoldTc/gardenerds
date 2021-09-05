import Hero from './components/Hero';
import About from './components/About';
import Design from './components/Design';
import Execute from './components/Execute';
import Maintenance from './components/Maintenance';
import Furnitures from './components/Furnitures';
import Lighting from './components/Lighting';

function IndexPage() {
  return (
    <div className="indexPage">
      <Hero />
      <About />
      <Design />
      <Execute />
      <Lighting />
      <Maintenance />
      <Furnitures />
    </div>
  );
}

export default IndexPage;
