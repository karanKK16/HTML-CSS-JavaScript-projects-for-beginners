const btnnE1 = document.getElementById("btn");
const jokeE1 = document.getElementById("joke")

const apikey = "rNwsjJ1QB6PJjzJNku1pwA==TJkg3U7QuczhGsja"

const options ={
    method: "GET",
    headers:{
        "X-Api-key": apikey,
    },
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){
      
    try {
        

    jokeE1.innerText = "updating";
    btnnE1.disabled = true;
    btnnE1.innerText = "laoding...."
    const response = await fetch(apiURL, options)
    const data = await response.json()

    btnnE1.disabled = false;
    btnnE1.innerText = "Tell me a joke"

    jokeE1.innerText = data[0].joke;
    } catch (error) {
        jokeE1.innerText= "An error happended try again later"
        btnnE1.disabled = false;
        btnnE1.innerText = "Tell me a joke"
        console.log(error)
        
    }



}


btnnE1.addEventListener("click", getJoke)