
fetch('https://whatyearisit-backend-lake-xi.vercel.app/year')
.then(response => response.json())
.then(data => {
    console.log(data)
    document.querySelector('#year').innerHTML +=
    `L'année est ${data.date}`
})