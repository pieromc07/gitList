import React from 'react'
import { Icon } from '../Icon/Icon'

import cancel from '../../../assets/icons/cancel.svg'
import './DropDown.css'
import { DropDownItem } from './DropDownItem/DropDownItem'

export const DropDown = () => {
	return (
		<div className='dropdown' >
			<div className='dropdown-header'>
				<p className='dropdown-header_text'>
					Select Type
				</p>
				<Icon icon={cancel} />
			</div>
			<ul className="dropdown-body">
				<DropDownItem item={"All"} />
				<DropDownItem item={"Sources"} />
				<DropDownItem item={"Fork"} />
				<DropDownItem item={"Archived"} />
				<DropDownItem item={"Mirrors"} />
			</ul>
		</div>
	)
}
