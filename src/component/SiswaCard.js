import './SiswaCard.css';
import { Link } from 'react-router-dom';

export default function SiswaCard({ siswa }) {
  return (
    <div className="pasienCard">
      <table border="0">
        <tr>
          <td>No Induk Siswa</td>
          <td>:</td>
          <td>{siswa.no_induk_siswa}</td>
        </tr>
        <tr>
          <td>Nama</td>
          <td>:</td>
          <td>{siswa.nama_siswa}</td>
        </tr>
        <tr>
          <td>Tanggal Lahir</td>
          <td>:</td>
          <td>{siswa.tgl_lahir_siswa}</td>
        </tr>
        <tr>
          <td>Alamat</td>
          <td>:</td>
          <td>{siswa.alamat_siswa}</td>
        </tr>
        <tr>
          <td>Jenis Kelamin</td>
          <td>:</td>
          <td>{siswa.jenis_kelamin_siswa}</td>
        </tr>
      </table>
      <Link className="buttonPasienCard" to={'/riwayat_pendaftaran/' + siswa.no_induk_siswa}>
        Riwayat Pendaftaran
      </Link>
    </div>
  );
}
