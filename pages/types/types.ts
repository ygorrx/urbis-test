import React, { HTMLAttributes, ReactNode } from 'react'

export interface IBenefits {
  image?: string
  title: string
  description: string
  discount: string
  rules: string
}
export interface IData {
  name: string
  email: string
}

export interface ContextChildrenProps {
  children: ReactNode
}

export interface UrbisContextProps {
  benefitList: IBenefits[] | []
  setBenefitList: React.Dispatch<React.SetStateAction<never[]>>
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  notification: boolean
  setNotification: React.Dispatch<React.SetStateAction<boolean>>
  apiData: IData[] | []
  setApiData: React.Dispatch<React.SetStateAction<never[]>>
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}
