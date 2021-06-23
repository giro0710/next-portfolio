import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.body}>
          <div className={styles.left}>
            <div className={styles.title}>
              <h1>Gian Roi Calvario</h1>
              <h2>Web Developer</h2>
            </div>
            <div className={styles.message}>
              <p> - MY WEBSITE STILL UNDER CONSTRUCTION</p>
            </div>
          </div>
          <div className={styles.right}>
            <Image src="/images/giro-calvario.png" alt="Giro Calvario" />
          </div>
        </div>
      </section>

      <section className={styles.skills}>
        <div className={styles.body}>
          <div className={styles.items}>
            <div className={styles.logo}>
              <Image src="/images/icons/web-development.png" title="Web Development" />
            </div>
            <div className={styles.title}>
              <h1>Web</h1>
            </div>
            <div className={styles.body}>
              <p>Develop fast, user-friendly and easily accesible website for your business, blog or advertisement. </p>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.logo}>
              <Image src="/images/icons/mobile-development.png" title="Mobile Development" />
            </div>
            <div className={styles.title}>
              <h1>Mobile</h1>
            </div>
            <div className={styles.body}>
              <p>Create mobile applications with the power of web technologies that can run in both Android and iOS using the same code.</p>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.logo}>
              <Image src="/images/icons/api-development.png" title="API Development" />
            </div>
            <div className={styles.title}>
              <h1>API</h1>
            </div>
            <div className={styles.body}>
              <p>Helps you manage and create new API routes to support your web and mobile applications.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.stacks}>
      <div className={styles.body}>
        <div className={styles.items}>
          <div className={styles.icon}>
            <Image src="/images/icons/html.png" title="HTML" />
          </div>
          <div className={styles.label}>
            <label>HTML</label>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.icon}>
            <Image src="/images/icons/css.png" title="CSS" />
          </div>
          <div className={styles.label}>
            <label>CSS</label>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.icon}>
            <Image src="/images/icons/js.png" title="JavaScript" />
          </div>
          <div className={styles.label}>
            <label>JavaScript</label>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.icon}>
            <Image src="/images/icons/jquery.png" title="JQuery" />
          </div>
          <div className={styles.label}>
            <label>JQuery</label>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.icon}>
            <Image src="/images/icons/php.png" title="PHP" />
          </div>
          <div className={styles.label}>
            <label>PHP</label>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.icon}>
            <Image src="/images/icons/mysql.png" title="MySQL" />
          </div>
          <div className={styles.label}>
            <label>MySQL</label>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.icon}>
            <Image src="/images/icons/nodejs.png" title="NodeJS" />
          </div>
          <div className={styles.label}>
            <label>NodeJS</label>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.icon}>
            <Image src="/images/icons/express.png" title="ExpressJS" />
          </div>
          <div className={styles.label}>
            <label>ExpressJS</label>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.icon}>
            <Image src="/images/icons/bootstrap.png" title="Bootstrap" />
          </div>
          <div className={styles.label}>
            <label>Bootstrap</label>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.icon}>
            <Image src="/images/icons/sass.png" title="SASS" />
          </div>
          <div className={styles.label}>
            <label>SASS</label>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.icon}>
            <Image src="/images/icons/reactnative.png" title="React Native" />
          </div>
          <div className={styles.label}>
            <label>React</label>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.icon}>
            <Image src="/images/icons/redux.png" title="Redux" />
          </div>
          <div className={styles.label}>
            <label>Redux</label>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
