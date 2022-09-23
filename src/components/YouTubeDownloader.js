import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { fontSize } from "@mui/system";
import Footer from './Footer';
import { Helmet } from 'react-helmet';

function YouTubeDownloader() {
    const [url, setUrl] = useState("");
    const [loaded, setloaded] = useState("");
    const [success, setSuccess] = useState("");
    const [failed, setFailed] = useState("");
    const [downloadPressed, setdownloadPressed] = useState(false);
    const [data, setData] = useState("");
    const [link, setLink] = useState("");
    const [videoStatus, setVideoStatus] = useState(false);
    const regEx =
        /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;

    const download = () => {
        //console.log(url);
        setdownloadPressed(true);
        
        if (url!=''){
            if (regEx.test(url)) {
                //console.log(url.match(regEx)[1])
                setLink(url.match(regEx)[1]);
                const options = {
                    method: "GET",
                    headers: {
                        "X-RapidAPI-Key":
                            "e4ec10927emsh6bfc7f528f5b208p1f8db3jsn19a2f2c51ead",
                        "X-RapidAPI-Host": "youtube-media-downloader.p.rapidapi.com",
                    },
                };
    
                fetch(
                    "https://youtube-media-downloader.p.rapidapi.com/v2/video/details?videoId=" +
                    url.match(regEx)[1],
                    options
                )
                    .then((response) => response.json())
                    .then((response) => {
                        console.log(response);
                        setVideoStatus(response.status);
                        if (response.status == true) {
                            setData(response.videos.items);
                            setloaded(true);
                            setSuccess(true);
                            setFailed(false);
                        } else {
                            alert("An Error occured, Please Try again");
                            setFailed(true);
                            setUrl("");
                            setSuccess("");
                            setFailed("");
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                        alert("An Error occured, Please check the URL and try again");
                        setUrl("");
                        setloaded("");
                        setSuccess("");
                        setFailed("");
                        setdownloadPressed(false);
                        setData("");
                        setLink("");
                        setVideoStatus(false);
                    });
            } else {
                alert("URL is not a valid Youtube URL");
            }
            
        
            }
        else{
            alert("URL cannot be empty");
        }
    };
   
    useEffect(() => {
        setloaded("");
        setSuccess("");
        setFailed("");
        setdownloadPressed(false);
        setData("");
        setLink("");
        setVideoStatus(false);

    }, [url]);

    return (
        <div>
            <Helmet>
        <title>YouTubeDownloader</title>
        <meta name="description" content="Tools Master YouTubeDownloader is a free online tool to download youtube videos"/>
        <meta name="keywords" content="Tools Master, YouTube,Free YouTube Video Downloader,Youtube video download for free"/>
        <link rel="canonical" href="https://toolsmasteronline.com/YouTubeDownloader"/>
      </Helmet>
            <h1 style={styles.header}>
                Tools Master - Free Youtube Video Downloader
            </h1>
            <div style={styles.interContainer}>
                <TextField
                    style={styles.textfield}
                    variant="filled"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    label="Paste Youtube URL"
                />
                <div style={styles.button}>
                    <Button variant="contained" onClick={download}>
                        download
                    </Button>
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
                                                        ({dataObject.sizeText})
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
                <h1 style={styles.paraHead}>YouTube</h1>
                <h1 style={styles.parasubheader}>What is YouTube?</h1>
                <p>
                A free video-sharing website called YouTube was introduced in 2005. Users can upload videos to YouTube, search for and view videos, like/comment on videos, and share videos. PCs, laptops, mobile phones, and a variety of other smart devices can access YouTube. With 6 billion viewing hours each month, one of the most visited websites on the Internet is YouTube.
                </p>
                <h1 style={styles.parasubheader}>Why People use YouTube and it is so popular?</h1>
                <p>
                The sheer volume of videos available on YouTube is one factor in its popularity. There is always something fresh to watch on YouTube, where 100 hours of video are posted on average every minute! Additionally, you may find a wide variety of videos on YouTube, including coding, tutorials, cooking videos, travel videos, lifestyle and much more.
<br/>YouTube is so well-liked for another reason: It focuses heavily on user-generated content. Instead of watching movies from well-known TV networks and film studios, check out the incredible and inventive videos made by regular individuals like you. Additionally, YouTube is a two-way street; you are welcome to join, upload, and share your own films to contribute to the community.
                </p>
                <h1 style={styles.parasubheader}>Can YouTube videos be downloaded? </h1>
                <p>
                The simple answer is yes. You can download YouTube videos using your PC, Laptop, mobile phone (Smart Phone – Android phone or Apple (iOS) phone). For that you have to use a YouTube Downloader. 
                 </p>
                 <h1 style={styles.parasubheader}>How to Download YouTube videos in PC / Laptop / Mobile phone?</h1>
                <p>
                To download a YouTube video, you have to use a YouTube video downloader tool. The Tools Master Youtube downloader is a free online YouTube video downloader tool. What you have to do to download a YouTube video is just pasting the link/ url of the video. You can find multiple video download options with various download qualities such as 144p, 240p, 360p, 480p, 720p (HD) and various formats such mp3 and mp4. The Tools master is a very easy to use online tool to download videos from different platforms.                  </p>
            <h1 style={styles.parasubheader}></h1>
            <div style={{diplay:'flex',flexDirection:'row'}}>
                <div>
                <img src={require("../Icons/copy.png")} style={{height:'10%',width:'10%'}}/>
                <p>Copy the Video URL</p>
                </div>
                <div>
                <img src={require("../Icons/paste.png")} style={{height:'10%',width:'10%'}}/>
                <p>Paste the URL into Tools Master YouTube Downloader</p>
                </div>
                <div>
                <img src={require("../Icons/copy.png")} style={{height:'10%',width:'10%'}}/>
                <p>Copy the Video URL</p>
                </div>
            </div>
            </div>
            <div style={{marginBottom:0,height:200}}>
     <Footer/>
      </div>
        </div>
    );
}
const styles = {
    header: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
        paddingTop: 15,
    },
    interContainer: {
        display: "flex",
        justifyContent: "center",
        //alignItems:'center',
        paddingTop: "5%",
    },
    textfield: {
        width: "35%",
    },
    button: {
        height: "100%",
        paddingLeft: "2%",
        padding: "1%",
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
};
export default YouTubeDownloader;
