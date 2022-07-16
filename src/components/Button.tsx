import React from 'react'
import styles from '../../styles/Button.module.css'
import { ButtonProps } from '../types/types'

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} onClick={props.onClick} className={styles.button}>
      <span>
        <a>{children}</a>
      </span>
    </button>
  )
}

export default Button
