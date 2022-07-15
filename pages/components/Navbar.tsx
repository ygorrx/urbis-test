import { useState } from 'react'
import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { IconContext } from 'react-icons'
import {
  FaRegQuestionCircle,
  FaRegUserCircle,
  FaRegBell,
  FaSearch
} from 'react-icons/fa'
import useMedia from '../helper/useMedia'
import { useUrbisContext } from '../context/context'
import Button from './Button'
import Modal from './Modal_1'

const Navbar = () => {
  const desktop = useMedia('(max-width: 1366px)')
  const [noteMenu, setNoteMenu] = useState(false)
  const { notification, setNotification, showModal, setShowModal } =
    useUrbisContext()
  console.log('teste', notification)
  console.log('teste nota', noteMenu)

  const handleNotes = (e: any) => {
    e.preventDefault()
    setNotification(false)
    {
      notification ? setNoteMenu(true) : setNoteMenu(false)
    }
  }

  const closeMenu = (e: any) => {
    e.preventDefault()
    setNoteMenu(!noteMenu)
    setShowModal(true)
  }

  return (
    <header className={styles.header}>
      {showModal && <Modal setOpenModal={setShowModal} />}
      {desktop ? (
        <nav className={styles.nav}>
          <Link className={styles.logo} href={'/LoginPage'}>
            <div className={styles.logoAnimal}>
              <Image src="/assets/logo.png" width="100" height="100" />
            </div>
          </Link>
          <div className={styles.nav_wrapper}>
            <Link href={'/LoginPage'}>
              <IconContext.Provider
                value={{ size: '25px', color: 'var(--primary-color)' }}
              >
                <FaRegQuestionCircle />
              </IconContext.Provider>
            </Link>
            <div
              className={`${
                noteMenu ? styles.notes_menu_open : styles.notes_menu
              }`}
            >
              {noteMenu ? (
                <div>
                  <div>
                    <h1>Você usou um cupom! Responda nossa pesquisa</h1>
                    <button onClick={closeMenu}>Responder</button>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <button className={styles.btn_notification} onClick={handleNotes}>
              <IconContext.Provider
                value={{ size: '25px', color: 'var(--primary-color)' }}
              >
                {notification ? (
                  <div className={styles.notification_wrapper}>
                    <div className={styles.notification}>
                      <span className={styles.notification_count}>1</span>
                    </div>
                    <FaRegBell />
                  </div>
                ) : (
                  <FaRegBell />
                )}
              </IconContext.Provider>
            </button>
            <Link href={'/LoginPage'}>
              <IconContext.Provider
                value={{ size: '25px', color: 'var(--primary-color)' }}
              >
                <FaRegUserCircle />
              </IconContext.Provider>
            </Link>
          </div>
          <div className={styles.form_wrapper}>
            <form action="#" className={styles.search_form}>
              <div className={styles.input_wrapper}>
                <input
                  type="text"
                  placeholder=" Buscar"
                  name="search"
                  className={styles.search_input}
                />
                <IconContext.Provider
                  value={{ size: '15px', color: 'var(--primary-color)' }}
                >
                  <FaSearch />
                </IconContext.Provider>
              </div>
            </form>
          </div>
        </nav>
      ) : (
        <nav className={styles.nav}>
          <Link className={styles.logo} href={'/LoginPage'}>
            <div className={styles.logoAnimal}>
              <Image src="/assets/logo.png" width="100" height="100" />
            </div>
          </Link>
          <div className={styles.form_wrapper}>
            <form action="#" className={styles.search_form}>
              <div className={styles.input_wrapper}>
                <input
                  type="text"
                  placeholder=" Buscar"
                  name="search"
                  className={styles.search_input}
                />
                <IconContext.Provider
                  value={{ size: '15px', color: 'var(--primary-color)' }}
                >
                  <FaSearch />
                </IconContext.Provider>
              </div>
            </form>
            <Link href={'/LoginPage'}>
              <a>Ajuda</a>
            </Link>
          </div>
          <div
            className={`${
              noteMenu ? styles.notes_menu_open : styles.notes_menu
            }`}
          >
            {noteMenu ? (
              <div>
                <div className={styles.notes_menu_container}>
                  <h1>Você usou um cupom! Responda nossa pesquisa.</h1>
                  <Button onClick={closeMenu}>Responder!</Button>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className={styles.nav_wrapper}>
            <button className={styles.btn_notification} onClick={handleNotes}>
              <IconContext.Provider
                value={{ size: '25px', color: 'var(--primary-color)' }}
              >
                {notification ? (
                  <div className={styles.notification_wrapper}>
                    <div className={styles.notification}>
                      <span className={styles.notification_count}>1</span>
                    </div>
                    <FaRegBell />
                  </div>
                ) : (
                  <FaRegBell />
                )}
              </IconContext.Provider>
            </button>
            <Link href={'/LoginPage'}>
              <IconContext.Provider
                value={{ size: '25px', color: 'var(--primary-color)' }}
              >
                <FaRegUserCircle />
              </IconContext.Provider>
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar
