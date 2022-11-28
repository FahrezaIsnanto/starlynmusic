import './JadwalGuruCard.css';
import { Link } from 'react-router-dom';

export default function JadwalGuruCard({ jadwal }) {
  return (
    <div className="jadwalGuruCard">
      <table border="0">
        <tr>
          <td>Nama Guru</td>
          <td>:</td>
          <td>{jadwal.nama_guru}</td>
        </tr>
        <tr>
          <td>Hari</td>
          <td>:</td>
          <td>{jadwal.hari}</td>
        </tr>
        <tr>
          <td>Jam Private</td>
          <td>:</td>
          <td>{jadwal.waktu}</td>
        </tr>
      </table>
      <Link className="buttonJadwalGuruCard" to={'/detail_jadwal_guru/' + jadwal.id}>
        Detail Jadwal Guru
      </Link>
    </div>
  );
}
