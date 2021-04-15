import React, { useState, useEffect } from "react";

const CariJodoh = () => {
  const [status, setstatus] = useState("-");

  const [lulus, setlulus] = useState(false);
  const [mampu, setmampu] = useState(false);
  const [siapmental, setsiapmental] = useState(false);

  const [cari, setcari] = useState(false);
  const [taaruf, settaaruf] = useState(false);
  const [kriteria, setkriteria] = useState(false);
  const [mintaizinkerumah, setmintaizinkerumah] = useState(false);
  const [lamaran, setlamaran] = useState(false);

  useEffect(() => {
    if (lulus) {
      if (mampu) {
        if (siapmental) {
          setcari(true);
        } else {
          setstatus("siapkan lah mental duluuuuu......... ");
        }
      } else {
        setstatus("perbanyak puasa.......... ");
      }
    } else {
      setstatus("lulus dulu lah......... ");
    }

    if (cari) {
      if (taaruf) {
        if (kriteria) {
          if (mintaizinkerumah) {
            if (lamaran) {
              setstatus("ALHAMDULILLAH ......... ");
            } else {
              setstatus("moveon dan cari yg lain......... ");
            }
          } else {
            setstatus("cari yg lain......... ");
          }
        } else {
          setstatus("cari yg lain......... ");
        }
      } else {
        setstatus("cari yg lain......... ");
      }
    } else {
      setstatus("cari yg lain......... ");
    }
  });

  return <div>{status}</div>;
};

export default CariJodoh;
