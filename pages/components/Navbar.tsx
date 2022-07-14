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

const Navbar = () => {
  const desktop = useMedia('(max-width: 1366px)')

  return (
    <header className={styles.header}>
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
            <Link href={'/LoginPage'}>
              <IconContext.Provider
                value={{ size: '25px', color: 'var(--primary-color)' }}
              >
                <FaRegBell />
              </IconContext.Provider>
            </Link>
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

          <div className={styles.nav_wrapper}>
            <Link href={'/LoginPage'}>
              <IconContext.Provider
                value={{ size: '25px', color: 'var(--primary-color)' }}
              >
                <FaRegBell />
              </IconContext.Provider>
            </Link>
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
