
fetch('https://whatyearisit-backend-lake-xi.vercel.app/year')
.then(response => response.json())
.then(data => {
    document.querySelector('#year').textContent =
    `L'année est ${data.date}`
})