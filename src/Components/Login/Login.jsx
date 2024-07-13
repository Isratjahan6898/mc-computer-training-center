import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {

    const{signIn,  signInWithGoogle }=useContext(AuthContext);
    const navigate= useNavigate();
    console.log(signIn);
    const handleLogin = async(e)=>{
        e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email, password);


            signIn(email, password)
        .then(result=>{
            console.log(result.user);
            Swal.fire({
                title: "User Login successfully",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });

              navigate('/');
        })

    }

    const handleSocialLogin = (e)=>{
        e.preventDefault();
        signInWithGoogle()
        navigate('/')
        
    }
    return (
        <div>
          <div className="my-[60px]">

          
          


<div className='flex justify-center items-center min-h-[calc(100vh-306px)]'>
<div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
<div
className='hidden bg-cover bg-center lg:block lg:w-1/2 my-[30px] mx-[20px] '
style={{
backgroundImage: `url('https://i.ibb.co/Y82yDtr/pexels-mati-2528695.jpg')`,
}}
>


</div>


<div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
<div className='flex justify-center mx-auto'>
<img
  className='w-auto h-7 sm:h-8'
  src=''
  alt=''
/>
</div>

<p className='mt-3 text-4xl'>
 Sign In

</p>




<form onSubmit={handleLogin}>
<div className='mt-4'>
  <label
    className='block mb-2 text-sm font-medium text-gray-600 '
    htmlFor='LoggingEmailAddress'
  >
    
  </label>
  <input
 
    id='LoggingEmailAddress'
    autoComplete='email'
    
    placeholder=" enter your email"
    name='email'
  
    type='email'
  />
</div>

<hr className="border border-[1px] border-black my-[16px]" />

<div className='mt-4'>
  <div className='flex justify-between'>
    <label
      className='block mb-2 text-sm font-medium text-gray-600 '
      htmlFor='loggingPassword'
    >
     
    </label>
  </div>

  <input
    id='loggingPassword'
    autoComplete='current-password'
    name='password'
    placeholder="Enter your password"
   
    type='password'
  />
</div>

<hr className="border border-[1px] border-black my-[16px]" />


<div className="form-control">
  <label className="cursor-pointer flex">
    
    <input type="checkbox"  required className="checkbox checkbox-accent" />
    <span className=" mb-[4px] ml-[10px]">Remember me</span>
  </label>

</div>

<div className='mt-6'>
  <button
    type='submit'
    className="btn px-[30px] bg-[#20d7ab] text-white font-bold"
  >
   Login
  </button>
</div>
</form>

  

  
    
   
    <div className="flex gap-[16px] my-[20px]">

<h1 className="font-bold">or Login with</h1>
<button onClick={handleSocialLogin}><FcGoogle className="text-2xl" /></button>

  </div>

  <div>
    <Link to='/register'> <h1 className= "underline underline-offset-2">Create Your Account</h1></Link>
  </div>
</div>
</div>
</div>

</div>
        </div>
    );
};

export default Login;