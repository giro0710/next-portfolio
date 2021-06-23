import Meta from './Meta'
import Nav from './Nav'
import styles from '../styles/Layout.module.scss'

const Layout = ({children}) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        {children}
      </div>
    </>
  )
}

export default Layout