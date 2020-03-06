

describe("SingleNote", () =>  {
  it("display single note in div tags", () => {
  var noteList = new NoteList()
  noteList.inputNote("Favourite drink: seltzer")
   note = noteList.allNotes[0]
   var singleNoteView = new SingleNoteView(note)
   expect(singleNoteView.displaySingleNote()).toBe("<div>Favourite drink: seltzer</div>") 

  })
})