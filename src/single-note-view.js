(function(exports) {

  function SingleNoteView(note) {
    this.note = note
  }

  SingleNoteView.prototype.displaySingleNote = function() {
    return `<div>${this.note.printText()}</div>`
  }
  exports.SingleNoteView = SingleNoteView
})(this)