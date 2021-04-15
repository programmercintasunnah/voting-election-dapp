import React, { useEffect, useState } from "react";

const Aroosah = () => {
  const [status, setstatus] = useState(false);

  const [lulus, setlulus] = useState(false);
  const [mampu, setmampu] = useState(false);
  const [siapmental, setsiapmental] = useState(false);

  const [lanjut, setlanjut] = useState(false);

  const [cari, setcari] = useState(false);
  const [taaruf, settaaruf] = useState(false);
  const [kriteria, setkriteria] = useState(false);
  const [mintaizinkerumah, setmintaizinkerumah] = useState(false);
  const [lamaran, setlamaran] = useState(false);

  useEffect(() => {
    if (lulus) {
      setmampu(true);
      if (mampu) {
        setsiapmental(true);
        if (siapmental) {
          setlanjut(true);
        } else {
          setstatus("siapkan mental dulu");
        }
      } else {
        setstatus("perbanyak puasa......");
      }
    } else {
      setstatus("semangat skripsi dan perbanyak puasa");
    }

    if (lanjut) {
      setcari(true);
      if (cari) {
        settaaruf(true);
        if (taaruf) {
          setkriteria(true);
          if (kriteria) {
            setmintaizinkerumah(true);
            if (mintaizinkerumah) {
              setlamaran(true);
              if (lamaran) {
                setstatus("ALHAMDULILLAH");
              } else {
                setstatus("lupakan dan cari yang lain.");
              }
            } else {
              setstatus("ayo cari lagi yang lain");
            }
          } else {
            setstatus("cari yang sesuai kriteria dulu");
          }
        } else {
          setstatus("cari yang lain");
        }
      } else {
        setstatus("proses mencari . . . .");
      }
    }
    console.log(status);
  });

  return <div>{status}</div>;
};

export default Aroosah;
