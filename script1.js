function saveNote() {
    var noteInput = document.getElementById('note-input').value;
    if (noteInput.trim() !== '') {
      var notesContainer = document.getElementById('notes-container');
      var noteElement = document.createElement('div');
      noteElement.classList.add('note');
      noteElement.textContent = noteInput;
      notesContainer.appendChild(noteElement);
      document.getElementById('note-input').value = '';
    } else {
      alert('Please enter a note before saving.');
    }
  }