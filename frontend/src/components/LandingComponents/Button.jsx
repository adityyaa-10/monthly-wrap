/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
const Button = (props) => {
  const { styles } = props;
  return (
    <Link to={`/signup`} className={`py-4 px-6 bg-blue font-poppins font-medium text-[18px] text-white outline-none ${styles} rounded-[10px]`}>
      Get Started
    </Link>
  )
}

export default Button