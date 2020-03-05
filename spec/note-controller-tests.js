describe("Note Controller", () => {
  it("note can be instantiated", () => {
    
    var noteList = new NoteList();
    noteList.inputNote("this is a test")
    var controller = new NoteController(noteList)
    expect(controller.noteList.allNotes[0].printText()).toBe("this is a test")

  })
})