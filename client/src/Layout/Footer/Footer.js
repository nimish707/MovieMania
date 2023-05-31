import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  const Links = [
    {
      title: 'Company',
      links: [
        {
          name: 'Home',
          link: '/homescreen'
        },
        {
          name: 'About Us',
          link: '/about-us'
        },
        {
          name: 'Contact Us',
          link: '/contact-us'
        },
        {
          name: 'Movies',
          link: '/movies'
        }
      ]
    },
    {
      title: 'Top Categories',
      links: [
        {
          name: 'Action',
          link: '#'
        },
        {
          name: 'Romantic',
          link: '#'
        },
        {
          name: 'Drama',
          link: '#'
        },
        {
          name: 'Historical',
          link: '#'
        }
      ]
    },
    {
      title: 'My Account',
      links: [
        {
          name: 'Dashboard',
          link: '/dashboard'
        },
        {
          name: 'My Favourite',
          link: '/favourites'
        },
        {
          name: 'Profile',
          link: '/profile'
        },
        {
          name: 'Change Password',
          link: '/password'
        }
      ]
    }
  ]
  return (
    <div className='bg-dry py-4 bprder=t-2 border-black'>
      <div className='container mx-auto px-2'>
        <div className='grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap xl:gap-7 py-10 justify-between'>
          {Links.map((
            link, index) => (
            <div key={index} className='col-span-1 md:col-span-3 lg:col-span-3 pb-3.5 sm:pb-0'>
              <h3 className='text-md lg:leading-7 font-medium sm:mb-5 lg:mb-6 mb-6 pb-0.5'>{link.title}</h3>

              <ul className='text-sm flex flex-col space-y-3'>
                {link.links.map((text, index) => (
                  <li key={index} className='flex items-baseline'>
                    <Link to={text.link} className='text-border inline-block w-full hover:text-subMain'>
                      {text.name}
                    </Link>

                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className='pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col span-3'>
            <Link to="/homescreen">
              <img src="/images/Logo.svg" alt="logo" className='w-3/2 object-contain h-15' />
            </Link>
            <p className='leading-7 text-sm text-border mt-3'>
              <span>
                lorem 196 Andrew Road,Suite 200, New York,NY 100007
              </span>
              <br />
              <span> tell:+255 754 661 423</span>
              <br />
              <span>
                Email:info@moviemania.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
