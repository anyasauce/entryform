document.addEventListener('DOMContentLoaded', function () {
    var existingEntries = localStorage.getItem('giveawayEntries');
    var entries = existingEntries ? JSON.parse(existingEntries) : [];

    function updateLocalStorage() {
        localStorage.setItem('giveawayEntries', JSON.stringify(entries));
    }

    function renderSuccessMessage() {
        document.getElementById('successMessage').style.display = 'block';
        setTimeout(function () {
            document.getElementById('successMessage').style.display = 'none';
        }, 2000);
    }

    window.submitEntry = function() {
        var name = document.getElementById('name').value.trim();

        if (name === "") {
            alert("Please enter a valid name.");
            return;
        }

        var entry = {
            name: name,
        };

        entries.push(entry);
        updateLocalStorage();
        renderSuccessMessage();

        document.getElementById('name').value = "";
    };
});

document.addEventListener('DOMContentLoaded', function () {
    var existingEntries = localStorage.getItem('giveawayEntries');
    var entries = existingEntries ? JSON.parse(existingEntries) : [];
    var entryList = document.getElementById('entryList');

    renderEntryList();

    window.removeEntry = function(index) {
        entries.splice(index, 1);
        updateEntryList();
    };

    window.removeAllEntries = function() {
        entries = [];
        updateEntryList();
    };


    function updateEntryList() {
        localStorage.setItem('giveawayEntries', JSON.stringify(entries));
        renderEntryList();
    }

    function renderEntryList() {
        entryList.innerHTML = '';
        entries.forEach(function (entry, index) {
            var listItem = document.createElement('li');
            listItem.appendChild(document.createTextNode(`${index + 1}. ${entry.name}`));

            var removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.onclick = function() {
                removeEntry(index);
            };

            listItem.appendChild(removeButton);
            entryList.appendChild(listItem);
        });
    }
});

function copyAllEntries() {
    var entryList = document.getElementById("entryList");
    var entries = entryList.getElementsByTagName("li");
    
    var participantNames = [];

    for (var i = 0; i < entries.length; i++) {
        var name = entries[i].textContent.replace(/^\d+\.\s*(.*?)Remove$/, '$1');
        participantNames.push((i + 1) + ". " + name);
    }

    var copyText = participantNames.join("\n");

    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = copyText;
    document.body.appendChild(tempTextarea);

    tempTextarea.select();
    document.execCommand("copy");

    document.body.removeChild(tempTextarea);

    alert("Participants' names copied to clipboard:\n" + copyText);
}

document.addEventListener('DOMContentLoaded', function () {
    var existingEntries = localStorage.getItem('giveawayEntries');
    var entries = existingEntries ? JSON.parse(existingEntries) : [];


    window.removeEntry = function(index) {
        var confirmRemove = confirm("Are you sure you want to remove this participants ?");

        if (confirmRemove) {
            entries.splice(index, 1);
            updateEntryList();
        }
    };

    window.removeAllEntries = function() {
        var confirmRemoveAll = confirm("Are you sure you want to remove all participants?");

        if (confirmRemoveAll) {
            entries = [];
            updateEntryList();
        }
    };


 document.getElementById('logoutBtn').addEventListener('click', function() {
    var confirmLogout = confirm("Are you sure you want to logout?");
    
    if (confirmLogout) {
        alert("Logged out successfully!");
        window.location.href = 'index.html';
    } else {
        window.location.href = 'entries.html';
    }
});


});

document.addEventListener('DOMContentLoaded', function () {
    var existingEntries = localStorage.getItem('giveawayEntries');
    var entries = existingEntries ? JSON.parse(existingEntries) : [];
    var entryList = document.getElementById('entryList');

    renderEntryList();

    window.removeEntry = function(index) {
        var confirmRemove = confirm("Are you sure you want to remove this participant?");
        
        if (confirmRemove) {
            entries.splice(index, 1);
            updateEntryList();
        }
    };

    window.removeAllEntries = function() {
        var confirmRemoveAll = confirm("Are you sure you want to remove all participants?");
        
        if (confirmRemoveAll) {
            entries = [];
            updateEntryList();
        }
    };

    function updateEntryList() {
        localStorage.setItem('giveawayEntries', JSON.stringify(entries));
        renderEntryList();
    }

    function renderEntryList() {
        entryList.innerHTML = '';
        entries.forEach(function (entry, index) {
            var listItem = document.createElement('li');
            listItem.appendChild(document.createTextNode(`${index + 1}. ${entry.name}`));

            var removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.onclick = function() {
                removeEntry(index);
            };

            listItem.appendChild(removeButton);
            entryList.appendChild(listItem);
        });
    }
    
});

document.addEventListener('DOMContentLoaded', function () {
    var existingEntries = localStorage.getItem('giveawayEntries');
    var entries = existingEntries ? JSON.parse(existingEntries) : [];

    function updateLocalStorage() {
        localStorage.setItem('giveawayEntries', JSON.stringify(entries));
    }

    function renderSuccessMessage() {
        document.getElementById('successMessage').style.display = 'block';
        setTimeout(function () {
            document.getElementById('successMessage').style.display = 'none';
        }, 2000);
    }

    window.submitEntry = function() {
        var name = document.getElementById('name').value.trim();

        if (name === "") {
            alert("Please enter a valid name.");
            return;
        }

        if (entries.some(entry => entry.name === name)) {
            alert("You have already submitted your name.");
            return;
        }

        var entry = {
            name: name,
        };

        entries.push(entry);
        updateLocalStorage();
        renderSuccessMessage();

        document.getElementById('name').value = "";
    };
});



