import React from 'react'
import styles from '../../styles/Button.module.css'

const Button = ({ children, ...props }) => {
  return (
    <button onClick={props.onClick} {...props} className={styles.button}>
      <span>
        <a>{children}</a>
      </span>
    </button>
  )
}

export default Button
