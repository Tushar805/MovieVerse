import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {Appstate} from '../App'

const Header = () => {
  const useAppstate = useContext(Appstate);
  return (
    <div className="text-4xl flex justify-between text-red-500 font-bold p-3 border-b-2 border-grey-500"> 
    <Link to={'/'}>  <span> {/*iss link ki madad se hum site me khi bhi ho movieverse ko click karke dubara home page p aa jayega  */}
        {/*yha p vanila css ki madad se navbar ki styling ki hai  */}
        Movie <span className="text-white">Verse</span>
      </span> </Link>

      {useAppstate.login ?
        <Link to={'/addmovie'}><h1 className='text-lg cursor-pointer flex items-center'>
          
        {/*mr ka matlab margin right  */}
          <Button><AddIcon className='mr-1' color='error' /> <span className='text-white'>Add New</span></Button>
      </h1></Link>
      :
      <Link to={'/login'}><h1 className='text-lg bg-green-500 cursor-pointer flex items-center'>
          <Button><span className='text-white font-medium capitalize'>Login</span></Button>
      </h1></Link>
      }

    </div>
  );
};

export default Header;
