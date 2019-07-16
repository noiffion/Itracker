// OffCanvasMenu.jsx

import React     from 'react';
import PropTypes from 'prop-types';
import Filter    from './Filter.jsx';


const OffCanvasMenu = props => {
  const width = props.width;
  const transitionDuration = props.transitionDuration;
  const isMenuOpened = props.isMenuOpened;
  const position = props.position;
  const effect = props.effect;

  const left = position === "left" ? -1 * width + "px" : "auto";
  const right = position === "left" ? "auto" : -1 * width + "px";
  const translateX = position === "left" ? -1 * width : 0;
  const closedStyle = {
    width: width + "px",
    position: "fixed",
    top: "0px",
    left: left,
    right: right,
    transform: "translate(" + translateX + "px, 0px)",
    transitionDuration: transitionDuration + "ms",
    backfaceVisibility: "hidden"
  };

  // open state style
  const translateOpenX = position === "left" ? width : -1 * width;
  const openStyle = {
    transform: "translate(" + translateOpenX + "px, 0px)"
  };

  // create current state styles
  let currStyle = Object.assign({}, closedStyle);
  if (isMenuOpened) {
    currStyle = Object.assign({}, currStyle, openStyle);
  }

  return (
    <div style={{ ...currStyle }} >
      <Filter
        iFilter={props.iFilter}
        canvasToggle={props.canvasToggle}
        filterClear={props.filterClear}
      />
    </div>
  );
}


OffCanvasMenu.propTypes = {
  width: PropTypes.number,
  transitionDuration: PropTypes.number,
  isMenuOpened: PropTypes.bool,
  filterClear: PropTypes.bool,
  position: PropTypes.oneOf(["left", "right"]),
  effect: PropTypes.oneOf(["push", "parallax", "overlay"]),
};


export default OffCanvasMenu;
