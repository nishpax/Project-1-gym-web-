import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Navbar.module.css'
function Navbar() {

  
  return (
    <div className={styles}> 
      <NavLink to='/' className={styles.home}>Home</NavLink>
      <NavLink to='/about' className={styles.About}>  About</NavLink>
      <NavLink to='/blogs' className={styles.Blogs}>Blogs</NavLink>
      <NavLink to='/classes' className={styles.Classes}>Classes</NavLink>
      <NavLink to='/pricing' className={styles.Pricing} >Pricing</NavLink>
      <NavLink to='/joinus'  className={styles.JoinUs}> <button className={styles.button}>JoinUs</button></NavLink>
      <div className={styles.logo}>
    <img src='https://media.istockphoto.com/id/1362037458/photo/3d-barbell-gym.jpg?b=1&s=170667a&w=0&k=20&c=iKWSKd_YYApg7ovzfSoZ6BIT0xMURH9QBzc-WHDt2EI=' alt='ChandrBhan-Gym' width={100} height={100}/>
 <p>ChandrBhan's Gym</p>
  </div>
    </div>

  )
}

export default Navbar