// Write your JavaScript code here.
// Remember to pay attention to page loading!
 let topp = 0;
let leftt = 0;

window.addEventListener('load', function () {
    console.log('Its loaded!');


    document.getElementById('up').addEventListener('click', function (){
        //console.log("Hello");
        let myHeight = document.getElementById('spaceShuttleHeight').innerText;
        myHeight = Number(myHeight) + 10000;
        document.getElementById('spaceShuttleHeight').innerText = myHeight;
        let rocket = document.getElementById('rocket');
       rocket.style.top = myHeight + "px";
        
        
       

    });

    document.getElementById('down').addEventListener('click', function (){
        let myHeight = document.getElementById('spaceShuttleHeight').innerText;
        myHeight = Number(myHeight) - 10000;
        document.getElementById('spaceShuttleHeight').innerText = myHeight;

     let rocket = document.getElementById('rocket');
     let rocketHeight = parseInt(rocket.style.top);
     console.log(rocketHeight);
        rocket.style.top = rocketHeight + 10000+ "px" ;
        
        
       

    });

    document.getElementById('left').addEventListener('click', function () {
        let rocket = document.getElementById('rocket');
        leftt = leftt - 10;
        alert(leftt)
        rocket.setAttribute("style", "top: " + topp + "px;  left: " + leftt + "px; position: relative:");

    });

    document.getElementById('right').addEventListener('click', function () {
        let rocket = document.getElementById('rocket');
        alert(leftt);
        leftt = leftt + 10;
        rocket.setAttribute("style", "top: " + topp + "px;  left: " + leftt + "px; position: relative:");

    });


    document.getElementById('missionAbort').addEventListener('click', function (){
        let response = window.confirm("Confirm that you want to abort the mission.")
       if (response) {
        document.getElementById('flightStatus').innerText = "Mission aborted.";
        document.getElementById('shuttleBackground').setAttribute('style', 'background-color: green;');
        document.getElementById('spaceShuttleHeight').innerText = '0';
       }
    });

    document.getElementById('landing').addEventListener('click', function (){
        window.alert("The shuttle is landing. Landing gear Engaged");
        document.getElementById('flightStatus').innerText = "The shuttle is landed.";
        document.getElementById('shuttleBackground').setAttribute('style', 'background-color: green;');
        document.getElementById('spaceShuttleHeight').innerText = '0';

    })

    document.getElementById('takeoff').addEventListener('click', function(){
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if (response) {
            document.getElementById('flightStatus').innerText = "Shuttle in Flight";
            document.getElementById('shuttleBackground').setAttribute('style', 'background-color: blue;');
            document.getElementById('spaceShuttleHeight').innerText = '10000';
        }
 
     });



});