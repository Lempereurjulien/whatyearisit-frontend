
fetch('https://whatyearisit-backend-lake-xi.vercel.app/year')
.then(response => response.json())
.then(data => {
    console.log(date)
    document.querySelector('#year').textContent =
    `${data}`
})