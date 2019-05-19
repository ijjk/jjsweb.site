import Github from '../components/svgs/github'
import Linkedin from '../components/svgs/linkedin'
import Envelope from '../components/svgs/envelope'

export const siteUrl = 'https://jjsweb.site'
export const pathPrefix = '/'
export const thumbsPath = pathPrefix + 'projects/'
export const navItems = ['Home', 'Projects', 'Blog', 'Contact']
export const socials = [
  {
    Icon: Github,
    alt: 'my github',
    link: 'https://github.com/ijjk',
  },
  {
    Icon: Linkedin,
    alt: 'my linkedin',
    link: 'https://www.linkedin.com/in/jj-kasper-0b5392166/',
  },
  {
    Icon: Envelope,
    alt: 'email me',
    link: 'mailto:jj@jjsweb.site?subject=Contact',
  },
]
export const siteMetadata = {
  siteUrl,
  author: `JJ Kasper`,
  title: `JJ's website`,
  description: `Just a site to show some stuff and maybe talk about some stuff`,
}
