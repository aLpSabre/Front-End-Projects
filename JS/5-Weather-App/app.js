
const weathers = document.querySelector(".weathers");
const input = document.querySelector(".form-control")
const submit = document.querySelector(".btn")
const token = config.MY_API_TOKEN;
let cityName;
let cities = [];


const fetchdata = (name) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${token}=metric`)
    .then((res) => {

      if (!res.ok) {
        if (name.length > 0) {
          renderError();
        }

      }
      return res.json()
    }).then((data) => renderData(data)).catch((error) => { })
}

const renderData = (data) => {

  const { weather, main: { temp }, sys: { country } } = data

  weathers.innerHTML += `
     
      <div class="card col-md-4 col-xxl-2 col-xl-3 col-sm-8 shadow-sm">
      <i class="fa-sharp fa-solid fa-square-xmark"></i>
        <h2 class="text-capitalize text-center mt-3">${cityName}<sup class="m-1 bg-info text-white">${country}</sup></h2>
        <img src="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png" class="card-img-top" alt="...">
       
        <ul class="list-group list-group-flush text-center">
          <li class="list-group-item fw-semibold fs-2">${temp}<sup>°C</sup></li>
          <li class="list-group-item fw-semibold fs-5 text-capitalize">${weather[0].description}</li>
        </ul>
      </div> `
}

const renderError = () => {

  document.querySelector(".error").innerText = `${cityName} is not found`
  document.querySelector(".error").classList.remove("invisible");

};


submit.addEventListener("click", () => {
  cityName = input.value;
console.log(cityName.toLocaleLowerCase());
  if (!cities.includes(cityName.toLocaleLowerCase())) {
    fetchdata(cityName);
    cities.push(cityName.toLocaleLowerCase());
  } else if (input.value.length > 0) {
    document.querySelector(".error").innerText = `${cityName} has been already added`
    document.querySelector(".error").classList.remove("invisible");
    input.value = ""
    return;
  }
  document.querySelector(".error").classList.add("invisible");
  input.value = ""


})

weathers.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-sharp")) {
    e.target.parentElement.remove();
    cities.splice((cities.indexOf(e.target.nextElementSibling.innerText.slice(0, e.target.nextElementSibling.innerText.length - 2).toLocaleLowerCase())));

  }
})

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    submit.click();
  }
})