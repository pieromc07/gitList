import React from 'react'
import { Icon } from '../../Icon/Icon'


import check from '../../../../assets/icons/done.svg'

import './DropDownItem.css'

export const DropDownItem = ({item}) => {
  return (
    <li className='dropdownitem'>
        <Icon icon={check} />
        {item}
    </li>
  )
}
