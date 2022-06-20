import FormInput from './Components/FormInput';
import './App.css';
import {useRef, useState} from 'react'

function App() {
  //const [username, setUsername] = useState('');
  //can use useRef hook to stop re-rendering... const usernameRef=useRef()
  //console.log(usernameRef)
  //pass as refer={usernameRef} instead of setUsername
  //change in forminput
  //use e.preventDefault() to keep from losing data

  //const usernameRef = useRef() ... in FormInput refer={usernameRef}

  const [values, setValues] = useState({
    username : '',
    email : '',
    birthday : '',
    password: '',
    confirmPassword: ''
  });

  //use unique id in order to map array
  //use pattern and required to set requirements, google regex codes to set pattern
  const inputs =[
    {
    id:1,
    name: 'username',
    type: 'text',
    placeholder: 'Username',
    errorMessage: 'Username should be 5-15 characters',
    label: 'Username',
    pattern: '^[A-Za-z0-9]{5,15}$',
    required: true,
    },
    {
    id:2,
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    errorMessage: 'Email should be valid',
    label: 'Email',
    required: true,
    },
    {
    id:3,
    name: 'birthday',
    type: 'date',
    placeholder: 'Birthday',
    label: 'Birthday'
    },
    {
    id:4,
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    errorMessage: 'Password should be greater than 10 characters less than 20',
    label: 'Password',
    pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{10,20}$',
    required: true,
    },
    {
    id:5,
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm Password',
    errorMessage: 'Password does not match!',
    label: 'Confirm Password',
    pattern: values.password, 
    required: true,
    }
  ]


  
  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
  }

  //updates input value from user into target name
  const onChange = (e) => {
   setValues({...values, [e.target.name]: e.target.value}); 
  }

  console.log(values);

  return (
    <div className="App">
      
      <form onSubmit={handleSubmit}>
      <h1>Register</h1>
       {inputs.map((input) => (
        <FormInput key={input.id} {...input} values={values[input.name]} onChange={onChange} /> 
        ))} 
        <button>Submit</button>
      
      </form>
      
    </div>
  );
}

export default App;



//ex
// {/* <div className="App">
//       <form onSubmit={handleSubmit}>
//         <FormInput name='username' placeholder='Username'  />  
//         <FormInput name='email' placeholder='Email'/>
//         <FormInput name='fullname' placeholder='Full Name'/>
//         <FormInput name='address' placeholder='Address'/>
//         <button>Submit</button>
//       </form> */}