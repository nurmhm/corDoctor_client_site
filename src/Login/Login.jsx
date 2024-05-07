import { Link, } from 'react-router-dom';
import img from '../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const Login = () => {
   const {login} = useContext(AuthContext)
 
   const handleLogin =async (e) => {
      e.preventDefault();
      const form = e.target;
    
      const email = form.email.value;
      const password = form.password.value;
      console.log(email,password);

      try{
         await login(email,password)
         form.reset()
      }catch{
         console.log('error')
      }

      


   }

   return (
      <div className="hero min-h-screen bg-base-200">
         <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2 mr-12">
               <img src={img} alt="" />
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               <form className="card-body" onSubmit={handleLogin}>
                  <h1 className="text-3xl text-center font-bold">Login now!</h1>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Password</span>
                     </label>
                     <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                     <label className="label">
                        <span className="label-text-alt link link-hover"><Link to="#">Forgot password?</Link></span>
                     </label>
                  </div>
                  <div className="form-control mt-6">
                    
                     <input className="btn btn-primary" type="submit" value="Login" />
                    
                     
                  </div>
               </form>

               <div className='my-4 text-center mt-12'>  
                  <p>New to car doctors <Link className='text text-orange-600 font-bold' to="/signup">Sign Up</Link></p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
