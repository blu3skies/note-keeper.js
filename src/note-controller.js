(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList
    this.noteList.inputNote("Favourite drink: not seltzer")
    this.noteListView = new NoteListView(this.noteList)
  }

  NoteController.prototype.printlist = function() {
    document.getElementById('app').innerHTML = this.noteListView.printHTMLString()
  }


  exports.NoteController = NoteController;
})(this);


var noteList = new NoteList()
var noteController = new NoteController(noteList)
noteController.printlist()


