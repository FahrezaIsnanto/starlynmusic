import axios from 'axios';
import { useEffect, useState } from 'react';
import Gap from '../component/Gap';
import JadwalGuruCard from '../component/JadwalGuruCard';
import Layout from '../component/Layout';
import './JadwalGuru.css';

export default function JadwalGuru() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchJadwalGuru() {
      try {
        const response = await axios.get('https://api-starlynmusic.herokuapp.com/jadwalGuru');
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (err) {
        console.log('err', err);
      }
    }
    async function fetchData() {
      setIsLoading(true);
      await fetchJadwalGuru();
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="contentJadwalGuru">
        <img src="/images/music.png" className="contentJadwalGuruImg" alt="music"></img>
        {isLoading ? (
          <p>Harap Tunggu..</p>
        ) : (
          data.map(function (item, index) {
            return (
              <div key={index}>
                <Gap height={15} />
                <JadwalGuruCard jadwal={item} />
              </div>
            );
          })
        )}
      </div>
    </Layout>
  );
}
