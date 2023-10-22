import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import NewsContainer from './components/NewsContainer';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const NewsApp = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <LoadingBar
          color='#599bfd'
          height={3}
          progress={progress}
        />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<NewsContainer apiKey={apiKey} setProgress={setProgress} key="general" pageSize={6} country="in" category="general" />} />
          <Route exact path="/business" element={<NewsContainer apiKey={apiKey} setProgress={setProgress} key="business" pageSize={6} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<NewsContainer apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={6} country="in" category="entertainment" />} />
          <Route exact path="/health" element={<NewsContainer apiKey={apiKey} setProgress={setProgress} key="health" pageSize={6} country="in" category="health" />} />
          <Route exact path="/science" element={<NewsContainer apiKey={apiKey} setProgress={setProgress} key="science" pageSize={6} country="in" category="science" />} />
          <Route exact path="/sports" element={<NewsContainer apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={6} country="in" category="sports" />} />
          <Route exact path="/technology" element={<NewsContainer apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={6} country="in" category="technology" />} />
        </Routes>
      </Router>
    </>
  )
}

export default NewsApp
