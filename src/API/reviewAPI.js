import {rootURL} from '../config/config';

const fetchReview = async(email,title,rate,comment,address) =>{
    fetch(rootURL+"/review",{
      method: "POST",
      headers: {
            'Content-type': 'application/json'
        },
      body: JSON.stringify({
        email: email,
        title: title,
        rate : rate,
        text : comment,
        address : address
      })
    })
    .then(response => response.json())
    .then((response) => {
        console.log('response:', response)
      }
    )
  };

const fetchNumofReview = async(email) => {
    return fetch(rootURL+"/numofreview",{
        method:"POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: email
        })
    })
    .then(response => {
        return response.json()
    });
};

export {fetchReview,fetchNumofReview};