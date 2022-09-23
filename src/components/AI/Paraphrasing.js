import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import CircularProgress from "@mui/material/CircularProgress";
import { Helmet } from "react-helmet";
import Footer from "../Footer";
import { TextField } from "@mui/material";

function Paraphrasing() {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("en");
  const [protectedKeys, setProtectedKeys] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState(false);

  const callAPI = () => {
    if (text.length != "") {
      setLoading(true);
      const axios = require("axios");

      const encodedParams = new URLSearchParams();
      encodedParams.append("text", text);
      encodedParams.append("lang", language);
      encodedParams.append("paraphrase_capital", "true");
      encodedParams.append("protected", protectedKeys);

      const options = {
        method: "POST",
        url: "https://rimedia-paraphraser.p.rapidapi.com/api_paraphrase.php",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key":
            "e4ec10927emsh6bfc7f528f5b208p1f8db3jsn19a2f2c51ead",
          "X-RapidAPI-Host": "rimedia-paraphraser.p.rapidapi.com",
        },
        data: encodedParams,
      };

      axios
        .request(options)
        .then(function (response) {
          // console.log(response.data);
          setResult(response.data.result_text_new);
          setLoading("");
          setSuccess(true);
        })
        .catch(function (error) {
          //console.error(error);
          alert("Something went wrong. Please try Again later");
          setText("");
          setLanguage("en");
          setProtectedKeys("");
          setResult("");
          setLoading("");
          setSuccess(false);
        });
    } else {
      alert("Text cannot be empty");
      setText("");
      setLanguage("en");
      setProtectedKeys("");
      setResult("");
      setLoading("");
      setSuccess(false);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Free Paraphrasing Tool</title>
        <meta
          name="description"
          content="Free paraphrasing tool to rewrite articles without plagiarism"
        />
        <meta
          name="keywords"
          content="Tools Master, paraphrasing tool, article rewrite, article paraphrasing, article write without plagiarism, plagiarism remove,"
        />
      </Helmet>
      <div style={{display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',backgroundColor:'lightBlue'}} >
        <img src={require('../../Icons/ideas.png')} style={{height:50,width:50,marginLeft:'2%'}}/>
        <h1
          style={{
            textAlign: "center",
            color: "black",
            padding: "2%",
          }}
        >
          'Tools Master' AI based Free Paraphrasing Tool
        </h1>
      </div>
      <div style={{ width: "50%", margin: "auto",borderStyle:'groove',padding:20}}>
        <div style={{marginTop:50,}}>
          <TextField
            aria-label="empty textarea"
            minRows={5}
            multiline
            placeholder="Type or Paste your text here"
            style={{ width: "100%", marginTop: "1%" }}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <FormControl
            fullWidth={true}
            style={{ width: "100%", marginTop: "10%" }}
          >
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
              label="Language"
              onChange={(e) => setLanguage(e.target.value)}
              defaultValue="en"
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="de">German</MenuItem>
              <MenuItem value="es">Spanish</MenuItem>
              <MenuItem value="fr">French</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <TextField
            aria-label="empty textarea"
            minRows={2} multiline
            placeholder="List of words that doesn't need the paraphrasing. Seperate the words with semicolon(;). Ex. car;van;"
            style={{ width: "100%", marginTop: "10%" }}
            onChange={(e) => setProtectedKeys(e.target.value)}
          />
        </div>
        <div>
          <Button
            variant="contained"
            onClick={callAPI}
            style={{ marginTop: "10%" }}
          >
            Paraphrase
          </Button>
        </div>
        {loading ? (
          <CircularProgress style={{ marginLeft: "50%" }} />
        ) : (
          success && (
            <div >
              <h1 style={{marginTop:'5%',textAlign:'center',fontWeight:'bold'}}>Paraphrased Text</h1>
              <TextField
                aria-label="empty textarea" multiline
                minRows={5}
                placeholder="Paraphrased Text"
                style={{ width: "100%", marginTop: "5%",backgroundColor:'lightGreen' }}
                value={result}
              />
            </div>
          )
        )}
      </div>

      <div style={styles.description}>
                <h1 style={styles.paraHead}>Tools Master Free Paraphrasing Tool </h1>
                <h1 style={styles.parasubheader}>What is Tools Master?</h1>
                <p>The Tools Master is a platform which provides tools for different requirements. All these services are provided for free.</p>

                <h1 style={styles.parasubheader}>What is AI?</h1>
                <p>AI abbreviation of Artificial Intelligence is the branch of computer science that deals with building machines which can mimic the human intelligence. </p>

                <h1 style={styles.parasubheader}>What is Plagiarism? </h1>
                <p>Presenting someon else's work as your own or obtaining someon else's work without giving credit is known as plagiarism. This is not accepeted in academic writing and hence plagiarism should be removed from text.</p>

                 <h1 style={styles.parasubheader}>Paraphrasing, AI based Plagiarism removal tools</h1>
                 <p>The removal of the plagiarism from texts is called as paraphrasing. Due to the advancements in AI, we have the ability to use AI based tools (paraphrasing tools) to remove plagiarism from texts. The Tools Master Paraphrasing tool is a free plagiarism removal tool which supports Number of languages including English, German and French</p>
            </div>
      <Footer/>
    </div>
  );
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
export default Paraphrasing;
