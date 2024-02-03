import React,{useState} from "react";
import { Link } from "react-router-dom";

const Signin = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log("Form submitted:", formData);
      };
    
  return (
    <>
      <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <div className="modal-action flex flex-col justify-center mt-0">
            <form className="card-body" method="dialog" onSubmit={handleSubmit}>
              <h3 className="font-bold text-lg">Please Login!</h3>

              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  className="input input-bordered"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter E-mail"
                  autoComplete=""
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  className="input input-bordered"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  autoComplete=""
                  required
                  value={formData.password}
                  onChange={handleChange}
                />

                {/* show password */}
                <div className="flex space-x-1">
                  <input type="checkbox" />
                  <p>Show Password</p>
                </div>

                <div className="label mt-1">
                  <p className="label-text-alt link link-hover">
                    Forgot password?
                  </p>
                </div>
              </div>

              {/* login btn */}
              <div className="form-control mt-4">
                <button
                  onClick={() => document.getElementById("my_modal_5").close()}
                  type="submit"
                  className="btn bg-blue-600 hover:bg-blue-700 text-white hover:text-black"
                >
                  Login
                </button>
              </div>

              <span className="text-center my-2 flex">
                Don’t have an account yet?
                 <Link to='/register'>
                <button
                  onClick={() => document.getElementById("my_modal_5").close()}
                  className="font-bold text-blue-600 underline"
                >
                  Signin
                </button>
                </Link>
              </span>

              <button
                htmlFor="my_modal_5"
                onClick={() => document.getElementById("my_modal_5").close()}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Signin;
