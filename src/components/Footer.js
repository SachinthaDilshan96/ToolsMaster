
import React from "react";

  
function Footer() {
  return (
    <div style={{backgroundColor:'black',width:'100%'}}>
      <div>
      <h2 style={{color:'white',textAlign:'center',margin:'1%',fontSize:25}} >Tools Master &copy; 2022</h2>
      </div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
      <div style={{marginLeft:'2%'}}>
        <h1 style={{color:'white'}}>Social Media video downloader tools</h1>
      <a style={{color:'white',marginLeft:'10%'}} href="/YouTubeDownloader">YouTube downloader</a><br/>
        <a style={{color:'white',marginLeft:'10%'}} href="/InstagramDownloader">Instagram downloader</a><br/>
        <a style={{color:'white',marginLeft:'10%'}} href="/FaceBookDownloader">Facebook downloader</a><br/>
        <a style={{color:'white',marginLeft:'10%'}} href="/TwitterDownloader">Twitter downloader</a><br/>
        <a style={{color:'white',marginLeft:'10%'}} href="/TikTokDownloader">TikTok downloader</a>

      </div>
      <div style={{marginLeft:'2%'}}>
        <h1 style={{color:'white'}}>AI based Tools &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h1>
      <a style={{color:'white',marginLeft:'10%'}} href="/Paraphrasing">Paraphrasing Tool</a><br/>
        <a style={{color:'white',marginLeft:'10%'}} href="/Sentiment">SentimentAnalyser</a><br/>
        <a style={{color:'white',marginLeft:'10%'}} href="/KeywordExtraction">KeywordExtraction</a><br/>
        <a style={{color:'white',marginLeft:'10%'}} href="/Summarisation">TextSummarisation</a><br/>

      </div>
      <div style={{marginRight:'2%'}}>
      <a href="/TermsAndConditions" style={{color:'white',margin:20,}}>Terms and Conditions</a><br/>
        <a href="/" style={{color:'white',margin:20,}}>Contact Us</a><br/>
        <a href="/PrivacyPolicy" style={{color:'white',margin:20,}}>Privacy Policy</a>
      </div>
    
</div>

    </div>
    )
}

export default Footer