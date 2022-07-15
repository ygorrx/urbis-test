import React, { ReactNode } from 'react'

export interface IBenefits {
  image?: string
  title: string
  description: string
  discount: string
  rules: string
}

export interface ContextChildrenProps {
  children: ReactNode
}

export interface UrbisContextProps {
  benefitList: IBenefits[] | []
  setBenefitList: React.Dispatch<React.SetStateAction<never[]>>
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}
