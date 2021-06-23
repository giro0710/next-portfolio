import React from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Nav.module.scss'

export default class Nav extends React.Component {
  state = {
    scrolledDown: false,
    isMenuClicked: false
  }

  navFunction = () => {
    this.setState({...this.setState, isMenuClicked: true})
  }

  handleScroll = () => {
    if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
      this.setState({...this.setState, scrolledDown: true})
    } else {
      this.setState({...this.setState, scrolledDown: false})
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll, false);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll, false)
  }

  render () {
    return (
      <nav className={styles.nav}>
        <div className={this.state.scrolledDown ? `${styles.navbar} ${styles.scrolled}` : styles.navbar} id="navbar">
          <div className={styles.brand}>
            <Link href="#home">Giro Calvario</Link>
          </div>
          <div className={this.state.isMenuClicked ? `${styles.items} ${styles.responsive}` : styles.items}>
            <Link href="#skill">Skills</Link>
            <Link href="#workstory">My Works</Link>
            <Link href="#background">Background</Link>
            <Link href="#contact">Contact Me</Link>
            <a href={void(0)} className={styles.icon} onClick={this.navFunction}>
              <FontAwesomeIcon icon={faBars} style={{width: "18px", color: "white"}} />
            </a>
          </div>
        </div>
      </nav>
    )
  }
}