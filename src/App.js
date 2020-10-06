import React from 'react';
import './App.css';
import Main from './composants/main';
import{Layout, Header , Navigation, Drawer, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-style" title={<Link style={{textDecoration: 'none', color:'white'}} to="/">
            <img className="logo  align-self-center" src={require('./composants/images/brand.png')} alt="logo-accuiel"/> </Link>} scroll>
            <Navigation>
                <Link style={{textDecoration: 'none', color:'white'}} to='cv'>Curriculum-Vitae</Link>
                <Link style={{textDecoration: 'none', color:'white'}} to='projets'>Projets</Link>
                <Link style={{textDecoration: 'none', color:'white'}} to='contact'>Contact</Link>
            </Navigation>
        </Header>
        <Drawer className="drawer-style" title={<Link style={{textDecoration: 'none', color:'#686DA1'}} to="/"> monPortfolio </Link>}>
            <Navigation>
                <Link style={{textDecoration: 'none', color:'#686da1'}} to='cv'>Curriculum-Vitae</Link>
                <Link style={{textDecoration: 'none', color:'#686da1'}} to='projets'>Projets</Link>
                <Link style={{textDecoration: 'none', color:'#686da1'}} to='contact'>Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
