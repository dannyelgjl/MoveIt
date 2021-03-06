import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

const Profile = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/dannyelgjl.png" alt="Daniel Jerônimo" />
      <div>
        <strong>Daniel Gomes</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}

export default Profile;