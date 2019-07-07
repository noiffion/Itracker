import React      from 'react';
import PropTypes  from 'prop-types';
import Form       from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';

const Paginator = props => {
  const pageGo = props.pageGo;
  const actPg = props.actualPage;
  const max = props.maxPageNum;
  const pagItems = [];
  let pagiDisplay;

  const arrFill = (till, current) => {
    if (current === till) return;
    if (current === actPg) {
        pagItems.push(
          <Pagination.Item key={current+1} active>
            {current+1}
          </Pagination.Item>
        );
    } else {
        pagItems.push(
          <Pagination.Item key={current+1} onClick={() => pageGo(current)}>
            {current+1}
          </Pagination.Item>
        );
    }
    return arrFill(till, current+1);
  }

  if (max <= 10) {
      arrFill(max, 0);
      pagiDisplay = pagItems;
  } else {
      pagiDisplay = (
        <Pagination.Item active>
         {actPg+1}
        </Pagination.Item>
      );
  }


  return (
    <Pagination className="paginators">
      <Pagination.Item onClick={() => pageGo(0)}> 1 </Pagination.Item>
      &nbsp;&nbsp;
      <Pagination.Prev
        onClick={() => (actPg > 0) ? pageGo(actPg-1) : pageGo(0)}
      />

      {pagiDisplay}

      <Pagination.Next
        onClick={() => (actPg < max-1) ? pageGo(actPg+1) : pageGo(max-1)}
      />
      &nbsp;&nbsp;
      <Pagination.Item onClick={() => pageGo(max-1)}> {max} </Pagination.Item>
    </Pagination>
  )
}

Paginator.propTypes = {
  pageGo: PropTypes.func.isRequired,
  actualPage: PropTypes.number.isRequired,
  maxPageNum: PropTypes.number.isRequired,
};


export default Paginator;
