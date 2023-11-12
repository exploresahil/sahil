"use client";

import "./qrCode.scss";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import FileSaver from "file-saver";
import { IoMdCreate } from "react-icons/io";
import { FaArrowsRotate } from "react-icons/fa6";
import Link from "next/link";

const page = () => {
  const [url, setUrl] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const generateQRCode: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setQrCodeUrl(
        `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
          url
        )}&amp;size=400x400&format=svg`
      );
      setLoading(false);
    }, 500);
  };

  return (
    <section id="qrCode">
      <h2>QrCoader </h2>
      <form onSubmit={generateQRCode}>
        <input
          type="text"
          placeholder="Enter a URL/Email/Mobile"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">
          {loading ? <FaArrowsRotate className="loading" /> : <IoMdCreate />}
        </button>
      </form>

      <div className="qr-container">
        {loading ? (
          <FaArrowsRotate className="loading" />
        ) : qrCodeUrl ? (
          <div className="qr-code-container">
            <ReactSVG src={qrCodeUrl} />
            <button
              type="button"
              onClick={() => {
                FileSaver.saveAs(`${qrCodeUrl}`, `${url}.svg`);
              }}
            >
              Download
            </button>
            <p>
              source:{" "}
              <Link href="https://goqr.me/api/" target="_blank">
                https://goqr.me/api/
              </Link>
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default page;
