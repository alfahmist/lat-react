import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Welcome from './Welcome';
import Comment from './Comment';

import reportWebVitals from './reportWebVitals';

// const author = {
//   avatarUrl : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRGNens_IGL9MqtOmRCvPhC2fbq4Mkra_OQNjT_L88N2TyviO0g",
//   name : "Fahmi"
// }

const commentObj = {
  author : {
    avatarUrl : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRGNens_IGL9MqtOmRCvPhC2fbq4Mkra_OQNjT_L88N2TyviO0g",
    name : "Fahmi"
  },
  text : "Blue Avatar",
  date : "28 Juni 2012"
}

ReactDOM.render(
  <React.StrictMode>
    <App name="Sara"/>
    <Comment author={commentObj.author} text={commentObj.text} date={commentObj.date}/>
    {/* <Comment {...commentObj}/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
