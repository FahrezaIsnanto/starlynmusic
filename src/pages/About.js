import Layout from '../component/Layout';
import './About.css';

export default function About() {
  return (
    <Layout>
      <div className="contentAbout">
        <img src="/images/music.png" className="contentAboutImg" alt="music"></img>
        <h2 className="contentAboutTitle">Tentang STARLYN MUSIC</h2>
        <p className="contentAboutVersion">version 1.0.0</p>
        <p className="contentAboutBody">Felisiana Ardelia Azzahra</p>
      </div>
    </Layout>
  );
}
