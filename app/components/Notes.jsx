import React from 'react';
import Editable from './Editable.jsx';
import Note from './Note.jsx';
import LaneActions from '../actions/LaneActions';

export default ({notes, onValueClick, onEdit, onDelete}) => {
  return (
    <ul className="notes">{notes.map(note =>
      <Note className="note" id={note.id} key={note.id}
        editing={note.editing} onMove={LaneActions.move}>
        <Editable
          editing={note.editing}
          value={note.task}
          onValueClick={onValueClick.bind(null, note.id)}
          onEdit={onEdit.bind(null, note.id)}
          onDelete={onDelete.bind(null, note.id)} />
        </Note>
    )}</ul>
  );
}

//export default class Notes extends React.Component {
//  constructor(props) {
//    super(props);
//
//    this.renderNote = this.renderNote.bind(this);
//  }
//
//  render() {
//    const notes = this.props.items;
//
//    return (
//      <div>
//        <ul className="notes">{notes.map(this.renderNote)}</ul>
//      </div>
//    );
//  }
//
//  renderNote(note) {
//    return (
//      <li className='note' key={`note${note.id}`}>
//        <Note
//          task={note.task}
//          onEdit={this.props.onEdit.bind(null, note.id)}
//          onDelete={this.props.onDelete.bind(null, note.id)} />
//      </li>
//    );
//  }
//}
