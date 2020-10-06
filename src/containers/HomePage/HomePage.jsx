import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import BottomButton from '../../components/BottomButton/BottomButton';
import AllLists from '../../components/AllLists/AllLists';
import Navbar from '../../components/Navbar/Navbar';
import './HomePage.css';
import { useHistory } from 'react-router-dom';

function HomePage() {
  let history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem('userData')) {
      history.push('/register');
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
