import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

import {
  ContextChildrenProps,
  ModalStep,
  UrbisContextProps,
  User
} from '../types/types'

export const defaultValues: UrbisContextProps = {
  user: null,
  modalSteps: {
    stepFirst: {
      isAlreadyUsed: false
    },

    stepSecond: {
      feedback: '',
      comment: ''
    },

    stepThird: undefined,
    stepFail: false
  },
  modalStep: 'stepFirst',
  benefitList: [],
  setBenefitList: () => [],
  showModal: false,
  setShowModal: () => false,
  notification: false,
  setNotification: () => false,
  addUser: () => false,
  setModalStep: () => undefined,
  setModalSteps: () => undefined,
  resetModalSteps: () => undefined
}

export const UrbisContext = createContext<UrbisContextProps>(defaultValues)

export const useUrbisContext = () => useContext(UrbisContext)

export const UrbisContextProvider = ({ children }: ContextChildrenProps) => {
  const [user, setUser] = useState<User | null>(null)

  const [modalSteps, setModalSteps] = useState(defaultValues.modalSteps)

  const [modalStep, setModalStep] = useState<ModalStep>('stepFirst')

  useEffect(() => {
    const userFromStorage = localStorage.getItem('@urbis/user')

    if (!userFromStorage) return

    const userData = JSON.parse(userFromStorage)

    setUser(userData)
  }, [])

  const [benefitList, setBenefitList] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [notification, setNotification] = useState(false)

  const addUser = useCallback((user: User) => {
    setUser(user)

    localStorage.setItem('@urbis/user', JSON.stringify(user))
  }, [])

  const resetModalSteps = () => {
    setModalSteps(defaultValues.modalSteps)
  }

  return (
    <UrbisContext.Provider
      value={{
        user,
        setModalStep,
        modalStep,
        modalSteps,
        setModalSteps,
        benefitList,
        setBenefitList,
        showModal,
        setShowModal,
        notification,
        setNotification,
        addUser,
        resetModalSteps
      }}
    >
      {children}
    </UrbisContext.Provider>
  )
}
