describe("NoteListView", () =>  {
  it("view the html string of the list", () => {
    var noteList = new NoteList();
    noteList.inputNote("Hi")
    noteList.inputNote("this is a really long note that and shouldnt be displayed ")
    var noteListView = new NoteListView(noteList)
    expect(noteListView.noteList.allNotes[0].printText()).toBe("Hi")
    expect(noteListView.printHTMLString()).toBe("<ul><li><div>Hi</div></li><li><div>this is a really lon</div></li></ul>")

  })

  it("Printing an empty array", () => {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList)
    expect(noteListView.printHTMLString()).toBe("<ul></ul>")
  })

  // it("page contains a link", () => {
  //   var noteList = new NoteList();
  //   noteList.inputNote("Hi")
  //   var noteListView = new NoteListView(noteList)
  //   expect(noteListView.)
  // })
})