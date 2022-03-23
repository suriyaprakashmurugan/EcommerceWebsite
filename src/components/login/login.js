import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Col} from 'antd';
import './login.css';
// import pix from '../images/pix.jpg'

export default function Login() {
    const navigate = useNavigate();

    const users = [
        {name:'suriya' ,number:'1234567890', password:'09876'},
        {name:'prakash' ,number:'2345678901', password:'54321'},
        {name:'karna' ,number:'3456789012', password:'12345'},
        {name:'vignesh' ,number:'4567890123', password:'67890'},
        {name:'Waran' ,number:'5678901234', password:'11111'}
    ]
    
    const [name,setName] = useState('');
    const [num,setNum] = useState('');
    const [userName,setUserName] = useState('');

    const nameChange = (e) =>
    {
        setName(e.target.value);
    };
    const numberChange = (e) =>
    {
        setNum(e.target.value);
    }
    
    var i = 0;
        
    const handleSubmit = () =>
{
users.map(user)

function user (x){
    
     if((x.name === name || x.number === name) && x.password === num){
         setUserName(x.name);
        i++;
        console.log(x.name);
    }
}

if(i===1)
{
    alert('login sucessfully ' + userName)
    navigate('/task');
}
else{
    alert('User name or Passwart incorrect')
}
}


  return (
    <div className ='logIn'>
        <Col>
        <div className='card'>
            <form onSubmit={handleSubmit} autoComplete='false'>
                <label >Name<br/>
                    <input className='inputDesign' type='text' onChange={nameChange} placeholder='Enter your name or Number' required/><br/>
                    {/* <p>{err}</p> */}
                </label><br/>
                <label >Password<br/>
                    <input className='inputDesign' type='Password' onChange={numberChange} placeholder='Enter your name or Number' required/><br/>
                    {/* <p>{pwd}</p> */}
                </label><br/> 
                <button type='submit' className='but-Style'>login</button>
            </form>
        </div>
        </Col>
    </div>
  )
}
