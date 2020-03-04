describe("NoteListView", () =>  {
  it("view the html string of the list", () => {
    var noteList = new NoteList();
    noteList.inputNote(new Note("Hi"))
    noteList.inputNote(new Note("test note"))
    var noteListView = new NoteListView(noteList)
    console.log(NoteListView)
    expect(noteListView.noteList.allNotes[0].printText()).toBe("Hi")
    expect(noteListView.printHTMLString()).toBe("<ul><li><div>Hi</div></li><li><div>test note</div></li></ul>")

  })

  it("Printing an empty array", () => {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList)
    console.log(NoteListView)
    expect(noteListView.printHTMLString()).toBe("<ul></ul>")

  })
})