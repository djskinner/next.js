import Link from 'next/link'

import styles from '../style'

export default () =>
  <div>
    Hello World.{' '}
    <Link href="/about">
      <a>About</a>
    </Link>
		<style jsx>{styles}</style>
  </div>
