import style from './styles/Header.module.css'
import Image from 'next/image'
import logo from './image/logo.png'


function Header() {
  return (
    <>
      <div className={style.top_header}>
        <div className={style.left}>
          <p>Mobile Number</p>
        </div>
        <div className={style.right}>
          <div className={style.right_child_1}>
            <p>Email Address</p>
          </div>

          <div className={style.right_child_2}>
            <p><a href='#'>Login / Register</a></p>
          </div>
        </div>
      </div>
      <div className={style.container}>

        <div className={style.header_container}>
          <Image
            src={logo}
            alt="ryz logo"
            width={100}
            style={{
              lineHeight: "2px",
              marginLeft: "23px"
            }}
          />
          <nav >
            <ul id={style['header_nav']}>
              <li className={style.header_li}><a className={style.header_a} href='#'>Home</a></li>
              <li className={style.header_li}><a className={style.header_a} href='#'>About Us</a></li>
              <li className={style.header_li}><a className={style.header_a} href='#'>Product</a></li>
              <li className={style.header_li}><a className={style.header_a} href='#'>Product</a></li>
            </ul>
          </nav>
          <button style={{
            width: "180px",
            marginRight: "12px",
            backgroundColor: "#0071BC",
            color: "white",
          }}
            className={style.btn}
          >Open Account</button>
        </div>
      </div>



    </>
  )
}

export default Header