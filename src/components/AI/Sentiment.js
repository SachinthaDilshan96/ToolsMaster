import React,{useState} from 'react'
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import CircularProgress from '@mui/material/CircularProgress';
import { Helmet } from 'react-helmet';
import Footer from '../Footer';


function Sentiment() {
    const [text, setText] = useState("");
    const [sentimentResult,setsentimentResult]=useState('');
    const [sentimentPercentage,setsentimentPercentage]=useState('');
    const [loading,setLoading]=useState("");
    const [success,setSuccess]=useState(false);
    
    const callAPI=()=>{

        if (text.length!=0){
          setLoading(true);
          const axios = require("axios");

const encodedParams = new URLSearchParams();
encodedParams.append("text", text);

const options = {
  method: 'POST',
  url: 'https://text-sentiment.p.rapidapi.com/analyze',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'e4ec10927emsh6bfc7f528f5b208p1f8db3jsn19a2f2c51ead',
    'X-RapidAPI-Host': 'text-sentiment.p.rapidapi.com'
  },
  data: encodedParams
};

axios.request(options).then(function (response) {
	console.log(response.data);
    if (response.data.pos==1){
        setsentimentResult('Positive');
        setsentimentPercentage(response.data.pos_percent)
    }
    else if (response.data.neg==1){
        setsentimentResult('Negative');
        setsentimentPercentage(response.data.neg_percent)
    }
    else if (response.data.mid==1){
        setsentimentResult('Mid');
        setsentimentPercentage(response.data.mid_percent)
    }
    setLoading('')
    setSuccess(true)
    
}).catch(function (error) {
  alert("Something went wrong. Please try again later");
  setText("");
  setsentimentResult('');
  setsentimentPercentage('');
  setLoading("");
  setSuccess(false);
});
       
}
else {
  alert("Text cannot be empty")
  setText("");
  setsentimentResult('');
  setsentimentPercentage('');
  setLoading("");
  setSuccess(false);

}
    }
  return (
<div>
    <Helmet>
        <title>Free Sentiment Analysing Tool</title>
        <meta
        name="description" content="Free Sentiment Analysing Tool to identify the polarity of a text"
        />
        <meta name="keywords" content="Tools master, Sentiment Analysing Tool, Sentiment, Text Analyising Tool,Sentiment Analyzing Tool, Sentiment Analyser, Sentiment Analyzer"/>
      </Helmet>
      <div style={{display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',backgroundColor:'lightblue'}} >
      <img src={require('../../Icons/ideas.png')} style={{height:50,width:50,marginLeft:'2%'}}/>
        <h1 style={{textAlign:'center',color:'black',padding:'2%'}}>'Tools Master' AI based Free Text Sentiment Analyser</h1>
    </div>
<div style={{ width: '50%',margin:  'auto',borderStyle:'groove',padding:20}}>
      <div>
        <TextField
          aria-label="empty textarea" multiline
          minRows={5}
          placeholder="Type or Paste your text here"
          style={{ width: '100%',marginTop:'1%' }}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
      <Button variant="contained" onClick={callAPI}  style={{ marginTop:'10%' }}>
          Analyse
        </Button>
      </div>
      {loading?<CircularProgress style={{marginLeft:'50%'}}/>:success&&<div>

        <h1 style={{marginTop:'5%',textAlign:'center',fontWeight:'bold'}}>Results of the Sentiment Analysis</h1>
        <table style={{width:'50%',textAlign:'left'}}>
          <thead>
            <tr>
              <th>Result</th>
              <th>Polarity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> {sentimentResult}</td>
              <td>{sentimentPercentage}</td>
            </tr>
          </tbody>
        </table>
      </div>}
    </div>
    <div style={styles.description}>
                <h1 style={styles.paraHead}>Tools Master Free Sentiment Analysing Tool </h1>
                <h1 style={styles.parasubheader}>What is Tools Master?</h1>
                <p>The Tools Master is a platform which provides tools for different requirements. All these services are provided for free.</p>

                <h1 style={styles.parasubheader}>What is AI?</h1>
                <p>AI abbreviation of Artificial Intelligence is the branch of computer science that deals with building machines which can mimic the human intelligence. </p>

                <h1 style={styles.parasubheader}>What is sentiment analysis?</h1>
                <p>The sentiment anlysis is a NLP (Natural Language Processing) technique which is used to determine the polarity of a text. This polarity can be positive, negative or neutral. Sentiment analysis is useful to analyse and identify customer feedbacks, requirements, market behaviour and many more. </p>

                 <h1 style={styles.parasubheader}>What is 'Tools Master' sentiment analyser</h1>
                 <p>The Tools Master sentiment analyser is an AI based sentiment analysing tool which can be used to analyse the polarity or sentiment of a text for free.</p>

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
export default Sentiment