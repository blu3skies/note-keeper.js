describe("Note Controller", () => {
  it("note can be instantiated", () => {
    noteController.noteList.inputNote('Favourite drink: not seltzer')
    noteController.printList()
    expect(document.getElementById('app').innerHTML).toBe("<ul><li><div>Favourite drink: not</div></li></ul>")
  })


})