// Login.jsx

import React                 from 'react';
import PropTypes             from 'prop-types';


const Login = props => {

  const toParams = (query) => {
    const q = query.replace(/^\??\//, '');

    return q.split('&').reduce((values, param) => {
      const [key, value] = param.split('=');
      values[key] = value;
      return values;
    }, {});
  }

  const toQuery = (params, delimiter='&') => {
    const keys = Object.keys(params);

    return keys.reduce((str, key, index) => {
      let query = `${str}${key}=${params[key]}`;
      if (index < (keys.length - 1)) query += delimiter;
      return query;
    }, '');
  }

  const onRequest = () => props.onRequest();

  const onSuccess = (data) => {
    if (!data.code) return onFailure(new Error('\'code\' not found'));
    props.onSuccess(data);
  }

  const onFailure = (error) => props.onFailure(error);

  const onBtnClick = () => {
    const { clientId, scope, redirectUri } = props;
    const search = toQuery({
      client_id: clientId,
      scope,
      redirect_uri: redirectUri,
    });

    const popup = LoginPop.begin(
      'github-oauth-authorize',
      `https://github.com/login/oauth/authorize?${search}`,
      { height: 1000, width: 600 }
    );
    onRequest();
    popup.then(
      data => onSuccess(data),
      error => onFailure(error)
    );
  }
  const { className, buttonText, children } = props;
  const attrs = { onClick: onBtnClick };

  if (className) attrs.className = className;

  return ( <button {...attrs}>{ children || buttonText }</button> );
}


Login.propTypes = {
  buttonText: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  clientId: PropTypes.string.isRequired,
  onRequest: PropTypes.func,
  onSuccess: PropTypes.func,
  onFailure: PropTypes.func,
  redirectUri: PropTypes.string.isRequired,
  scope: PropTypes.string,
}

Login.defaultProps = {
  buttonText: 'Sign in with GitHub',
  scope: 'user:email',
  onRequest: () => {},
  onSuccess: () => {},
  onFailure: () => {},
}; 


export default Login;
