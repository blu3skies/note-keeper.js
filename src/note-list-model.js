
(function(exports) {

  function NoteList() {
    this.allNotes = []
  }

  NoteList.prototype.inputNote = function(note) {
    this.allNotes.push(new Note(note))
  };

  exports.NoteList = NoteList;
})(this);