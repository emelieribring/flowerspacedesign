import React from 'react';
import Nav from './Navbar';
import Landing from './Landing';
import Content from './MiddleContent';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div>
      <header>
        <Nav></Nav>
        <Landing></Landing>
      </header>
      <main>
        <Content></Content>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default Layout;