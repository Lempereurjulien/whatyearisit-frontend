
fetch('https://whatyearisit-backend-lake-xi.vercel.app/year')
.then(response => response.json())
.then(data => {
    console.log(data)
    document.querySelector('#year').textContent =
    `${data}`
})