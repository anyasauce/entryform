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
