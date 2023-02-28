const myform = document.getElementById("myform");
const mylinkInput = document.getElementById("mylink");
const papa = document.getElementById("papa");
myform.addEventListener("submit", async (e) => {
  e.preventDefault();
  const myoriginalLink = mylinkInput.value;
  const apiUrl = `https://api.shrtco.de/v2/shorten?url=${myoriginalLink}`;

  try{
    const myresponse = await fetch(apiUrl);
    const mydata = await myresponse.json();
    console.log(mydata);
    let mylink = document.createElement("li");
    mylink.className = "output"
    mylink.innerHTML = `<a href="${mydata.result.full_short_link}" target="_blank">${mydata.result.full_short_link} </a>`;
    papa.prepend (mylink);

  }catch(e){
    
    console.error(e);
  }

});
