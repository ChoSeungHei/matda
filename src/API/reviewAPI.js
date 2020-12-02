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

const fetchMyTop3 = async(email) => {
  return fetch(rootURL + "/mytop3",{
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      email:email
    })
  })
  .then(response => {
    return response.json()
  });
};

const fetchAddrTop3 = async(addr) => {
  return fetch(rootURL + "/addrtop3",{
     method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        location: addr
      })
  })
  .then(response => {
    return response.json()
  });
};

const fetchMyReview = async(email,page) => {
  return fetch(rootURL + "/myreview",{
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email:email,
        page: page
      })
  })
  .then(response => {
    return response.json()
  });
};

const fetchTotalCnt = async(email) => {
  return fetch(rootURL + "/totalcnt",{
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      email:email
    })
  })
  .then(response => {
    return response.json()
  });
}
export {fetchReview,fetchNumofReview,fetchMyTop3,fetchAddrTop3,fetchMyReview,fetchTotalCnt};