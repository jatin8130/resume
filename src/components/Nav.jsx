import React, { useEffect, useState } from 'react'

const Link = [
  {
    label: 'Home',
    href: '#home',
    icon: <i className="ri-home-2-line mr-3"></i>
  },
  {
    label: 'About Me',
    href: '#about-me',
    icon: <i className="ri-user-3-line mr-3"></i>
  },
  {
    label: "Skill's",
    href: '#skill',
    icon: <i className="ri-quill-pen-line mr-3"></i>
  },
  {
    label: 'Education',
    href: '#education',
    icon: <i className="ri-file-text-line mr-3"></i>
  },
  {
    label: 'Project',
    href: '#project',
    icon: <i className="ri-profile-line mr-3"></i>
  },
  {
    label: 'Certificate',
    href: '#certificate',
    icon: <i className="ri-file-paper-line mr-3"></i>
  }
]

const Nav = () => {

  const [Show, setShow] = useState(false);
  const [Mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      setMouse({ x: e.clientX, y: e.clientY })
    })
  }, [])

  return (
    <div className='sticky z-10 top-0'>
      <div className='lg:block hidden w-2 h-2 rounded-full absolute' style={{ top: Mouse.y + 1, left: Mouse.x + 1, border: '2px solid #8670EF', transition: '0.1s' }}></div>

      {/* laptop */}

      <div
        style={{
          backgroundImage: 'linear-gradient(to right, #F1F9FD, white, #F1F9FD)'
        }}
        className='lg:flex hidden justify-between items-center lg:py-4 px-12'>
        <div className='flex gap-1 items-center'>
          <h1
            className='text-5xl cursor-default'
            style={{
              fontFamily: 'sans-serif'
            }}
          >
            Jatin
            <span className='text-blue-500'>.</span>
          </h1>

          <img className='w-12 h-12 rounded-full border-2 border-black' src='/image/photo.png' alt='...' />
        </div>

        <ul className='flex gap-2'>
          {
            Link.map((item, ind) => {
              return <li
                className='hover:text-[#8670EF] font-semibold p-4'
                key={ind}
              >
                <a href={item.href}>{item.label}</a>
              </li>
            })
          }
        </ul>

        <button className='bg-[#8670EF] text-white py-5 px-8 rounded-2xl'><a href='#contact' className='text-base font-semibold'>Contact Me</a></button>
      </div>

      {/* mobile */}

      <div style={{
        backgroundImage: 'linear-gradient(to right, #F1F9FD, white, #F1F9FD)'
      }}
        className='flex justify-between items-center p-4 lg:hidden'
      >
        <div className='flex gap-1 items-center'>
          <h1
            className='text-4xl cursor-default'
            style={{
              fontFamily: 'sans-serif'
            }}
          >
            Jatin
            <span className='text-blue-500'>.</span>
          </h1>
          <img className='w-9 h-9 rounded-full border-2 border-black' src='/image/photo.png' alt='...' />
        </div>

        <i onClick={() => setShow(!Show)} className="ri-menu-2-line text-3xl"></i>
      </div>

      <ul className='lg:hidden w-full pl-6 py-4 absolute bg-white'
        style={{
          top: Show ? '90%' : '-400%',
          transition: '0.3s'
        }}
      >
        {
          Link.map((item, ind) => {
            return <li
              onClick={() => setShow(false)}
              className='hover:text-[#8670EF] font-semibold p-2'
              key={ind}
            >
              {item.icon}
              <a href={item.href}>{item.label}</a>
            </li>
          })
        }
      </ul>

    </div>

  )
}

export default Nav

// https://jandjteams.com/wordpress/hevin/home-typer/