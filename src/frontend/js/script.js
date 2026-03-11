const video = document.getElementById("camera")

navigator.mediaDevices.getUserMedia({video:true})
.then(stream=>{
video.srcObject=stream
})

.catch(()=>{
console.log("Camera access denied")
})

function startSystem(){
document.getElementById("alertBox").value+="\nSystem Started..."
}

function stopSystem(){
document.getElementById("alertBox").value+="\nSystem Stopped..."
}

function updateEAR(value){
document.getElementById("earValue").innerText=value
}

function updateDriverStatus(status){

const box=document.getElementById("driverStatus")

box.innerText=status

if(status=="Awake") box.className="status-awake"

if(status=="Warning") box.className="status-warning"

if(status=="Drowsy"){
box.className="status-drowsy"
document.getElementById("alertBox").value+="\n⚠ Drowsiness Detected!"
}

}