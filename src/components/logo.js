import Image from 'next/image'
import logo from '../../public/logo.png'

const Logo = props => (
  <Image src={logo} alt="logo with JJ" width="50" height="50" loading="eager" />
)
export default Logo
