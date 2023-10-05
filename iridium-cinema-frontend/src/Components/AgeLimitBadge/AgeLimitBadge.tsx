import React from 'react'
import { AgeLimitBadgeProps } from './AgeLimitBadgeInterface'
import './AgeLimitBadge.scss';


const AgeLimitBadge = (props: AgeLimitBadgeProps) => {
  const {age, size} = props;
  
    return (
    <div className={`age-limit-badge age-limit-badge--${age < 18 ? 'yellow': 'red'} age-limit-badge--${size}`}>
      <p className='age-limit-badge__age'>
        {age}
      </p>
    </div>
  )
}

export default AgeLimitBadge