import React,{useEffect} from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import analytics from '../Firebase';

function Home({navigation}) {


  return (
    <div style={{position:'relative'}}>
      <Helmet>
        <title>Tools Master - Social Media video Downloader</title>
        <meta name="description" content="Tools Master allows to download videos from youtube video , facebook, instagram, etc for free and also provide many other tools such as paraphrasing, text summarisation etc."/>
        <meta name="keywords" content="Tools Master, YouTube,Free YouTube Video Downloader,Free Facebook video downloader,Free Twitter Video downloader, Paraphrasing tool, text summarisation tool, plagiarism removal tool"/>
        <link rel="canonical" href="https://toolsmasteronline.com/"/>
      </Helmet>
      <h1 style={{textAlign:'center',fontSize:30,fontWeight:'bold',paddingTop:20}}>Welcome to Tools Master</h1>
     
      {/*Free social media video downloaders */}
     <div style={{backgroundColor:'lightBlue',padding:'1%'}}>
        <h1><b>Free Social Media Video Downloaders </b></h1>
      </div>
      <div style={{margin:'1%'}}>
      <ButtonGroup notchedOutline={false}
        orientation="horizontal"
        fullWidth={false}
        aria-label="vertical contained button group"
        variant="text">
            <Button  style={{marginRight:5,marginLeft:5}}    color="success" variant="contained" href="/YouTubeDownloader" startIcon={<img style={{height:50,width:50}} alt="YouTube Video Downloader" src={require('../Icons/youtube.png')}></img>}>
               Free YouTube Video Downloader</Button>
            <Button   style={{marginRight:5,marginLeft:5}}   color="success" variant="contained"  href="/InstagramDownloader" startIcon={<img style={{height:50,width:50}} alt="Instagram Video Downloader" src={require('../Icons/instagram.png')}></img>}>
               Free Instagram Video Downloader</Button>
            <Button  style={{marginRight:5,marginLeft:5,}}   color="success" variant="contained"  href="/FaceBookDownloader" startIcon={<img style={{height:50,width:50,backgroundColor:'white',borderRadius:10}} alt="Facebook Video Downloader" src={require('../Icons/facebook.png')}></img>}>
               Free Facebook Video Downloader</Button>
            
        </ButtonGroup>
      </div>
      <div style={{margin:'1%'}}>
        <ButtonGroup notchedOutline={false}
        orientation="horizontal"
        fullWidth={false}
        aria-label="vertical contained button group"
        variant="text">
            <Button  style={{marginRight:5,marginLeft:5}}   color="success" variant="contained" href="/TwitterDownloader" startIcon={<img style={{height:50,width:50,}} alt="Twitter Video Downloader" src={require('../Icons/twitter.png')}></img>}>
               Free Twitter Video Downloader</Button>
            <Button  style={{marginRight:5,marginLeft:5}}   color="success" variant="contained"  href="/TikTokDownloader" startIcon={<img style={{height:50,width:50,backgroundColor:'white',borderRadius:10}} alt="TikTok Video Downloader" src={require('../Icons/tiktok.png')}></img>}>
              Free  TikTok Video Downloader</Button>
        </ButtonGroup>
        </div>

        {/* AI based tools*/}
        <div style={{backgroundColor:'lightBlue',padding:'1%'}}>
        <h1><b>Free AI Based Tools for Text </b></h1>
      </div>
      <div style={{margin:'1%'}}>
      <ButtonGroup 
        orientation="horizontal"
        aria-label="vertical contained button group"
        variant="text">
            <Button style={{marginRight:5,marginLeft:5}} color="success" variant="contained"  href="/Paraphrasing" startIcon={<img style={{height:50,width:50}} alt="Paraphrasing Tool" src={require('../Icons/typing.png')}></img>}>
              Paraphrasing Tool</Button>
            <Button  style={{marginRight:5}} color="success" variant="contained"  href="/Sentiment" startIcon={<img style={{height:50,width:50}} alt="Sentiment" src={require('../Icons/sentiment.png')}></img>}>
                Text Sentiment Analyser</Button>
            <Button  style={{marginRight:5}} color="success" variant="contained"  href="/KeywordExtraction" startIcon={<img style={{height:50,width:50}} alt="KeywordExtraction" src={require('../Icons/keywords.png')}></img>}>
            Keyword Extraction Tool</Button>
            <Button  style={{marginRight:5}} color="success" variant="contained"  href="/Summarisation" startIcon={<img style={{height:50,width:50}} alt="Summarisation" src={require('../Icons/summarise.png')}></img>}>
            Text Summarisation Tool</Button>
            </ButtonGroup>
        </div>


    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center',paddingTop:50}}>
        <div style={{position:'relative',bottom:0,width:'100%'}}>
     <Footer/>
      </div>
      </div>
      
    </div>
  )
}

export default Home;