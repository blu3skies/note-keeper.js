

describe("NoteList", () =>  {
  it("note list has an array", () => {
    var noteList = new NoteList();
    noteList.inputNote(new Note("Hi"))
    expect(noteList.allNotes[0].printText()).toBe("Hi")
  })
})