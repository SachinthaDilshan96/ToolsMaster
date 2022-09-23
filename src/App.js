import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import InstagramDownloader from './components/InstagramDownloader';
import YouTubeDownloader from './components/YouTubeDownloader';
import NavigationBar from './components/NavigationBar';
import FaceBookDownloader from './components/FaceBookDownloader';
import TwitterDownloader from './components/TwitterDownloader';
import TikTokDownloader from './components/TikTokDownloader';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import Paraphrasing from './components/AI/Paraphrasing';
import Sentiment from './components/AI/Sentiment';
import KeywordExtraction from './components/AI/KeywordExtraction';
import Summarisation from './components/AI/Summarisation';
import React,{useEffect} from "react";
import ReactGA from 'react-ga';

function App() {
  const trackingid='UA-226197151-2';
 useEffect(() => {
  ReactGA.initialize(trackingid);
  ReactGA.pageview(window.location.pathname+window.location.search)

 }, [])
 
  return (
    <Router>
      <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/YouTubeDownloader' element={<YouTubeDownloader/>}/>
          <Route path='/InstagramDownloader' element={<InstagramDownloader/>}/>
          <Route path='/FaceBookDownloader' element={<FaceBookDownloader/>}/>
          <Route path='/TwitterDownloader' element={<TwitterDownloader/>}/>
          <Route path='/TikTokDownloader' element={<TikTokDownloader/>}/>
          <Route path='/TermsAndConditions' element={<TermsAndConditions/>}/>
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
          <Route path='/Paraphrasing' element={<Paraphrasing/>}/>
          <Route path='/Sentiment' element={<Sentiment/>}/>
          <Route path='/KeywordExtraction' element={<KeywordExtraction/>}/>
          <Route path='/Summarisation' element={<Summarisation/>}/>

        </Routes>
      </Router>
  );
}

export default App;
