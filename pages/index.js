import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <section class={styles.hero}>
        <div class={styles.body}>
          <div class={styles.left}>
            <div class={styles.title}>
              <h1>Gian Roi Calvario</h1>
              <h2>Web Developer</h2>
            </div>
            <div class={styles.message}>
              <p> - MY WEBSITE STILL UNDER CONSTRUCTION</p>
            </div>
          </div>
          <div class={styles.right}>
            <img src="/images/giro-calvario.png" alt="Giro Calvario" />
          </div>
        </div>
      </section>

      <section class={styles.skills}>
        <div class={styles.body}>
          <div class={styles.items}>
            <div class={styles.logo}>
              <img src="/images/icons/web-development.png" title="Web Development" />
            </div>
            <div class={styles.title}>
              <h1>Web</h1>
            </div>
            <div class={styles.body}>
              <p>Develop fast, user-friendly and easily accesible website for your business, blog or advertisement. </p>
            </div>
          </div>
          <div class={styles.items}>
            <div class={styles.logo}>
              <img src="/images/icons/mobile-development.png" title="Mobile Development" />
            </div>
            <div class={styles.title}>
              <h1>Mobile</h1>
            </div>
            <div class={styles.body}>
              <p>Create mobile applications with the power of web technologies that can run in both Android and iOS using the same code.</p>
            </div>
          </div>
          <div class={styles.items}>
            <div class={styles.logo}>
              <img src="/images/icons/api-development.png" title="API Development" />
            </div>
            <div class={styles.title}>
              <h1>API</h1>
            </div>
            <div class={styles.body}>
              <p>Helps you manage and create new API routes to support your web and mobile applications.</p>
            </div>
          </div>
        </div>
      </section>

      <section class={styles.stacks}>
      <div class={styles.body}>
        <div class={styles.items}>
          <div class={styles.icon}>
            <img src="/images/icons/html.png" title="HTML" />
          </div>
          <div class={styles.label}>
            <label>HTML</label>
          </div>
        </div>
        <div class={styles.items}>
          <div class={styles.icon}>
            <img src="/images/icons/css.png" title="CSS" />
          </div>
          <div class={styles.label}>
            <label>CSS</label>
          </div>
        </div>
        <div class={styles.items}>
          <div class={styles.icon}>
            <img src="/images/icons/js.png" title="JavaScript" />
          </div>
          <div class={styles.label}>
            <label>JavaScript</label>
          </div>
        </div>
        <div class={styles.items}>
          <div class={styles.icon}>
            <img src="/images/icons/jquery.png" title="JQuery" />
          </div>
          <div class={styles.label}>
            <label>JQuery</label>
          </div>
        </div>
        <div class={styles.items}>
          <div class={styles.icon}>
            <img src="/images/icons/php.png" title="PHP" />
          </div>
          <div class={styles.label}>
            <label>PHP</label>
          </div>
        </div>
        <div class={styles.items}>
          <div class={styles.icon}>
            <img src="/images/icons/mysql.png" title="MySQL" />
          </div>
          <div class={styles.label}>
            <label>MySQL</label>
          </div>
        </div>
        <div class={styles.items}>
          <div class={styles.icon}>
            <img src="/images/icons/nodejs.png" title="NodeJS" />
          </div>
          <div class={styles.label}>
            <label>NodeJS</label>
          </div>
        </div>
        <div class={styles.items}>
          <div class={styles.icon}>
            <img src="/images/icons/express.png" title="ExpressJS" />
          </div>
          <div class={styles.label}>
            <label>ExpressJS</label>
          </div>
        </div>
        <div class={styles.items}>
          <div class={styles.icon}>
            <img src="/images/icons/bootstrap.png" title="Bootstrap" />
          </div>
          <div class={styles.label}>
            <label>Bootstrap</label>
          </div>
        </div>
        <div class={styles.items}>
          <div class={styles.icon}>
            <img src="/images/icons/sass.png" title="SASS" />
          </div>
          <div class={styles.label}>
            <label>SASS</label>
          </div>
        </div>
        <div class={styles.items}>
          <div class={styles.icon}>
            <img src="/images/icons/reactnative.png" title="React Native" />
          </div>
          <div class={styles.label}>
            <label>React</label>
          </div>
        </div>
        <div class={styles.items}>
          <div class={styles.icon}>
            <img src="/images/icons/redux.png" title="Redux" />
          </div>
          <div class={styles.label}>
            <label>Redux</label>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
