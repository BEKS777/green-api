document.getElementById('getSettings').addEventListener('click', function() {
    callApi('getSettings');
});

document.getElementById('getStateInstance').addEventListener('click', function() {
    callApi('getStateInstance');
});

document.getElementById('sendMessage').addEventListener('click', function() {
    const message = document.getElementById('message').value;
    callApi('sendMessage', { message });
});

document.getElementById('sendFileByUrl').addEventListener('click', function() {
    const fileUrl = document.getElementById('fileUrl').value;
    callApi('sendFileByUrl', { urlFile: fileUrl });
});

function callApi(method, body) {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;

    if (!idInstance || !apiTokenInstance) {
        alert('Please enter idInstance and ApiTokenInstance');
        return;
    }

    let url = `https://api.green-api.com/${method}/${idInstance}/${apiTokenInstance}`;

    fetch(url, {
        method: body ? 'POST' : 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body ? JSON.stringify(body) : undefined
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'Error: ' + error;
    });
}
