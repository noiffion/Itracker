import React      from 'react';
import PropTypes  from 'prop-types';
import Pagination from 'react-bootstrap/Pagination';

const Paginator = props => {
  const pagiGo = props.pagiGo;
  const actual = props.actualPage;
  const max = props.maxPageNum;

  const pagItems = []; 
  
  const arrFill = (till, actual) => {
    if (actual >= till) return;
    if (actual === props.actualPage) {
        pagItems.push(
          <Pagination.Item key={actual+1} active> 
            {actual+1} 
          </Pagination.Item>
        );
    } else {
        pagItems.push(
          <Pagination.Item key={actual+1} onClick={() => props.pagiGo(actual)}> 
            {actual+1} 
          </Pagination.Item>);
    }
    return arrFill(till, actual+1);
  }
  arrFill(props.maxPageNum, 0);
 
  return (
    <Pagination className="paginators">
      <Pagination.First onClick={() => pagiGo(0)} />
      <Pagination.Prev 
        onClick={() => {
          (actual > 0) ? pagiGo(actual-1): pagiGo(0)
         }
        }
      />
      {pagItems}
      {/*
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      */}
      <Pagination.Next 
        onClick={() => {
          (actual < max-1) ? pagiGo(actual+1): pagiGo(max-1)}
        }
      />
      <Pagination.Last onClick={() => pagiGo(max-1)} />
    </Pagination>
  )
}

Paginator.propTypes = {
  pagiGo: PropTypes.func.isRequired,
  actualPage: PropTypes.number.isRequired,
  maxPageNum: PropTypes.number.isRequired,
};


export default Paginator;
