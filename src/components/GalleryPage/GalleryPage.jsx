import React from "react";
import ImageGallery from "react-image-gallery";
import style from "./GalleryPage.module.css";

export default function GalleryPage() {
  const images = [
    {
      original:
        "https://phx02pap002files.storage.live.com/y4mTesFfNPxt8tDdahTrUx0AIAf0UA9XYf4WNTR5OwHCJVUsguyutfLmlKCohmazjqTX8zakJWpu9XruDvGe99LTc-wBr7lymZpkXh0s1JQr_CA-gTgU2aPfPo3AQb654DKUg7OVIf3_69EoVo9l-va65PLbzyHWIdajO45l-txRQGRJQ5xYMTxatleI7RBlxfn?width=683&height=1024&cropmode=none",
    },
    {
      original:
        "https://phx02pap002files.storage.live.com/y4mYIIjNY5KIgtbrh0VVlPlDNCQIvHZllvKiwenZQIK2NfEX_KdgCoWtlK1G33c38rE_otAKP_H2KCatZKvZAqO2CQ6GTra_rnke1gPFb14j4JwFMpTYz-P1fp44ETM8xUFhVxP7ayPaQhwiLqzS0t9tR-87Kc7NaMLmq3VHhNx67NmDWgkQx7VadupNyoe71LQ?width=1024&height=683&cropmode=none",
    },
    {
      original:
        "https://phx02pap002files.storage.live.com/y4mposEPQBmEsCQf1bDpCQCGKokzSjelv6b5ZOoNL2ZftcBbcdpGp3X8BC7n6T5xVZ5bgdwNMRFascydrVqHk9bvc5u_r4XEhf7HcYIqHLaCZaXjnxTodLWDBFj8SEK3q03RUsz43ASF-YAkJfq-5ck4ck8laqf5wh1IrHcH0wTjMvVcn44DufvauY1ncWH5THi?width=683&height=1024&cropmode=none",
    },
  ];
  return (
    <div className={style.GalleryPage}>
      <h1>Gallery</h1>
      <ImageGallery items={images} />
    </div>
  );
}
