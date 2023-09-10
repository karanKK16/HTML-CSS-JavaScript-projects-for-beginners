const btnE1 = document.getElementById("btn");
const emojiNameE1 = document.getElementById("emoji-name")


const emoji = [];

async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=8c211499573dcdea6126edc313d8875ee29c5f27");
    data = await response.json();
    console.log(data);

    for(let i=0; i<1500; i++){
        emoji.push({
            emojiName:data[i].character,
            emojiCode:data[i].unicodeName,
        })
    }
}
getEmoji();

console.log(emoji);

btnE1.addEventListener("click",()=>{
    const randomNum = Math.floor(Math.random()*emoji.length);
    btnE1.innerText = emoji[randomNum].emojiName;
    emojiNameE1.innerText = emoji[randomNum].emojiCode;
})