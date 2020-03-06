
(function(exports) {

  function NoteList() {
    this.allNotes = []
    this.noteIndex = 0
  }

  NoteList.prototype.inputNote = function(note) {
    this.allNotes.push(new Note(note, this.noteIndex))
    this.noteIndex++

  };

  NoteList.prototype.displayList = function() {
    return this.allNotes

  };

  exports.NoteList = NoteList;
})(this);