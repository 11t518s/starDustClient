import { useContext } from "react";
import { ContextApi } from "../Contexts/contextApi";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { example } = useContext(ContextApi);
  console.log(example);

  return <div className={styles.container}>hello world</div>;
}
