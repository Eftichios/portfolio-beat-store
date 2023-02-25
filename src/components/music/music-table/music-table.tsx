import { Table } from "react-bootstrap";
import MusicTableRow from "./music-table-row";
import styles from "./music-table.module.css";

export default function MusicTable() {
  return (
    <section className={styles.musicTableSection}>
      <h1>Explore Beats</h1>
      <div className={styles.musicTableContainer}>
        <Table responsive>
          <thead>
            <tr>
              <th>Song Image</th>
              <th>Song Title</th>
              <th className={styles.hideColumnMobile}>Time(m)</th>
              <th className={styles.hideColumnMobile}>BPM</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <MusicTableRow
              imagePath="/images/song-img.jfif"
              title="title"
              time="2:35"
              bpm={160}
            />
            <MusicTableRow
              imagePath="/images/song-img.jfif"
              title="title"
              time="2:35"
              bpm={160}
            />
            <MusicTableRow
              imagePath="/images/song-img.jfif"
              title="title"
              time="2:35"
              bpm={160}
            />
            <MusicTableRow
              imagePath="/images/song-img.jfif"
              title="title"
              time="2:35"
              bpm={160}
            />
          </tbody>
        </Table>
      </div>
    </section>
  );
}
