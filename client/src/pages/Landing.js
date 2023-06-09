import {Logo} from '../components/index'
import main from '../assets/images/main.svg'
import Wrapper from '../../src/assets/wrappers/LandingPage'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className="container page">
            <div className="info">
                <h1>Job <span>tracking</span> app</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repudiandae magnam iure voluptas error fugit. Reiciendis, nostrum saepe recusandae minima numquam ut odio ea! Sapiente, similique. Officia magnam fugit illum.
                </p>
                <Link to='/register' className='btn btn-hero'>
                    Login/Register
                </Link>
            </div>
            <img src={main} alt="job hunt" className='img main-img' />
        </div>
    </Wrapper>
  )
}

export default Landing