// list.js

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

        // Optional: Clear the form
        document.getElementById('name').value = "";
    };
});

// entries-script.js

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
