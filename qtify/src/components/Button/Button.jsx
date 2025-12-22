import { Typography } from '@mui/material'
import React from 'react'
import styles from './Button.module.css'

function Button({ children }) {
  return (
    <Typography variant="button" className={styles.button}>
        {children}
    </Typography>
  )
}

export default Button