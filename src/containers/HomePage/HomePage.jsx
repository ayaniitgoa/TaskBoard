import React from 'react';
import { Helmet } from 'react-helmet';
import BottomButton from '../../components/BottomButton/BottomButton';
import AllLists from '../../components/AllLists/AllLists';
import Navbar from '../../components/Navbar/Navbar';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>TaskBoard</title>
      </Helmet>
      <Navbar />
      <AllLists />
      <BottomButton />
    </div>
  );
}

export default HomePage;
