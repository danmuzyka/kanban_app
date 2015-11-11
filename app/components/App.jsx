import AltContainer from 'alt/AltContainer';
import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';
//import connect from '../decorators/connect';

//@connect(NoteStore)
export default class App extends React.Component {
  /*
  these lines can be removed now
  constructor(props) {
    super(props);

    this.storeChanged = this.storeChanged.bind(this);
    this.state = NoteStore.getState();

    //this.findNote = this.findNote.bind(this);
    //this.addNote = this.addNote.bind(this);
    //this.editNote = this.editNote.bind(this);
    //this.deleteNote = this.deleteNote.bind(this);
  }
  componentDidMount() {
    NoteStore.listen(this.storeChanged);
  }
  componentWillUnmount() {
    NoteStore.unlisten(this.storeChanged);
  }
  storeChanged(state) {
    this.setState(state);
  }
  */

  render() {
    //const notes = this.props.notes;

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

    //this.setState({
    //  notes: this.state.notes.concat([{
    //    id: uuid.v4(),
    //    task: 'New task'
    //  }])
    //});
  }

  editNote(id, task) {
    NoteActions.update({id, task});
    //let notes = this.state.notes;
    //const noteIndex = this.findNote(id);
    //
    //if(noteIndex < 0) {
    //  return;
    //}
    //
    //notes[noteIndex].task = task;
    //this.setState({notes});
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
    //const notes = this.state.notes;
    //const noteIndex = this.findNote(id);
    //
    //if(noteIndex < 0) {
    //  return;
    //}
    //
    //this.setState({
    //  notes: notes.slice(0, noteIndex).concat(notes.slice(noteIndex + 1))
    //});
  }
}
