import React from 'react'
import styles from '../../styles/Button.module.css'

type Props = {
  children?: React.ReactNode
}

const Button = ({ children, ...props }: Props) => {
  return (
    <button {...props} className={styles.button}>
      <span>
        <a>{children}</a>
      </span>
    </button>
  )
}

export default Button
