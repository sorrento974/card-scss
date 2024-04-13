import styles from './App.module.css'


function App() {
  return (
    <>
      <section>
        <img className={styles.character} src="src/assets/donatello cartoon.jpg" alt="picture of donatello - cartoon version" />
        <article className={styles.buttons}>
        <button className={styles.button}>précédent</button>
        <button className={styles.button}>suivant</button>
        </article>
        <h1 className={styles.title}>Donatello</h1>
        <article className={styles.skills}>
          <p className={styles.paragraph}>Force :
          <img className={styles.imgStar} src="src/assets/BackgroundEraser_20240404_190433302.png" alt="" /></p>
          <p className={styles.paragraph}>Intelligence: 
          <img className={styles.imgStar} src="src/assets/BackgroundEraser_20240404_190412213.png" alt="" /></p>
          <p className={styles.paragraph}>Fun: 
          <img className={styles.imgStar} src="src/assets/BackgroundEraser_20240404_190533841.png" alt="" /></p>
      </article>
      </section>
    </>
  )
}

export default App;
