import { Link, useNavigate } from 'react-router-dom';
import img from '../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const SignUp = () => {

   const {createUser} = useContext(AuthContext)
   const navigate = useNavigate();
   

   const handleSignUp = async e => {
      
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name, email, password);

      try{
         await createUser(email,password)
         console.log("User signed up successfully");
         alert("Success create a user");
         navigate('/')

      }
      catch(error){
         console.log(error)
      }
      
      



      


   };

   return (
      <div className="hero min-h-screen bg-base-200">
         <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="w-1/2 mr-12">
               <img src={img} alt="" />
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               <form className="card-body" onSubmit={handleSignUp}>
                  <h1 className="text-3xl text-center font-bold">SignUp now!</h1>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Name</span>
                     </label>
                     <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                  </div>
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
                     <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                     <label className="label">
                        <span className="label-text-alt link link-hover">Forgot password?</span>
                     </label>
                  </div>
                  <div className="form-control mt-6">
                     <input className="btn btn-primary" type="submit" value="SignUp" />
                  </div>
               </form>
               <div className='my-4 text-center mt-12'> 
                  <p>Already Have an Account? <Link className='text text-orange-600 font-bold' to="/login">Sign In</Link></p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignUp;
