import { PageConfig } from 'next'
import Image from 'next/future/image'
import styles from '../styles/home.module.css'
import logo from '../../public/android-chrome-192x192.png'
import { ExternalLink } from '../components/external-link'

export const config: PageConfig = {
  unstable_runtimeJS: false,
}

export default function Index(props: {}) {
  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <Image src={logo} alt="Logo with JJ" className={styles.logo} />
        <h1>JJ Kasper</h1>
        <p>Software Engineer</p>
      </div>

      <p>
        Hey, my name is JJ Kasper. I am a software engineer currently working at{' '}
        <ExternalLink href="https://vercel.com">Vercel</ExternalLink> on{' '}
        <ExternalLink href="https://github.com/vercel/next.js">
          Next.js
        </ExternalLink>
        . I love improving workflows and creating great experiences for
        developers and end users. I think every developer should have access to
        great tools that make creating performant applications seamless, which
        is one of the main reasons I enjoy working with open-source tech.
      </p>

      <p>
        I am always interested in new projects, tech, and ways people use
        Next.js. If you would like to connect, feel free to reach out via the
        links below.
      </p>

      <div className={styles.links}>
        <ExternalLink href="https://twitter.com/_ijjk">Twitter</ExternalLink> ·{' '}
        <ExternalLink href="https://github.com/ijjk">GitHub</ExternalLink> ·{' '}
        <ExternalLink href="https://www.linkedin.com/in/jj-kasper-0b5392166/">
          LinkedIn
        </ExternalLink>{' '}
        · <ExternalLink href="mailto:jj@jjsweb.site">Email</ExternalLink>
      </div>
    </div>
  )
}
