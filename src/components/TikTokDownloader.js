import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Footer from './Footer';
import { Helmet } from 'react-helmet';


function TikTokDownloader() {
  const [url, setUrl] = useState('');
    const [vid, setVid] = useState('');
    const [loaded, setloaded] = useState('');
    const [success, setSuccess] = useState('');
    const [failed, setFailed] = useState('');
    const [downloadPressed, setdownloadPressed] = useState(false);
    const [data, setData] = useState('');
    const [links, setLinks] = useState('');
    const [videoStatus, setVideoStatus] = useState(false);

    const download=()=>{
      setdownloadPressed(true);
      const axios = require("axios");
      //console.log(url)
      const options = {
                    method: 'GET',
                    url: 'https://tiktok-downloader-download-videos-without-watermark1.p.rapidapi.com/media-info/',
                    params: {link: url},
                    headers: {
                            'X-RapidAPI-Key': 'e4ec10927emsh6bfc7f528f5b208p1f8db3jsn19a2f2c51ead',
                            'X-RapidAPI-Host': 'tiktok-downloader-download-videos-without-watermark1.p.rapidapi.com'
                            }
                      };

        axios.request(options)
        .then(function (response) {
	                //console.log(response.data);
                  setVideoStatus(response.data.ok);
                  //console.log(response.data.result.video)

                if (response.status == 200) {
                    setloaded(true);
                    setData(response.data.result.video.url_list);
                    setloaded(true);
                    setSuccess(true);
                    setFailed(false);
                }
                else if (response.status != 200) {
                    alert("An Error occured, Please Try again");
                    setFailed(true);
                    setUrl("");
                    setSuccess("");
                    setFailed("");
                }
                
                })
        .catch(function (error) {
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

  return (
    <div>
        <Helmet>
        <title>TikTok Video Downloader</title>
        <meta name="description" content="Tools Master TikTok video downloader is a free online tool to download TikTok videos"/>
        <meta name="keywords" content="Tools Master, TikTok,Free TikTok Video Downloader,TikTok video download for free"/>
        <link rel="canonical" href="https://toolsmasteronline.com/TikTokDownloader"/>
      </Helmet>
      <h1 style={styles.header}>Tools Master - Free TikTok Video Downloader</h1>
            <div style={styles.interContainer}>
                <TextField style={styles.textfield} variant='filled' value={url} onChange={(e) => setUrl(e.target.value)} label="Paste TikTok video   URL" />
                <div style={styles.button}>
                    <Button variant='contained' onClick={download}>download</Button>
                </div>
            </div>

            {!loaded && downloadPressed ? (
                <div
                    style={{ display: "flex", justifyContent: "center", padding: "1%" }}
                >
                    <CircularProgress />
                </div>
            ) : (
                loaded && (
                    <div
                        style={{
                            display: "block",
                            justifyContent: "center",
                            padding: "1%",
                        }}
                    >
                        {downloadPressed && (
                            <div style={{ display: "block", textAlign: "center" }}>
                                <h2 style={{ fontSize: 25, textAlign: "center" }}>
                                    Download Links
                                </h2>
                            </div>
                        )}

                        {
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    padding: "1%",
                                    width: "100%",
                                }}
                            >
                                {Object.entries(data).map(([linkid, dataObject]) => {
                                    return (
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                padding: "1%",
                                            }}
                                            key={linkid}
                                        >
                                            <div style={{ display: "flex", flexDirection: "column" }}>
                                                <a
                                                    href={dataObject}
                                                    download
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Button variant="contained">
                                                        Download Link {parseInt(linkid)+1}
                                                    </Button>
                                                </a>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        }
                    </div>
                )
            )}
  <div style={styles.description}>
                <h1 style={styles.paraHead}>TikTok</h1>
                <h1 style={styles.parasubheader}>What is TikTok?</h1>
                <p>
                TikTok is short video sharing platform, which allows users to create short videos, upload and share among others. It has so many filters, effects and many other options which allows users to create creative videos.                </p>
                <h1 style={styles.parasubheader}>Why TikTok is so popular?</h1>
                <p>
                The TikTok app's popularity has skyrocketed since its release. It was the top downloaded photo and video app overall in the Apple Store in October 2018. The app apparently has over 500 million active monthly users, with the US being the most popular region with over 80 million downloads.
The main reasons behind this popularity are the Celebrity Endorsement, Localized content, Easy video creation and sharing.
                 </p>
                <h1 style={styles.parasubheader}>Can TikTok videos be downloaded? </h1>
                <p>
                Yes. You can. TikTok has an option to download videos. But you cannot download all the videos. Although, you can download TikTok videos using online tools. The Tools Master TikTok downloader is a free online tools to download TikTok videos without any cost and water marks in videos. 

                </p>
                 <h1 style={styles.parasubheader}>How to Download Twitter videos in PC / Laptop / Mobile phone?</h1>
                <p>
                To download TikTok videos, you can use Tools master free TikTok video downloader tool. You can use Tools master through your pc, laptop or mobile phone. What you have to do is just to copy and paste the url of the video into tools master TikTok video downloader.             <h1 style={styles.parasubheader}></h1>
                </p>
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
export default TikTokDownloader