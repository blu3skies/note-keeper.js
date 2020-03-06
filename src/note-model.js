
(function(exports) {

  function Note(text, id) {
    this.text = text
    this.id = id
  }

  Note.prototype.printText = function() {
    return this.text
  };

  exports.Note = Note;
})(this);

