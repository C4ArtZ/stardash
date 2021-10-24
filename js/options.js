
const status = document.getElementById('status');

window.onload = loadOptions();


// Saves options to chrome.storage
function save_options() {
    chrome.storage.sync.clear();

    const username = document.querySelector('#username').value;

    chrome.storage.sync.set({
        "username": username
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
    // chrome.storage.sync.set({"username": username});
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
async function loadOptions () {
    const usernameResult = await getLocalStorageValue("username");
    usernameElement.value=usernameResult.username;
}

async function getLocalStorageValue(key) {
    return new Promise((resolve, reject) => {
        try {
            chrome.storage.sync.get(key, function (value) {
                resolve(value);
            })
        }
        catch (ex) {
            reject(ex);
        }
    });
}