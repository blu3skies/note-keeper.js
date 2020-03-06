(function(exports) {

  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.printHTMLString = function() {
    var result = ""
    this.noteList.allNotes.forEach(element => {
      result += "<li><div>" + element.printText().substring(0,20) + "</div></li>"
    });
    result2 = "<ul>" + result + "</ul>" 
    return result2
  };


  exports.NoteListView = NoteListView;
})(this);