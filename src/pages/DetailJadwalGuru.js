import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../component/Layout';
import './DetailJadwalGuru.css';

export default function DetailJadwalGuru() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDetailJadwalGuru() {
      try {
        const response = await axios.get('https://api-starlynmusic.herokuapp.com/jadwalGuru', {
          params: {
            id,
          },
        });
        if (response.status === 200) {
          setData(response.data[0]);
        }
      } catch (err) {
        console.log('err', err);
      }
    }
    async function fetchData() {
      setIsLoading(true);
      await fetchDetailJadwalGuru();
      setIsLoading(false);
    }
    fetchData();
  }, [id]);

  return (
    <Layout>
      <div className="contentDetailJadwalGuru">
        <img src="/images/music.png" className="contentDetailJadwalGuruImg" alt="music"></img>
        {isLoading ? (
          <p>Waiting</p>
        ) : (
          <>
            <h1>Detail Jadwal Dokter</h1>
            <div className="cardDetailJadwalGuru">
              <table border="0" width="100%">
                <tr>
                  <td>Nama Guru</td>
                  <td>:</td>
                  <td>{data.nama_guru}</td>
                </tr>
                <tr>
                  <td>Alat Musik</td>
                  <td>:</td>
                  <td>{data.alat_musik}</td>
                </tr>
                <tr>
                  <td>Hari</td>
                  <td>:</td>
                  <td>{data.hari}</td>
                </tr>
                <tr>
                  <td>Jam Private</td>
                  <td>:</td>
                  <td>{data.waktu}</td>
                </tr>
              </table>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
