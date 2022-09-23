import React, { useEffect, useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import CircularProgress from '@mui/material/CircularProgress';
import { Helmet } from 'react-helmet';
import Footer from "../Footer";
import { TextField } from "@mui/material";
import { TextFields } from "@mui/icons-material";


function Summarisation() {
    const [text, setText] = useState("");
    const [result,setResult]=useState("");
    const [summaryPercentage,setSummaryPercentage]=useState(50);
    const [wordCountOriginal,setWordCountOriginal]=useState(0);
    const [wordCountSummary,setWordCountSummary]=useState(0);
    const [loading,setLoading]=useState("");
    const [success,setSuccess]=useState(false);
    const callAPI = () => {
        if (text.length != "") {
          setLoading(true);
            const axios = require("axios");

            const options = {
              method: 'POST',
              url: 'https://text-analysis12.p.rapidapi.com/summarize-text/api/v1.1',
              headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'e4ec10927emsh6bfc7f528f5b208p1f8db3jsn19a2f2c51ead',
                'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
              },
              data: {"language":"english","summary_percent":Number(summaryPercentage),"text":text}
                     };
            
            axios.request(options).then(function (response) {
                //console.log(response.data);
                setResult(response.data.summary)
                setLoading('')
                setSuccess(true)
            }).catch(function (error) {
                //console.error(error);
                alert("Something went wrong. Please try again later")
                setText("");
                setResult("");
                setSummaryPercentage(50);
                setWordCountOriginal(0);
                setWordCountSummary(0);
                setLoading("");
                setSuccess(false);
            });
        } else {
          alert("Text cannot be empty");
          setText("");
                setResult("");
                setSummaryPercentage(50);
                setWordCountOriginal(0);
                setWordCountSummary(0);
                setLoading("");
                setSuccess(false);
        }
      };
  return (
    <div>
      <Helmet>
        <title> Text Summarizer</title>
        <meta
        name="description" content="Free Text summarisation tool"
        />
        <meta name="keywords" content="Free text summarisation tool, text summarizer, free tool, text summarise"/>
      </Helmet>
      <div style={{display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',backgroundColor:'lightBlue'}} >
      <img src={require('../../Icons/ideas.png')} style={{height:50,width:50,marginLeft:'2%'}}/>
      <h1 style={{textAlign:'center',color:'black',padding:'2%'}}>'Tools Master' AI based Text Summarization Tool</h1>
      </div>
      <div style={{ width: '50%',margin:  'auto',borderStyle:'groove',padding:20}}>
      <div>
        <TextField
          aria-label="empty textarea" multiline
          minRows={5}
          value={text}
          placeholder="Type or Paste your text here"
          style={{ width: '100%',marginTop:'1%' }}
          onChange={(e) =>{ setText(e.target.value);setWordCountOriginal(e.target.value.split(" ").length)}}
        />
      </div>
      <div>
      <TextField   type="number" style={{ width: '100%',marginTop:'3%' }}
     label="Percentage of summary required from Original Text"
     InputProps={{
        inputProps: { min: 0 }
      }}
     value={summaryPercentage} onChange={e=>setSummaryPercentage(e.target.value)}
     />
      </div>
      <div>
        <Button variant="contained" onClick={callAPI}  style={{ marginTop:'10%' }}>
          Summarize
        </Button>
      </div>
      {loading?<CircularProgress style={{marginLeft:'50%'}}/>:success&&<div>

        <h1 style={{marginTop:'5%',textAlign:'center',fontWeight:'bold'}}>Summarized Text</h1>
        Words Count of the original text : {wordCountOriginal} <br/>
        Words Count of the summarized text : {result.split(" ").length}
        <TextField
          aria-label="empty textarea"
          minRows={5} multiline
          placeholder="Summarized Text"
          style={{ width: '100%',marginTop:'5%' ,backgroundColor:'lightGreen'}}
          value={result}
        />
      </div>
}
    </div>
    <div style={styles.description}>
                <h1 style={styles.paraHead}>Tools Master Free Text Summarisation Tool </h1>
                <h1 style={styles.parasubheader}>What is Tools Master?</h1>
                <p>The Tools Master is a platform which provides tools for different requirements. All these services are provided for free.</p>

                <h1 style={styles.parasubheader}>What is AI?</h1>
                <p>AI abbreviation of Artificial Intelligence is the branch of computer science that deals with building machines which can mimic the human intelligence. </p>

                <h1 style={styles.parasubheader}>Text Summarisation</h1>
                <p>Text summarisation is usefull to obtain a short version of a text which is brief but consisted with importatnt points</p>

                 <h1 style={styles.parasubheader}>What is 'Tools Master' Text summarisation tool</h1>
                 <p>The Tools Master Text summarisation tool is a free AI based text summariser which allows to customize the size of the summary required </p>

            </div>
    <Footer/>
    </div>
  )
}
const styles={
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
}
export default Summarisation