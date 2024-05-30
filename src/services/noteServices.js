const noteServices = {
    getNotes: async () => {
        const response = await fetch('/notes.json');
        const notes = await response.json();
        return notes;
    }
}

export default noteServices;