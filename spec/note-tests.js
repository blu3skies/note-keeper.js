

  describe("Note", () =>  {
    it("note has text", () => {
      var note = new Note("hi")
      expect(note.printText()).toBe("hi")
    })
  })
