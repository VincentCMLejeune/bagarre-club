import React from 'react';

import styles from './TeamFightReport.module.css';

export default function TeamFightReport(props) {
  const { report } = props;

  const announcement = report.shift();
  const result = report.pop();

  return (
    <div className={styles.reportContainer}>
      <div className={styles.fightingAnnouncement}>{announcement}</div>
      {report.map((x, i) => {
        return (
          <div className={styles.fightingAction} key={i}>
            {x}
          </div>
        );
      })}
      <div className={styles.fightingResult}>{result}</div>
    </div>
  );
}
