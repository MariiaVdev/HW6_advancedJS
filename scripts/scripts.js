urlMyIP = 'https://api.ipify.org/?format=json';
const container = document.querySelector('.card__info');
const btn = document.querySelector('button');

btn.addEventListener('click', async () => {
    const {ip} = await fetch(urlMyIP).then(res => res.json());
    fetch(`http://ip-api.com/json/${ip}`).then(res => res.json())
    .then(({status, country, regionName, city, timezone }) => {
        if (status === 'success') {
            container.innerHTML = ` <ul>
                <li><b>Континент:</b> ${timezone}</li>
                <li><b>Країна:</b> ${country} </li>
                <li><b>Регіон:</b> ${regionName}</li>
                <li><b>Місто:</b> ${city}</li>
            </ul>`;
            container.classList.add('visible');
        }

    });
})


