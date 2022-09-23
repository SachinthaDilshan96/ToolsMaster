import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Axios } from 'axios';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
function InstagramDownloader() {
    const [url, setUrl] = useState('');
    const [loaded, setloaded] = useState('');
    const [success, setSuccess] = useState('');
    const [failed, setFailed] = useState('');
    const [downloadPressed, setdownloadPressed] = useState(false);
    const [data, setData] = useState('');
    const [apiLink, setApiLink] = useState('');
    const download = () => {
        //console.log(url);

        const regEx = /^(?:https?:\/\/)?(?:www.)?instagram.com\/?([a-zA-Z0-9\.\_\-]+)?\/([p]+)?([reel]+)?([tv]+)?([stories]+)?\/(([a-zA-Z0-9\-\_\.]+))\/?([0-9]+)?/;
        const regExp = /^(?:https?:\/\/)?(?:www.)?instagram.com\/?([a-zA-Z0-9\.\_\-]+)?\/([p]+)?\/(([a-zA-Z0-9\-\_\.]+))\/?([0-9]+)?/;
        const regExReel = /^(?:https?:\/\/)?(?:www.)?instagram.com\/?([a-zA-Z0-9\.\_\-]+)?\/([reel]+)?\/(([a-zA-Z0-9\-\_\.]+))\/?([0-9]+)?/;
        const regExTV = /^(?:https?:\/\/)?(?:www.)?instagram.com\/?([a-zA-Z0-9\.\_\-]+)?\/([tv]+)?\/(([a-zA-Z0-9\-\_\.]+))\/?([0-9]+)?/;
        const regExStories = /^(?:https?:\/\/)?(?:www.)?instagram.com\/?([a-zA-Z0-9\.\_\-]+)?\/([stories]+)?\/(([a-zA-Z0-9\-\_\.]+))\/?([0-9]+)?/;

        if (url.length > 0) {
            setdownloadPressed(true);
           /* if (regExp.test(url)) {
                setApiLink('https://instagram-media-downloader.p.rapidapi.com/rapid/post.php?url=https%3A%2F%2Fwww.instagram.com%2Fp%2F' + url.match(regEx)[0].split('p/')[1].slice(0, 11) + '%2F');
                callApi();
            }
            else if (regExReel.test(url)) {
                setApiLink('https://instagram-media-downloader.p.rapidapi.com/rapid/post.php?url=https%3A%2F%2Fwww.instagram.com%2Freel%2F' + url.match(regEx)[0].split('reel/')[1].slice(0, 11) + '%2F');
                callApi();
            }
            else if (regExTV.test(url)) {
                setApiLink('https://instagram-media-downloader.p.rapidapi.com/rapid/post.php?url=https%3A%2F%2Fwww.instagram.com%2Ftv%2F' + url.match(regEx)[0].split('tv/')[1].slice(0, 11) + '%2F');
                callApi();
            }
            else if (regExStories.test(url)) {
                setApiLink('https://instagram-media-downloader.p.rapidapi.com/rapid/post.php?url=https%3A%2F%2Fwww.instagram.com%2Fstories%2F' + url.match(regEx)[0].split('stories/')[1].slice(0, 11) + '%2F');
                callApi();
            }*/
            const axios = require("axios");

            const options = {
              method: 'GET',
              url: 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index',
              params: {url: url},
              headers: {
                'X-RapidAPI-Key': 'e4ec10927emsh6bfc7f528f5b208p1f8db3jsn19a2f2c51ead',
                'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com'
              }
            };
            
            axios.request(options)
            .then(function (response) {
                //console.log(response.data);
                //console.log(response.status);
                if (response.status==200){
                    setloaded(true);
                    setData(response.data);
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
            }).catch(function (error) {
                alert("An Error occured, Please check the URL and try again");
                setUrl('');
                setloaded('');
                setSuccess('');
                setFailed('');
                setdownloadPressed(false);
                setData('');
                setApiLink('');
            });


        }
        else {
            alert("URL Length cannot be empty")
        }

        //console.log('this is data');

    }

    const callApi = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e4ec10927emsh6bfc7f528f5b208p1f8db3jsn19a2f2c51ead',
                'X-RapidAPI-Host': 'instagram-media-downloader.p.rapidapi.com'
            }
        };
        //console.log('api link',apiLink)
        try {
            fetch(apiLink, options)
                .then(data => data.json())
                .then(data => { console.log(data); setData(data); setloaded(true); setSuccess(true) })
                .catch(err => { console.error(err); setFailed(true) });

        }

        catch (err) {
            console.log('Eror', err)
            alert('An Error Occured, Please try again later')
        }
    }
    useEffect(() => {
        //setUrl('');
        setloaded('');
        setSuccess('');
        setFailed('');
        setdownloadPressed(false);
        setData('');
        setApiLink('');
    }, [url])
    return (
        <div >
        <Helmet>
        <title>Instagram Video Downloader</title>
        <meta name="description" content="Tools Master Instagram video downloader is a free online tool to download instagram videos"/>
        <meta name="keywords" content="Tools Master, Instagram,Free Instagram Video Downloader,Instagram video download for free"/>
        <link rel="canonical" href="https://toolsmasteronline.com/InstagramDownloader"/>
      </Helmet>
            <h1 style={styles.header}>Tools Master - Free Instagram Video Downloader</h1>
            <div style={styles.interContainer}>
                <TextField style={styles.textfield} variant='filled' value={url} onChange={(e) => setUrl(e.target.value)} label="Paste Instagram URL" />
                <div style={styles.button}>
                    <Button variant='contained' onClick={download}>download</Button>
                </div>
            </div>


            {!loaded && downloadPressed ? <div style={{ display: 'flex', justifyContent: 'center', padding: '1%' }}><CircularProgress /></div> :
                loaded &&
                <div style={{ display: 'block', justifyContent: 'center', padding: '1%', }}>
                    {downloadPressed && <div style={{ display: 'block', textAlign: 'center' }}><h2 style={{ fontSize: 25, textAlign: 'center' }}>Download Links</h2></div>}

                    {<div style={{ display: 'flex', justifyContent: 'center', padding: '1%', width: '75%' }} >
                        <div style={{ display: 'block', paddingLeft: '25%' }}>
                            <p><b>Video Caption</b> {data.title}</p>
                            <a href={data.media} download target="_blank" rel="noopener noreferrer">
                                <Button style={{ textAlign: 'center' }} variant='contained'>Download video</Button>
                            </a>
                        </div>
                    </div>
                    }

                </div>}
                <div style={styles.description}>
                <h1 style={styles.paraHead}>Instagram</h1>
                <h1 style={styles.parasubheader}>What is Instagram?</h1>
                <p>
                Available on iPhone and Android, Instagram is a free photo and video sharing app. It allows users to post photographs and videos then share with their followers or a specific set of friends. They can also browse, comment on, and like the Instagram posts that their friends have shared. 
                </p>
                <h1 style={styles.parasubheader}>Why People use Instagram and why it is so popular?</h1>
                <p>
                The sheer volume of videos available on YouTube is one factor in its popularity. There is always something fresh to watch on YouTube, where 100 hours of video are posted on average every minute! Additionally, you may find a wide variety of videos on YouTube, including coding, tutorials, cooking videos, travel videos, lifestyle and much more.
<br/>YouTube is so well-liked for another reason: It focuses heavily on user-generated content. Instead of watching movies from well-known TV networks and film studios, check out the incredible and inventive videos made by regular individuals like you. Additionally, YouTube is a two-way street; you are welcome to join, upload, and share your own films to contribute to the community.
                </p>
                <h1 style={styles.parasubheader}>What are the different types of media types in Instagram? </h1>
                <p>
                Multiple types of media are used in Instagram. Photos, videos, stories, IGTV (longer videos) and reels are such media types.                  </p>
                 <h1 style={styles.parasubheader}>Can Instagram videos be downloaded?</h1>
                <p>
                Yes. You can. But for that you need to use an Instagram video downloader tool. Some Tools ad a watermark when downloading videos. The Tools Master Instagram downloader is a free online tools to download Instagram videos without any watermark </p>
                <h1 style={styles.parasubheader}>How to Download Instagram videos in PC / Laptop / Mobile phone?</h1>
                <p>
                To download Instagram videos, you can use Tools master free Instagram video downloader tool. You can use Tools master through your pc, laptop or mobile phone. Tools master allows to download instagram videos without any watermark
                </p>
                <h1 style={styles.parasubheader}></h1>
                <p></p>
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
export default InstagramDownloader;