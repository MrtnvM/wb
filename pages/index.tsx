import styles from "../styles/Home.module.css";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const resultElement = document.getElementById("result")!;

    function onScanSuccess(decodedText: string, decodedResult: any) {
      const result = `Code matched = ${decodedText}<br />Result: ${JSON.stringify(
        decodedResult
      )}`;
      console.log(result);

      resultElement.innerHTML = result;
    }

    function onScanFailure(error: any) {
      const err = `Code scan error = ${error}`;
      console.warn(err);
      resultElement.innerHTML = err;
    }

    let html5QrcodeScanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        supportedScanTypes: [],
      },
      false
    );

    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div
          id="reader"
          style={{ width: "100%", marginLeft: 16, marginRight: 16 }}
        />

        <div
          id="result"
          style={{ margin: 16, border: "1px solid #ddd", padding: 12 }}
        ></div>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
