import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

function TwitterDownloader() {
    const [url, setUrl] = useState('');
    const [vid, setVid] = useState('');
    const [loaded, setloaded] = useState('');
    const [success, setSuccess] = useState('');
    const [failed, setFailed] = useState('');
    const [downloadPressed, setdownloadPressed] = useState(false);
    const [data, setData] = useState('');
    const [links, setLinks] = useState('');
    const [videoStatus, setVideoStatus] = useState(false);

    const download = () => {
        //console.log(url)
        setdownloadPressed(true);
        const axios = require("axios");

        const options = {
            method: 'POST',
            url: 'https://twitter65.p.rapidapi.com/api/twitter/links',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'e4ec10927emsh6bfc7f528f5b208p1f8db3jsn19a2f2c51ead',
                'X-RapidAPI-Host': 'twitter65.p.rapidapi.com'
            },
            data: { "url": url }
        };

        axios.request(options)
            .then(function (response) {
                //console.log(response.data);
                setVideoStatus(response.status);

                if (response.status === 200) {
                    setloaded(true);
                    setData(response.data[0].urls);
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

    return (
        <div>
              <Helmet>
        <title>Twitter video downloader</title>
        <meta name="description" content="Tools Master TwitterDownloader is a free online tool to download Twitter videos"/>
        <meta name="keywords" content="Tools Master, Twitter,Free Twitter Video Downloader,Twitter video download for free"/>
        <link rel="canonical" href="https://toolsmasteronline.com/TwitterDownloader"/>
      </Helmet>
            <h1 style={styles.header}>Tools Master - Free Twitter Video Downloader</h1>
            <div style={styles.interContainer}>
                <TextField style={styles.textfield} variant='filled' value={url} onChange={(e) => setUrl(e.target.value)} label="Paste Twitter video   URL" />
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
                                                    href={dataObject.url}
                                                    download
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Button variant="contained">
                                                        Download {dataObject.quality} {dataObject.extension}{" "}
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
                <h1 style={styles.paraHead}>Twitter</h1>
                <h1 style={styles.parasubheader}>What is Twitter?</h1>
                <p>
                Twitter is a social networking and news website where users exchange brief messages known as tweets. Tweeting is the practice of sending quick messages to your Twitter followers in the hopes that they would find them informative and entertaining. Twitter and tweeting could also be referred to as microblogging.                </p>
                <h1 style={styles.parasubheader}>Why Twitter is so popular?</h1>
                <p>
                Twitter's main point is how easy it is to scan. It's possible to follow hundreds of interesting Twitter users and quickly scan their information, which is perfect in today's attention-deficit society. 
                <br/>Every entry on the microblog tweet is limited to 280 characters or less by Twitter in order to keep things scan-friendly. This word limit encourages concise and witty language use, which makes tweets simple to 
                 </p>
                <h1 style={styles.parasubheader}>The way twitter works </h1>
                <p>
                Twitter is simple to use as a sender or receiver. You sign up using your Twitter handle and a free account. Then, you can send broadcasts (tweets) every day, every hour, or whenever you like. Enter 280 characters or fewer in the What's Happening box next to your profile picture, then click Tweet. Your tweet will be seen by those who follow you as well as possibly some unfollowers.                 </p>
                <h1 style={styles.parasubheader}>Can Twitter videos be downloaded?</h1>
                <p>
                Yes. You can. But for that you need to use a Twitter video downloader tool. The Tools Master Twitter downloader is a free online tools to download Twitter videos without any cost and water marks in videos.                 </p>
                 <h1 style={styles.parasubheader}>How to Download Twitter videos in PC / Laptop / Mobile phone?</h1>
                <p>
                To download Twitter videos, you can use Tools master free Twitter video downloader tool. You can use Tools master through your pc, laptop or mobile phone. What you have to do is just to copy and paste the url of the video into tools master Twitter video downloader
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
export default TwitterDownloader