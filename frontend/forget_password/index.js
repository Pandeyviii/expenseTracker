async function forgotPassword(e) {
    try{
    e.preventDefault();
    const userDetails={
        email:e.target.email.value
    }

  
    console.log(userDetails)
    axios.post('http://107.23.251.77:3000/password/forgotpassword',userDetails).then(response => {
        if(response.status === 202){
            document.body.innerHTML += '<div style="color:red;">Mail Successfuly sent <div>'
        } else {
            throw new Error('Something went wrong!!!')
        }
        console.log(response)
    })
    .catch(err => {
        document.body.innerHTML += `<div style="color:red;">${err} <div>`;
    })
} catch(err){
    document.body.innerHTML+=`<div style="color:red;">${err}</div>`
}
}