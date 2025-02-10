
import LogoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import {FiUser, FiLogIn} from 'react-icons/fi'


export default function Header() {


  const signed = false;
  const loadingAuth = false;


  return (
    <div className='w-full flex items-center justify-center h-16 bg-white drop-shadow-md mb-4'>
      <header className='flex w-full items-center justify-between max-w-7xl px-6 mx-auto'>

        <Link to='/'>        
          <img src={LogoImg} alt="Logo" />
       </Link>





{!loadingAuth && signed && (
       <Link to='/dashboard'>
       <FiUser size={24} color='#222222'/>
       </Link>
)}



{!loadingAuth && !signed && (
       <Link to='/login'>
       <FiLogIn size={24} color='#222222'/>
       </Link>
)}










        </header>


    </div>
  )
}
