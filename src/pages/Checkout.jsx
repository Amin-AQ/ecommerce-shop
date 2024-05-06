import {React, useState, useEffect} from 'react'
import axios from "axios";
import { nanoid } from "nanoid";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { CartItemsListViewOnly,CartTotals, SectionTitle } from '../components';

const Checkout = ()=>{
    const [id, setId] = useState(localStorage.getItem("id"));
    const navigate = useNavigate();
    const loginState = useSelector((state) => state.auth.isLoggedIn);
    const { cartItems } = useSelector((state) => state.cart);
    const [userFormData, setUserFormData] = useState({
        id: "",
        name: "",
        lastname: "",
        email: "",
        phone: "",
        adress: "",
      });

    const getUserData = async () => {
        try {
          const response = await axios(`http://localhost:8080/user/${id}`);
          const data = response.data;
          setUserFormData({
            name: data.name,
            lastname: data.lastname,
            email: data.email,
            phone: data.phone,
            adress: data.adress
          });
        } catch (error) {
          toast.error("Error: ", error.response);
          console.log(error);
        }
      };

    useEffect(() => {
        if (loginState) {
          getUserData();
        } else {
          toast.error("You must be logged in to access this page");
          navigate("/");
        }
      }, []);
    
      const isValidate = () => {
        let isProceed = true;
        let errorMessage = "";
        let info = userFormData;
        let name = info.name;
        let lastname=info.lastname;
        let email = info.email;
        let phone = info.phone;
        let adress = info.adress;
        console.log(info);
        if (name.length === 0) {
          isProceed = false;
          errorMessage = "Please enter the value in username field";
        } else if (lastname.length === 0) {
          isProceed = false;
          errorMessage = "Please enter the value in lastname field";
        } else if (email.length === 0) {
          isProceed = false;
          errorMessage = "Please enter the value in email field";
        } else if (phone.length < 4) {
          isProceed = false;
          errorMessage = "Phone must be longer than 3 characters";
        } else if (adress.length < 4) {
          isProceed = false;
          errorMessage = "Adress must be longer than 3 characters";
        }
    
        if (!isProceed) {
          toast.warn(errorMessage);
        }
    
        return isProceed;
    };
  

    const areFieldsFilled = (event) => {
        event.preventDefault();
        if(cartItems.length === 0){
          toast.error("Your cart is empty");
        }else if(isValidate()){
          navigate("/thank-you");
        }
    }
    

    return(
        <>
            <SectionTitle title="Checkout" path="Home | Cart | Checkout" />
           
        {loginState?(
            
            <form className="max-w-7xl mx-auto text-center px-10" onSubmit={areFieldsFilled}>
                <br/>
                <h1 className='section-title-path text-2xl text-center max-sm:text-xl text-accent-content'>
                    Please confirm delivery information
                </h1>
                <br/>
                <div className="grid grid-cols-3 max-lg:grid-cols-1">
                    <div className="form-control w-full lg:max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input
                        type="text"
                        required={true}
                        placeholder="Type here"
                        className="input input-bordered w-full lg:max-w-xs"
                        value={userFormData.name}
                        onChange={(e) => {setUserFormData({...userFormData, name: e.target.value})}}
                        />
                    </div>

                    <div className="form-control w-full lg:max-w-xs">
                        <label className="label">
                        <span className="label-text">Your Lastname</span>
                        </label>
                        <input
                        type="text"
                        required={true}
                        placeholder="Type here"
                        className="input input-bordered w-full lg:max-w-xs"
                        value={userFormData.lastname}
                        onChange={(e) => {setUserFormData({...userFormData, lastname: e.target.value})}}
                        />
                    </div>

                    <div className="form-control w-full lg:max-w-xs">
                        <label className="label">
                        <span className="label-text">Your Email</span>
                        </label>
                        <input
                        type="email"
                        required={true}
                        placeholder="Type here"
                        className="input input-bordered w-full lg:max-w-xs"
                        value={userFormData.email}
                        onChange={(e) => {setUserFormData({...userFormData, email: e.target.value})}}
                        />
                    </div>

                    <div className="form-control w-full lg:max-w-xs">
                        <label className="label">
                        <span className="label-text">Your Phone</span>
                        </label>
                        <input
                        type="tel"
                        required={true}
                        placeholder="Type here"
                        className="input input-bordered w-full lg:max-w-xs"
                        value={userFormData.phone}
                        onChange={(e) => {setUserFormData({...userFormData, phone: e.target.value})}}
                        />
                    </div>

                    <div className="form-control w-full lg:max-w-xs">
                        <label className="label">
                        <span className="label-text">Your Adress</span>
                        </label>
                        <input
                        type="text"
                        required={true}
                        placeholder="Type here"
                        className="input input-bordered w-full lg:max-w-xs"
                        value={userFormData.adress}
                        onChange={(e) => {setUserFormData({...userFormData, adress: e.target.value})}}
                        />
                    </div>
                </div>
                <button
                className="btn btn-lg bg-blue-600 hover:bg-blue-500 text-white mt-10"
                type="submit"
                >
                Place Order
                </button>
            </form>
            ):(
                <Link to='/login' className='btn bg-blue-600 hover:bg-blue-500 btn-block text-white mt-8'>
                    please login
                </Link>
            )}

            <div className='mt-8 grid gap-8 lg:grid-cols-12 max-w-7xl mx-auto px-10'>
                <div className='lg:col-span-8'>
                    <CartItemsListViewOnly />
                </div>
                <div className='lg:col-span-4 lg:pl-4'>
                    <CartTotals />
                </div>
            </div>

        </>
    
    );

}


export default Checkout;

