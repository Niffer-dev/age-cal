const dd = document.querySelector(".inputD")
const mm = document.querySelector(".inputM")
const yyyy = document.querySelector(".inputY")
const submit = document.querySelector(".subbtn")
const errorAlert = document.querySelector(".modal-bg")
const errorMessage = document.querySelector(".error-message")


submit.addEventListener("click", function(){
    if(dd.value === "" || mm.value === "" || yyyy.value === ""){
        validateErrors("Please fill in the field")
    }
    else if(!Number(dd.value) || !Number(mm.value) || !Number(yyyy.value)){
        validateErrors("Please both fields should be numbers")
    } 
    else{
        const calyyy = Math.abs(new Date().getFullYear() - Number(yyyy.value))
        const calmm = Math.abs(new Date().getMonth() + 1 - Number(mm.value))
        const caldd = Math.abs(new Date().getDate() - Number(dd.value))
        document.querySelector('.y').textContent = ""+ calyyy
        document.querySelector('.m').textContent = ""+ calmm
        document.querySelector('.d').textContent = ""+ caldd
    }
})

function validateErrors(msg){
    errorAlert.style.display = "flex"
    errorMessage.textContent = msg

    setTimeout(function(){
        errorAlert.style.display = "none"
        errorMessage.textContent = ""
    },5000)
}


document.querySelector(".btn").addEventListener("click", () => {
    errorAlert.style.display = "none"
    errorMessage.textContent = ""
})

async function getData(){
    const response  = await fetch("https://api.adviceslip.com/advice",{
        method:"GET"
    })
    const data = await response.json()

    document.querySelector(".info").textContent = data.slip.advice
    console.log(data)
}

getData()