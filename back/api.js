const apiUrl = "http://127.0.0.1:5000/"

// Use the fetch function
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON data from the response
    })
    .then(data => {
        console.log(data); // Handle the JSON data
        let fullName = `${data.firstName} ${data.lastName}`;
        let age = data.age;
        
        let nameParse = document.getElementById('name');
        let ageParse = document.getElementById('age');
        nameParse.innerText = fullName;
        ageParse.innerText = age;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
