console.log('script sourced.');

function getQuotes(){
    //Axios GET request
    axios.get('/quotes').then((response) => {
        //Code that will run on a successful response
        //from the server.
       console.log(response); 
       //quotesFromServer will be an array of quotes
       let quotesFromServer = response.data;
       let contentDiv = document.querySelector('#content');
       //Loop over array of quotes and append to the DOM
       for (let quote of quotesFromServer) {
        contentDiv.innerHTML += `
            <p>"${quote.text} - ${quote.author}"</p>
        `
       }
    }); //ALWAYS add .catch
}
getQuotes();

function submitForm(event){
    //stop page from refreshing
    event.preventDefault();
    console.log("In submitForm function")
    let quote = document.querySelector('#quoteInput').value
    let author = document.querySelector('#authorInput').value
    console.log('Inputs ', quote, author)
    let quoteForServer = {
        quote: quote,
        author: author,
    };
    // type     url         data to send        
    axios.post('/quotes',quoteForServer).then((response) => {
        
    })

}