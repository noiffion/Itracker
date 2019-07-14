// OffCanvasBody.jsx

import React          from 'react';
import PropTypes      from 'prop-types';
import Header         from './Header.jsx';
import Paginator      from './Paginator.jsx';
import TableOfIssues  from './TableOfIssues.jsx';
import AlertMsg       from './AlertMsg.jsx';


const OffCanvasBody = props => {
  const width = props.width;
  const transitionDuration = props.transitionDuration;
  const isMenuOpened = props.isMenuOpened;
  const position = props.position;
  const effect = props.effect;

  const translateX = position === "left" ? 0 : 0;
  const closedStyle = {
    transitionDuration: transitionDuration + "ms",
    transform: "translate(" + translateX + "px, 0px)",
    backfaceVisibility: "hidden"
  };

  // open state style
  let translateOpenX = position === "left" ? width : -1 * width;
  translateOpenX = effect === "parallax" ? translateOpenX / 2 : translateOpenX;
  translateOpenX = effect === "overlay" ? 0 : translateOpenX;

  let openStyle = {
    transform: "translate(" + translateOpenX + "px, 0px)"
  };

  // create current state styles
  let currStyle = Object.assign({}, closedStyle);
  if (isMenuOpened) {
    currStyle = Object.assign({}, currStyle, openStyle);
  }

  return (
    <div style={{ ...currStyle }}>
      <Header
        refreshPage={props.refreshPage}
        canvasToggle={props.canvasToggle}
        iFilter={props.iFilter}
        maxPageNum={props.maxPageNum}
        pageGo={props.pageGo}
        setAlert={props.setAlert}
      />
      <Paginator
        actualPage={props.actualPage}
        maxPageNum={props.maxPageNum}
        pageGo={props.pageGo}
      />
      <AlertMsg
        setAlert={props.setAlert}
        alertMsg={props.alertMsg}
        alertShow={props.alertShow}
        normalMsg={props.normalMsg}
      />
      <TableOfIssues
        issues={props.issues}
        actualPage={props.actualPage}
        iPerPage={props.iPerPage}
        refreshPage={props.refreshPage}
        submitChanges={props.submitChanges}
        selectSingleRow={props.selectSingleRow}
        cancelSingleRow={props.cancelSingleRow}
        deleteSingleRow={props.deleteSingleRow}
        selectAll={props.selectAll}
        selectDelAll={props.selectDelAll}
        unSelectDelAll={props.unSelectDelAll}
        cancelAll={props.cancelAll}
      />
      <Paginator 
        actualPage={props.actualPage} 
        maxPageNum={props.maxPageNum}
        pageGo={props.pageGo}
      />
      <footer>
        <span> Source: </span>
        <a href="https://github.com/noiffion/Itracker.git" target="_blank">
           <i className="fab fa-github" style={{fontSize: '24px'}}></i>
        </a>
      </footer>
    </div>
  );
}


OffCanvasBody.propTypes = {
  width: PropTypes.number,
  transitionDuration: PropTypes.number,
  isMenuOpened: PropTypes.bool,
  position: PropTypes.oneOf(["left", "right"]),
  effect: PropTypes.oneOf(["push", "parallax", "overlay"]),
  refreshPage: PropTypes.func.isRequired,
  canvasToggle: PropTypes.func.isRequired,
  iFilter: PropTypes.func.isRequired,
  pageGo: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  actualPage: PropTypes.number.isRequired,
  maxPageNum: PropTypes.number.isRequired,
  alertMsg: PropTypes.string,
  alertShow: PropTypes.bool.isRequired,
  normalMsg: PropTypes.bool.isRequired,
  issues: PropTypes.array.isRequired,
  iPerPage: PropTypes.number.isRequired,
  submitChanges: PropTypes.func.isRequired,
  selectSingleRow: PropTypes.func.isRequired,
  cancelSingleRow: PropTypes.func.isRequired,
  deleteSingleRow: PropTypes.func.isRequired,
  selectAll: PropTypes.func.isRequired,
  selectDelAll: PropTypes.func.isRequired,
  unSelectDelAll: PropTypes.func.isRequired,
  cancelAll: PropTypes.func.isRequired,
};


export default OffCanvasBody;
