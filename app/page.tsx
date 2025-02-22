import GithubIcon from './icons/github';
import MailIcon from './icons/mail';
import SignalIcon from './icons/signal';

import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <p>
        I&rsquo;m a software developer from Minneapolis. Currently, I work on the engineering
        platform at <a href='https://www.chrobinson.com'>C.H.&nbsp;Robinson</a>.
      </p>
      <ul className={styles['social-links']}>
        <li>
          <a href='mailto:dan@stellj.es'>
            <span className={styles['icon-container']}>
              <MailIcon className={styles['icon']} />
            </span>
            dan@stellj.es
          </a>
        </li>
        <li>
          <a href='https://github.com/dstelljes'>
            <span className={styles['icon-container']}>
              <GithubIcon className={styles['icon']} />
            </span>
            dstelljes
          </a>
        </li>
        <li>
          <a href='https://signal.me/#u/dstelljes.16'>
            <span className={styles['icon-container']}>
              <SignalIcon className={styles['icon']} />
            </span>
            dstelljes.16
          </a>
        </li>
      </ul>
    </>
  );
}
