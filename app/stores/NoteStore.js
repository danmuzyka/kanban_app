import uuid from 'node-uuid';
import assign from 'object-assign';
import alt from '../libs/alt';
import NoteActions from '../actions/NoteActions';

class NoteStore {
  constructor() {
    this.bindActions(NoteActions);

    this.notes = [];

    this.exportPublicMethods({
      getNotesByIds: this.getNotesByIds.bind(this)
    });
  }

  create(note) {
    const notes = this.notes;
    note.id = uuid.v4();

    this.setState({
      notes: notes.concat(note)
    });
    return note;

  }

  update(updatedNote) {
    const notes = this.notes.map(note => {
      if (note.id === updatedNote.id) {
        return Object.assign({}, note, updatedNote);
      }

      return note;
    });
    this.setState({notes});
  }

  delete(id) {
    this.setState({
      notes: this.notes.filter(note => note.id !== id)
    });
    //const notes = this.notes;
    //const noteIndex = this.findNote(id);
    //
    //if (noteIndex < 0) {
    //  return;
    //}
    //
    //this.setState({
    //  notes: notes.slice(0, noteIndex).concat(notes.slice(noteIndex + 1))
    //});

  }

  //findNote(id) {
  //  const notes = this.notes;
  //  const noteIndex = notes.findIndex((note) => note.id === id);
  //
  //  if (noteIndex < 0) {
  //    console.warn('Failed to find note', notes, id);
  //  }
  //
  //  return noteIndex;
  //}

  getNotesByIds(ids) {
    // 1. Make sure we are operating on an array and
    // map over the ids
    // [id, id, id, ...] -> [[Note], [], [Note], ...]
    return (ids || []).map(
      // 2. Extract matching notes
      // [Note, Note, Note] -> [Note, ...] (match) or [] (no match)
      (id) => this.notes.filter((note) => note.id === id)
    // 3. Filter out possible empty arrays and get notes
    // [[Note], [], [Note]] -> [[Note], [Note]] -> [Note, Note]
    ).filter((a) => a.length).map((a) => a[0]);
  }
}

export default alt.createStore(NoteStore, 'NoteStore');
