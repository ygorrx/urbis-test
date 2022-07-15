import { createContext, useContext, useState } from 'react'
import { ContextChildrenProps, UrbisContextProps } from '../types/types'

export const defaultValues: UrbisContextProps = {
  benefitList: [],
  setBenefitList: () => [],
  showModal: false,
  setShowModal: () => false,
  notification: false,
  setNotification: () => false
}

export const UrbisContext = createContext<UrbisContextProps>(defaultValues)

export const useUrbisContext = () => useContext(UrbisContext)

export const UrbisContextProvider = ({ children }: ContextChildrenProps) => {
  const [benefitList, setBenefitList] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [notification, setNotification] = useState(false)

  return (
    <UrbisContext.Provider
      value={{
        benefitList,
        setBenefitList,
        showModal,
        setShowModal,
        notification,
        setNotification
      }}
    >
      {children}
    </UrbisContext.Provider>
  )
}
