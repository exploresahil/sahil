"use client";

import "./qrCode.scss";
import { Suspense, useState } from "react";
import { ReactSVG } from "react-svg";
import FileSaver from "file-saver";
import { IoMdCreate } from "react-icons/io";
import { FaArrowsRotate } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineDownload } from "react-icons/hi";

import blurQr from "@/public/assets/images/load-loading.gif";

const page = () => {
  const [url, setUrl] = useState("");
  const [qrCodeUrlJpg, setQrCodeUrlJpg] = useState("");
  const [qrCodeUrlSvg, setQrCodeUrlSvg] = useState("");
  const [loading, setLoading] = useState(false);

  const generateQRCode: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setQrCodeUrlJpg(
        `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
          url
        )}&amp;size=400x400&format=jpeg`
      );
      setQrCodeUrlSvg(
        `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
          url
        )}&amp;size=400x400&format=svg`
      );
      setLoading(false);
    }, 500);
  };

  const onEnter = (e: any) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
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
          onKeyUp={onEnter}
        />
        <button type="submit">
          {loading ? <FaArrowsRotate className="loading" /> : <IoMdCreate />}
        </button>
      </form>

      <div className="qr-container">
        {loading ? (
          <FaArrowsRotate className="loading" />
        ) : qrCodeUrlJpg ? (
          <div className="qr-code-container">
            <div className="img-container">
              <Image
                src={qrCodeUrlJpg}
                alt={url}
                width={1000}
                height={1000}
                loading="lazy"
              />
            </div>
            <div className="button-container">
              <button
                type="button"
                onClick={() => {
                  FileSaver.saveAs(`${qrCodeUrlJpg}`, `${url}.jpg`);
                }}
              >
                jpg <HiOutlineDownload />
              </button>

              <button
                type="button"
                onClick={() => {
                  FileSaver.saveAs(`${qrCodeUrlSvg}`, `${url}.svg`);
                }}
              >
                svg <HiOutlineDownload />
              </button>
            </div>

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
