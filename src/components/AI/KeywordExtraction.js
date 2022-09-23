import React,{useState} from 'react'
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CircularProgress from '@mui/material/CircularProgress';
import { Helmet } from 'react-helmet';
import Footer from '../Footer';

function KeywordExtraction() {
    const [text, setText] = useState("");
    const [results,setResults]=useState("");
    const [numberofwords,setNumberofwords]=useState(5);
    const [ngram,setngram]=useState(2);
    const [loading,setLoading]=useState("");
    const [success,setSuccess]=useState(false);

    const callAPI=()=>{
      if (text.length!=''){
        setLoading(true);
        const axios = require("axios");
      const options = {
        method: 'POST',
        url: 'https://keyword-extractor.p.rapidapi.com/api/keyword',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': 'e4ec10927emsh6bfc7f528f5b208p1f8db3jsn19a2f2c51ead',
          'X-RapidAPI-Host': 'keyword-extractor.p.rapidapi.com'
        },
        data: {"text":text,"top_n":numberofwords,"ngram_range":[1,Number(ngram)],"diversify":false,"diversity":0}
      };
      
      axios.request(options).then(function (response) {
        //console.log(typeof(response.data.result));
        setResults(response.data.result);
        setLoading('');
        setSuccess(true);
      }).catch(function (error) {
        //console.error(error);
        alert("Something went wrong. Please try again later");
        setText("");
        setResults("");
        setNumberofwords(5);
        setngram(2);
        setLoading("");
        setSuccess(false);
      });
      }
      else{
        alert("Text cannot be empty")
        setText("");
        setResults("");
        setNumberofwords(5);
        setngram(2);
        setLoading("");
        setSuccess(false);
      }
    }
  return (
    <div>
      <Helmet>
        <title>Free Keyword Extraction Tool</title>
        <meta
        name="description" content="Free Keyword Extraction tool to extract keywords from a text"
        />
        <meta name="keywords" content="Keyword extraction tool, keywords, keyword extraction, free"/>
      </Helmet>
      <div style={{display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',backgroundColor:'lightBlue'}} >
      <img src={require('../../Icons/ideas.png')} style={{height:50,width:50,marginLeft:'2%'}}/>
        <h1 style={{textAlign:'center',color:'black',padding:'2%'}}>'Tools Master' AI based Keyword Extraction Tool from text</h1>
      </div>
      <div style={{ width: '50%',margin:  'auto',borderStyle:'groove',padding:20}}>
      <div>
        <TextField
          aria-label="empty textarea"
          minRows={5} multiline
          placeholder="Type or Paste your text here"
          style={{ width: '100%',marginTop:'1%' }}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
      <TextField   type="number" style={{ width: '100%',marginTop:'3%' }}
     label="Number of Keywords required"
     InputProps={{
        inputProps: { min: 0 }
      }}
     value={numberofwords} onChange={e=>setNumberofwords(e.target.value)}
     />
      </div>
      <div>
      <TextField   type="number" style={{ width: '100%',marginTop:'3%' }}
     label="N-gram length"
     InputProps={{
        inputProps: { min: 0 }
      }}
     value={ngram} onChange={e=>setngram(e.target.value)}
     />
      </div>

      <div>
      <Button variant="contained" onClick={callAPI}  style={{ marginTop:'10%' }}>
          Generate Keywords
        </Button>
      </div>
      {loading?<CircularProgress style={{marginLeft:'50%'}}/>:success&&<div>

        <h1 style={{marginTop:'5%',textAlign:'center',fontWeight:'bold'}}>Results of the Key word Extraction</h1>
        <div >
          <table style={{width:'100%',textAlign:'left'}}>
            <thead>
              <tr>
              <th>Key Word</th>
              <th>Important score</th>
              </tr>
            </thead>
            <tbody>
            {
        Object.keys(results).map((key, i) => (
          <tr key={i}>
            <td>{key}</td>
            <td>{results[key]}</td>
          </tr>
        ))
      }
            </tbody>
          </table>
       
      </div>
      </div>}
    </div>
    <div style={styles.description}>
                <h1 style={styles.paraHead}>Tools Master Free Paraphrasing Tool </h1>
                <h1 style={styles.parasubheader}>What is Tools Master?</h1>
                <p>The Tools Master is a platform which provides tools for different requirements. All these services are provided for free.</p>

                <h1 style={styles.parasubheader}>What is AI?</h1>
                <p>AI abbreviation of Artificial Intelligence is the branch of computer science that deals with building machines which can mimic the human intelligence. </p>

                <h1 style={styles.parasubheader}>What are Keywords?</h1>
                <p>Keywords are the terms or words that define the content of a text. The keywords are useful to identify what a content is about without fully reading. Further in terms of SEO, the keywords are the words that people search. So identifying keywords of a content is very much useful to a content creator</p>

                 <h1 style={styles.parasubheader}>What is 'Tools Master' AI based keyword extraction tool?</h1>
                 <p>The 'Tools Master' keyword extraction tool is an AI based keyword extraction tool which can be used to extract keywords from texts and their relative importance within text. You can specify the number of keywords required and the N-grams (length of word collections) to be considered</p>
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

export default KeywordExtraction