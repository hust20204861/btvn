import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { login, clearErrors} from '../../actions/userAction'
import Loader from '../layout/Loader'
import { useAlert } from 'react-alert'

const Login = ({ history }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const alert = useAlert();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    useEffect(() => {

        if(isAuthenticated) {
            history.push('/')
        }

        if(error) {
            alert.error(error);
            dispatch(clearErrors());
        }

    }, [dispatch, isAuthenticated, error, history])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

  return (
   <Fragment>
      {loading ? <Loader /> : (
        <Fragment>
            <MetaData title={'Login'}/>
            <div class="container">
    <h2>Đăng nhập</h2>
    <form onSubmit={submitHandler}>
      <label htmlFor="username">Tên đăng nhập:</label>
      <input type="text" id="username" name="username" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label htmlFor="password">Mật khẩu:</label>
      <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <Link to = '/password/forgot' className='forgot'>Forgot Password?</Link>
      <button type="submit" id = "login">Đăng nhập</button>
      <Link to = '/register' className='register'>Create Account</Link>
    </form>
  </div>
        </Fragment>

      )}
   </Fragment>

  )
}

export default Login
