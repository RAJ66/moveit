import styles from "../styles/components/CompletedChallenge.module.css";

export function CompletedChallenge() {
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>6</span>
    </div>
  );
}
