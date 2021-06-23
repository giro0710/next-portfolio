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
            <Image src="/images/giro-calvario.png" alt="Gian Roi Calvario" width={851} height={1134} />
          </div>
        </div>
      </section>

      <section className={styles.skills}>
        <div className={styles.body}>
          <div className={styles.items}>
            <div className={styles.logo}>
              <Image src="/images/icons/web-development.png" alt="Web Development" width={512} height={512} />
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
              <Image src="/images/icons/mobile-development.png" alt="Mobile Development" width={512} height={512} />
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
              <Image src="/images/icons/api-development.png" alt="API Development" width={512} height={512} />
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
              <Image src="/images/icons/html.png" alt="HTML" width={512} height={512} />
            </div>
            <div className={styles.label}>
              <label>HTML</label>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.icon}>
              <Image src="/images/icons/css.png" alt="CSS" width={512} height={512} />
            </div>
            <div className={styles.label}>
              <label>CSS</label>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.icon}>
              <Image src="/images/icons/js.png" alt="JavaScript" width={512} height={512} />
            </div>
            <div className={styles.label}>
              <label>JavaScript</label>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.icon}>
              <Image src="/images/icons/jquery.png" alt="JQuery" width={512} height={512} />
            </div>
            <div className={styles.label}>
              <label>JQuery</label>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.icon}>
              <Image src="/images/icons/php.png" alt="PHP" width={512} height={512} />
            </div>
            <div className={styles.label}>
              <label>PHP</label>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.icon}>
              <Image src="/images/icons/mysql.png" alt="MySQL" width={512} height={512} />
            </div>
            <div className={styles.label}>
              <label>MySQL</label>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.icon}>
              <Image src="/images/icons/nodejs.png" alt="NodeJS" width={512} height={512} />
            </div>
            <div className={styles.label}>
              <label>NodeJS</label>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.icon}>
              <Image src="/images/icons/express.png" alt="ExpressJS" width={512} height={512} />
            </div>
            <div className={styles.label}>
              <label>ExpressJS</label>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.icon}>
              <Image src="/images/icons/bootstrap.png" alt="Bootstrap" width={512} height={512} />
            </div>
            <div className={styles.label}>
              <label>Bootstrap</label>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.icon}>
              <Image src="/images/icons/sass.png" alt="SASS" width={512} height={512} />
            </div>
            <div className={styles.label}>
              <label>SASS</label>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.icon}>
              <Image src="/images/icons/reactnative.png" alt="React Native" width={512} height={512} />
            </div>
            <div className={styles.label}>
              <label>React</label>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.icon}>
              <Image src="/images/icons/redux.png" alt="Redux" width={512} height={512} />
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
