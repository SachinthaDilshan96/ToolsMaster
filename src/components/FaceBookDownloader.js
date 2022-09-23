import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

function FaceBookDownloader() {
  const [url, setUrl] = useState('');
  const [vid, setVid] = useState('');
  const [loaded, setloaded] = useState('');
  const [success, setSuccess] = useState('');
  const [failed, setFailed] = useState('');
  const [downloadPressed, setdownloadPressed] = useState(false);
  const [data, setData] = useState('');
  const [links, setLinks] = useState('');
  const [videoStatus, setVideoStatus] = useState(false);


  /*const download = () => {
    setdownloadPressed(true);
    if (url != '') {
      if (url.includes('video')) {
        setVid(url.split('v=')[1])
      }
      if (url.includes('videos')) {
        setVid(url.split('videos/')[1])
      }
      if (url.includes('watch')) {
        setVid(url.split('v=')[1])
      }
      if (url.includes('embed')) {
        setVid(url.split('embed?video_id=')[1])
      }

    }

  }*/
  const download = () => {
    //console.log(url)
    setdownloadPressed(true);
    const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://facebook-reel-and-video-downloader.p.rapidapi.com/app/main.php',
  params: {url: url},
  headers: {
    'X-RapidAPI-Key': 'e4ec10927emsh6bfc7f528f5b208p1f8db3jsn19a2f2c51ead',
    'X-RapidAPI-Host': 'facebook-reel-and-video-downloader.p.rapidapi.com'
  }
};

    axios.request(options)
        .then(function (response) {
            console.log(response.data);
            setVideoStatus(response.success);

            if (response.status === 200) {
                setloaded(true);
                setData(response.data.links);
                setloaded(true);
                setSuccess(true);
                setFailed(false);
            }
            else if (response.status !== 200) {
                alert("An Error occured, Please Try again");
                setFailed(true);
                setUrl("");
                setSuccess("");
                setFailed("");
            }


        }).catch(function (error) {
            //console.error(error);
            alert("An Error occured, Please check the URL and try again");
            setUrl('');
            setVid('');
            setloaded('');
            setSuccess('');
            setFailed('');
            setdownloadPressed(false);
            setData('');
            setLinks('');
            setVideoStatus(false);
        });
}

useEffect(() => {
    //setUrl('');
    setVid('');
    setloaded('');
    setSuccess('');
    setFailed('');
    setdownloadPressed(false);
    setData('');
    setLinks('');
    setVideoStatus(false);
}, [url])


  const callapi = () => {
    if (vid != '') {
      const options = {
        method: 'GET',
        url: 'https://facebook-reel-and-video-downloader.p.rapidapi.com/app/main.php',
        params: { url: url },
        headers: {
          'X-RapidAPI-Key': 'e4ec10927emsh6bfc7f528f5b208p1f8db3jsn19a2f2c51ead',
          'X-RapidAPI-Host': 'facebook-reel-and-video-downloader.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        console.log(response.data);
        console.log(response.data.links['Download Low Quality'])
        setVideoStatus(response.success);

        if (response.data.success === true) {
          setData(response.data);
          setloaded(true);
          setSuccess(true);
          setFailed(false);
        }
        else {
          alert("An Error occured, Please Try again");
          setFailed(true);
          setUrl("");
          setSuccess("");
          setFailed("");
        }

      }).catch(function (error) {
        console.error(error);
      });

    }
  }
  useEffect(() => {
    callapi();
  }, [downloadPressed]);
  return (
    <div>
        <Helmet>
        <title>Facebook Video Downloader</title>
        <meta name="description" content="Tools Master Facebook video downloader is a free online tool to download facebook videos"/>
        <meta name="keywords" content="Tools Master, facebook,Free facebook Video Downloader,facebook video download for free"/>
        <link rel="canonical" href="https://toolsmasteronline.com/FaceBookDownloader"/>
      </Helmet>
      <h1 style={styles.header}>Tools Master - Free Facebook Video Downloader</h1>
      <div style={styles.interContainer}>
        <TextField style={styles.textfield} variant='filled' value={url} onChange={(e) => setUrl(e.target.value)} label="Paste Facebook video   URL" />
        <div style={styles.button}>
          <Button variant='contained' onClick={download}>download</Button>{data.mediaUrl}
        </div>
      </div>

      {!loaded && downloadPressed ? <div style={{ display: 'flex', justifyContent: 'center', padding: '1%' }}><CircularProgress /></div> :
        loaded &&
        <div style={{ display: 'block', justifyContent: 'center', padding: '1%', }}>
          {downloadPressed && <div style={{ display: 'block', textAlign: 'center' }}><h2 style={{ fontSize: 25, textAlign: 'center' }}>Download Links</h2></div>}

          {<div style={{ display: 'flex',flexDirection:'column', justifyContent: 'center', padding: '1%', }} >
            <div style={{ display: 'flex', justifyContent: 'center', padding: '1%' }} >
              <a href={data['Download High Quality']} download target="_blank" rel="noopener noreferrer">
                <Button variant='contained'> Download High Quality</Button>
              </a>
            </div><br />
            <div style={{ display: 'flex', justifyContent: 'center', padding: '1%' }} >
              <a href={data['Download Low Quality']} download target="_blank" rel="noopener noreferrer">
                <Button variant='contained'> Download Low Quality</Button>
              </a>
            </div>
          </div>
          }

        </div>}
        <div style={styles.description}>
                <h1 style={styles.paraHead}>Facebook</h1>
                <h1 style={styles.parasubheader}>What is Facebook?</h1>
                <p>
                You can interact and exchange content with loved ones online using Facebook, a social networking service. Facebook was founded in 2004 by Mark Zuckerberg while he was a student at Harvard University and was first intended for college students. Anyone over 13 with a working email address could sign up for Facebook by 2006. With more than 1 billion users now, Facebook is the largest social network in the world.                </p>
                <h1 style={styles.parasubheader}>Why Facebook is so popular?</h1>
                <p>
                Facebook is one of the first social media networks and it is so popular even today. There are many reasons for this success. Being easy to use, constant upgrades and engaging new features and worldwide use base are the reasons behind this success. </p>
                <h1 style={styles.parasubheader}>Can Facebook videos be downloaded? </h1>
                <p>
                Yes. You can. But for that you need to use a Facebook video downloader tool. The Tools Master Instagram downloader is a free online tools to download Facebook videos without any cost and water marks in videos.                  </p>
                 <h1 style={styles.parasubheader}>How to Download Facebook videos in PC / Laptop / Mobile phone?</h1>
                <p>
                To download Facebook videos, you can use Tools master free Instagram video downloader tool. You can use Tools master through your pc, laptop or mobile phone. What you have to do is just to copy and paste the url of the video into tools master Facebook video downloader. 
                </p>
                <h1 style={styles.parasubheader}></h1>
            </div>
            <div style={{paddingTop:-50,height:200}}>
     <Footer/>
      </div>
    </div>
  )
}
const styles = {
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30, paddingTop: 15
  },
  interContainer: {
    display: 'flex',
    justifyContent: 'center',
    //alignItems:'center',
    paddingTop: '5%',
  },
  textfield: {
    width: '35%',
  },
  button: {
    height: '100%',
    paddingLeft: '2%',
    padding: '1%',

  },
  paraHead:{
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',
    paddingTop:'8%'
},
description:{
    paddingLeft:'2%',paddingRight:'2%'
},
parasubheader:{
    fontSize:25,
    fontWeight:'bold',
    paddingTop:'2%'
},
footer:{
    width:'100%',
    backgroundColor:'#333',
    height:50
   
},
footerText:{
    color:'white',
    textAlign:'center',
    height:'1%',
    padding:'1%'
}
}
export default FaceBookDownloader