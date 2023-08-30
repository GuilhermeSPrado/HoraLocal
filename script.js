fetch('http://ip-api.com/json')
  .then(response => response.json())
  .then(data => {
    let city = data.city;
    let country = data.country;
    let location = document.getElementById("city-country");
    location.innerText = `${city}, ${country}`;
    
    
  })
  
  .catch(error => {
    console.error('Error:', error);
  });

  function updateTime(){
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    // Add leading zeros if necessary
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    let time = hours + ":" + minutes + ":" + seconds;
    let timeContainer=document.getElementById("current-time")
    let greeting=document.getElementById('greeting')
    let ico=document.getElementById('moon-sun-ico')
    if(hours>=18){
        ico.src='moon.png'
        greeting.innerText='Boa Noite, Horário Atual'
        timeContainer.innerText =`${time} PM`;
        document.body.style.backgroundImage = "url('evening.jpg')"
    }
    else if(hours>=12){ico.src='sun.png'
    greeting.innerText='Boa Tarde, Horário Atual'
    timeContainer.innerText =`${time} PM`;
    document.body.style.backgroundImage = "url('morning.jpg')"
}
    else {
        ico.src='sun.png'
        greeting.innerText='Bom Dia, Horário Atual'
        timeContainer.innerText =`${time} AM`;
        document.body.style.backgroundImage = "url('morning.jpg')"
    }
    }setInterval(updateTime, 1000);