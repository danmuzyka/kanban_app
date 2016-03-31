import React from 'react';
import Lane from './Lane.jsx';

export default ({lanes}) => {
  return (
    <div className="lanes">{lanes.map((lane) =>
      <Lane className="lane" key={lane.id} lane={lane} />
    )}</div>
  )
}

//export default class Lanes extends React.Component {
//  render() {
//    const lanes = this.props.items;
//
//    return (
//      <div className="lanes">
//      {lanes.map(this.renderLane)}
//      </div>
//    );
//  }
//  renderLane(lane) {
//    return <Lane className="lane" key={lane.id} lane={lane} />;
//  }
//}
