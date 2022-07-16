import React, { HTMLAttributes, ReactNode } from 'react'

export type ModalStep = 'stepFirst' | 'stepSecond' | 'stepThird' | 'stepFail'

export interface ModalSteps {
  stepFirst: {
    isAlreadyUsed: boolean
  }
  stepSecond: {
    feedback: string
    comment: string
  }
  stepThird: void
  stepFail: boolean
}

export interface User {
  name: string
}

export interface BenefitName {
  benefitName: string | null
}

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
  user: User | null
  benefitName: string
  benefitList: IBenefits[] | []
  setBenefitList: React.Dispatch<React.SetStateAction<never[]>>
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  notification: boolean
  setNotification: React.Dispatch<React.SetStateAction<boolean>>
  addUser: (user: User) => void
  modalSteps: ModalSteps
  setModalSteps: React.Dispatch<React.SetStateAction<ModalSteps>>
  modalStep: ModalStep
  setModalStep: React.Dispatch<React.SetStateAction<ModalStep>>
  resetModalSteps: () => void
  setBenefitName: React.Dispatch<React.SetStateAction<string>>
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}
