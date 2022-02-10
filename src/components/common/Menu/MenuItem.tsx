import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss'

interface MenuItemProps {
  url: string;
  itemName: string;
  closeMobileMenu: Function
}

export const MenuItem = ({
  url,
  itemName,
  closeMobileMenu
}: MenuItemProps) => {
  return (
    <div className='px-7 mt-8 sm:mt-0 py-1 m-1 rounded-lg menu-item-wrapper text-black text-lato text-xl sm:text-lg'>
      <li className='' onClick={() => closeMobileMenu()}>
        <Link className='hover:text-blue-600 transition-hover' to={url}>
          {itemName}
        </Link>
      </li>
    </div>
  )
}

export default MenuItem