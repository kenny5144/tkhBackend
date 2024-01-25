const update = document.getElementById('update-button');
console.log(update)
update.addEventListener('click', () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch('/users', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username,
            password: password
        }),
    })
        .then(res => {
            window.location.reload(true)
            console.log(`main.js res`, JSON.stringify(res));
            if (res.ok) return res.json();
        })
        // .then(res =>{
        // })
})