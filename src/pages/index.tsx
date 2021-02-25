//Components
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
// style
import styles from '../styles/pages/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
        </div>
        <div>

        </div>
      </section>
    </div>
  );
};

export default Home;