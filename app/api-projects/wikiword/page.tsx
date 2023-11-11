"use client";

import "./style.scss";
import { useState } from "react";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";

interface WordData {
  id: number;
  word: string;
  phonetic: string;
  sourceUrls: string[];
  meanings: {
    id: number;
    partOfSpeech: string;
    definitions: { id: number; definition: string }[];
    synonyms: string[];
  }[];
}

const page = () => {
  const [isData, setIsData] = useState<WordData[]>([]);
  const [isError, setIsError] = useState(false);
  const [isWord, setWord] = useState("");

  const searchQuery: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    setIsError(false);
    await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${isWord}`
    ).then(async (response) => {
      if (response.ok) setIsData(await response.json());
      else setIsError(true);
    });
  };

  const handleSpeak = (e: string) => {
    const speaking = new SpeechSynthesisUtterance(e);
    speechSynthesis.speak(speaking);
  };

  return (
    <section id="wikiword">
      <h2>WikiWord</h2>
      <form onSubmit={searchQuery}>
        <input
          type="text"
          placeholder="Search for any word"
          name="search"
          id="search"
          value={isWord}
          onChange={(e) => setWord(e.target.value)}
        />
        <button type="submit">
          <BiSearch />
        </button>
      </form>

      {!isError && isData.length !== 0 && (
        <div className="data-container">
          <div className="word-container">
            <div className="text">
              <h3>{isData[0].word}</h3>
              <button
                onClick={() => {
                  handleSpeak(isData[0].word);
                }}
              >
                <FaPlay />
              </button>
            </div>
          </div>

          <div className="data">
            {isData[0].phonetic && (
              <p className="phonetic">{isData[0].phonetic}</p>
            )}
            {isData[0].meanings.map((meaning, id) => (
              <div key={id}>
                <p className="partOfSpeech">{meaning.partOfSpeech}</p>
                <p className="meaning">meaning:</p>
                <p className="meanind-data">
                  {meaning.definitions[0].definition}
                </p>
                <>
                  {meaning.synonyms.length !== 0 && (
                    <p className="symonym">symonym: {meaning.synonyms[0]}</p>
                  )}
                </>
              </div>
            ))}
          </div>
          <p className="source-link">
            Source:{" "}
            <Link href={isData[0].sourceUrls[0]}>
              {isData[0].sourceUrls[0]}
            </Link>
          </p>
        </div>
      )}

      {isError && (
        <div className="not-found">
          <p>No Definitions Found</p>
          <p>
            Sorry pal, we couldn't find definitions for the word you were
            looking for.
          </p>
          <p>
            You can try the search again at later time or head to the web
            instead.
          </p>
        </div>
      )}
    </section>
  );
};

export default page;
