(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList
    
    this.noteListView = new NoteListView(this.noteList)
  }

  NoteController.prototype.printList = function() {
    document.getElementById('app').innerHTML = this.noteListView.printHTMLString()
  }



  exports.NoteController = NoteController;
})(this);


var noteList = new NoteList()
var noteController = new NoteController(noteList)
noteController.printList()



