import AltContainer from 'alt/AltContainer';
import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

export default class App extends React.Component {

  render() {

    return (
      <div>
        <button className='add-note' onClick={this.addNote}>+</button>
        <AltContainer
          stores={[NoteStore]}
          inject={ {
            notes: () => NoteStore.getState().notes
          } }>
          <Notes onEdit={this.editNote} onDelete={this.deleteNote} />
        </AltContainer>
      </div>
    );
  }

  addNote() {
    NoteActions.create({task: 'New Task'});
  }

  editNote(id, task) {
    NoteActions.update({id, task});
  }

  findNote(id) {
    const notes = this.state.notes;
    const noteIndex = notes.findIndex((note) => note.id === id);

    if(noteIndex < 0) {
      console.warn('Failed to find note', notes, id);
    }

    return noteIndex;
  }

  deleteNote(id) {
    NoteActions.delete(id);
  }
}
