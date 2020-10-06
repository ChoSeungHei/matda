import {rootURL} from '../config/config';

const fetchJoin = async(email,pw,name,pwAnswer,isSeoul,address,pwQId) =>{
    fetch(rootURL+"/join",{
      method: "POST",
      headers: {
            'Content-type': 'application/json'
        },
      body: JSON.stringify({
        email: email,
        password: pw,
        name : name,
        pw_question_id : pwQId,
        pw_answer : pwAnswer,
        is_seoul : isSeoul,
        address : address
      })
    })
    .then(response => response.json())
    .then((response) => {
        console.log('response:', response)
      }
    )
  };

const regionList = () => {
  return fetch(rootURL+"/regionList")
  .then(response => {return response.json()});
}

export {fetchJoin,regionList};