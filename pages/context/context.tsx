import { createContext, useContext, useState } from 'react'
import { ContextChildrenProps, UrbisContextProps } from '../types/types'

export const defaultValues: UrbisContextProps = {
  benefitList: [],
  setBenefitList: () => [],
  showModal: false,
  setShowModal: () => false,
  openModal: false,
  setOpenModal: () => false,
  notification: false,
  setNotification: () => false,
  apiData: [],
  setApiData: () => []
}

export const UrbisContext = createContext<UrbisContextProps>(defaultValues)

export const useUrbisContext = () => useContext(UrbisContext)

export const UrbisContextProvider = ({ children }: ContextChildrenProps) => {
  const [benefitList, setBenefitList] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [notification, setNotification] = useState(false)
  const [apiData, setApiData] = useState([])

  return (
    <UrbisContext.Provider
      value={{
        benefitList,
        setBenefitList,
        showModal,
        setShowModal,
        notification,
        setNotification,
        apiData,
        setApiData,
        openModal,
        setOpenModal
      }}
    >
      {children}
    </UrbisContext.Provider>
  )
}
