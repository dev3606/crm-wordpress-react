import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import cogoToast from '@successtar/cogo-toast';
import axios from "axios";
import api_url from "constant";

export default function SaleInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    if(location.state === null){
      navigate('/');
    }
    else{
      setEmail(location.state.email);
      setToken(location.state.token);
    }
  }, [location, navigate]);

  const gotoPage = (path) => {
    navigate(path, {
      state: {
        email:email
      }
    });
  }

  const updateInfo = () => {
    if(firstName === '' || lastName === '')
      return;
    const account = { 
      email:email,
      token:token,
      first: firstName,
      last: lastName
    }; 
    axios.post(`${api_url}/update`, account)
    .then(response => {
      if(response.data.status === 0){
        cogoToast.success(response.data.message);
        setTimeout(() => {
          navigate("/welcome", {
            state: {
              email:email
            }
          });
        }, 2000);
      }
      else
        cogoToast.error(response.data.message);
    });
  }

  return (
    <div className="w-90p p-[20px] h-90p sm:h-80p sm:p-[70px] rounded-[50px] m-auto bg-white" style={{maxWidth:'860px', overflow:'auto'}}>
      <div className="text-center mb-[10px] sm:mb-[50px]">
        <label className="font-bold text-[21px] sm:text-[30px]">
          SALES REPRESENTATIVE
        </label>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-center flex-col w-full">
          <label className="text-[18px] mb-3">
            FIRST NAME
          </label>
          <input
            type="text"
            placeholder="Smith"
            className="rounded-[30px] border bg-white/0 p-3 text-[17px] h-[50px] sm:h-[60px]" onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="flex justify-center flex-col w-full">
          <label className="text-[18px] mb-3">
            LAST NAME
          </label>
          <input
            type="text"
            placeholder="John"
            className="rounded-[30px] border bg-white/0 p-3 text-[17px] h-[50px] sm:h-[60px]" onChange={(e) => {setLastName(e.target.value)}}/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-[10px]">
          <button className="col-span-1 rounded-full h-[50px] sm:h-[60px]" style={{border:'1px solid black'}} onClick={() => gotoPage('/verifyemail')}>
            BACK
          </button>
          <button className="col-span-1 rounded-full text-white h-[50px] sm:h-[60px] font-bold bg-yellow" onClick={() => updateInfo()}>
            CONTINUE
          </button>
        </div>
      </div>
    </div>      
  );
}