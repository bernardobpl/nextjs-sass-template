import styles from './styles.module.scss'

import { BiWorld as WorldIcon } from 'react-icons/bi'
import { MdOutlineWavingHand as HelloIcon } from 'react-icons/md'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello World</h1>
      <div>
        <HelloIcon size={40} />
        <WorldIcon size={40} />
      </div>
    </div>
  )
}
