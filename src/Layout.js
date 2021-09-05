import Header from './components/common/Header';
import Footer from './components/common/Footer';
import IndexPage from './components/IndexPage';

import './style.scss';

function Layout() {
  return (
    <div>
      <Header />
      <IndexPage />
      <Footer />
    </div>
  );
}

export default Layout;
