// const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
// const cityName = 'boston';
// const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
// const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;


const button = document.querySelector('.btn-src');
const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';

button.addEventListener('click', () => {
  const cityName = document.querySelector('.search-box').value;

  if (cityName !== '') {
    try {

      fetch(`${serverUrl}?q=${cityName}&units=metric&appid=${apiKey}`)
    }
    catch (err) {
      alert('err')
    }
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          const result = document.querySelector('.weather-main');
          result.innerHTML = `
                    <div class="weather-info">
                      <div class="degree">${response.main.temp}&deg</div>
                      <img src=" images/icons_cloud.svg" class="cloud">
                      <p class="city">${response.name}</p>
                     <button class="shape-main">
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="shape">
                        <path opacity="0.54" fill-rule="evenodd" clip-rule="evenodd"
                          d="M17.5 1C15.0556 1 12.8556 2.7875 12 5.125C11.1444 2.7875 8.94444 1 6.5 1C3.44444 1 1 3.6125 1 7.1875C1 12 5.27778 16.125 12 23C18.7222 16.125 23 12 23 7.1875C23 3.6125 20.5556 1 17.5 1Z"
                          stroke="black" stroke-width="2" />
                      </svg>
                      </button>
                      <div class="tabs-block">
                        <button class="tabs">Now</button>
                        <button class="tabs">Details</button>
                        <button class="tabs">Forecast</button>
                      </div>
                    </div>
                    <div>
                      <div class="locations-added">
                        <p class="locations-text">Added-locations:</p>
                      </div>
                      <div class="locations">
                        <div class="locations-list"></div>
                      </div>
                    </div>
               `;
        });
    
  }
});

// function createHtmlTask() {
//     return `
//     <div class="weather-main">
//         <div class="weather-info">
//           <div class="degree">${response.temp}</div>
//           <img src=" images/icons_cloud.svg" class="cloud">
//           <p class="city">${response.name}</p>
//          <button class="shape-main">
//           <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="shape">
//             <path opacity="0.54" fill-rule="evenodd" clip-rule="evenodd"
//               d="M17.5 1C15.0556 1 12.8556 2.7875 12 5.125C11.1444 2.7875 8.94444 1 6.5 1C3.44444 1 1 3.6125 1 7.1875C1 12 5.27778 16.125 12 23C18.7222 16.125 23 12 23 7.1875C23 3.6125 20.5556 1 17.5 1Z"
//               stroke="black" stroke-width="2" />
//           </svg>
//           </button>
//           <div class="tabs-block">
//             <button class="tabs">Now</button>
//             <button class="tabs">Details</button>
//             <button class="tabs">Forecast</button>
//           </div>
//         </div>
//         <div>
//           <div class="locations-added">
//             <p class="locations-text">Added-locations:</p>
//           </div>
//           <div class="locations">
//             <div class="locations-list"></div>
//           </div>
//         </div>
//       </div>
//     `;
// }