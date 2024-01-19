let rowIdCounter = 1; 

    function addRow() {
      let nameInput = document.getElementById('nameInput').value;
      if (nameInput.trim() !== '') {
        let tableBody = document.getElementById('myTable').getElementsByTagName('tbody')[0];
        
        let newRow = document.createElement('tr');

        // Use the incremental counter for the row ID
        let rowId = rowIdCounter++;

        let idCell = document.createElement('td');
        idCell.innerHTML = rowId;

        let nameCell = document.createElement('td');
        nameCell.innerHTML = nameInput;

        let actionCell = document.createElement('td');

        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.onclick = function() {
          deleteRow(newRow);
        };

        let editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        editButton.onclick = function() {
          editRow(newRow);
        };

        actionCell.appendChild(deleteButton);
        actionCell.appendChild(editButton);

        newRow.appendChild(idCell);
        newRow.appendChild(nameCell);
        newRow.appendChild(actionCell);
        tableBody.appendChild(newRow);

        document.getElementById('nameInput').value = '';
      } else {
        alert('Please enter a name.');
      }
    }

    function deleteRow(row) {
      row.remove();
    }

    function editRow(row) {
      let nameCell = row.getElementsByTagName('td')[1];
      let newName = prompt('Enter new name:', nameCell.innerHTML);
      if (newName !== null) {
        nameCell.innerHTML = newName;
      }
    }