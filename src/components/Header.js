import React from 'react'
import './header.css'


const Header = () => {
  return (
   <div>
   <div className='main'>
    <div className='sub-main'>
      
        <form action="action_page.php" method="post">
  <div className='logincontainer'> تسجيل الدخول</div>
  <div class="container">
    <label for="uname"><b>الكود الالكتروني</b></label>
    <input type="text" placeholder="الكود الالكتروني" name="uname" required/>

    <label for="psw"><b>كلمة السر</b></label>
    <input type="password" placeholder="كلمة السر" name="psw" required/>

    <button type="submit">تسجيل دخول</button>
    
    
  </div>


    
  
</form>
        </div>
      </div>
    </div>

    
  )
}

export default Header