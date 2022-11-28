import React from 'react';
import Welcome from './pages/Welcome';
import Start from './pages/Start';
import Pendaftaran from './pages/Pendaftaran';
import { HiHome } from 'react-icons/hi';
import { MdGroup } from 'react-icons/md';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Finish from './pages/Finish';
import RiwayatPendaftaran from './pages/RiwayatPendaftaran';
import About from './pages/About';
import JadwalGuru from './pages/JadwalGuru';
import DetailJadwalGuru from './pages/DetailJadwalGuru';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/start" element={<Start />} />
        <Route path="/pendaftaran/:no_rm_pasien" element={<Pendaftaran />} />
        <Route path="/riwayat_pendaftaran/:no_rm_pasien" element={<RiwayatPendaftaran />} />
        <Route path="/finish/:id" element={<Finish />} />
        <Route path="/about" element={<About />} />
        <Route path="/jadwal_guru" element={<JadwalGuru />} />
        <Route path="/detail_jadwal_guru/:id" element={<DetailJadwalGuru />} />
      </Routes>
      <footer>
        <NavLink to="/" className="iconWrapper">
          <HiHome className="icon" />
          Home
        </NavLink>
        <NavLink to="/about" className="iconWrapper">
          <MdGroup className="icon" />
          About
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;
