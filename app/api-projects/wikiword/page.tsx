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

  const onEnter = (e: any) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
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
          onKeyUp={onEnter}
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
          {isData[0].phonetic && (
            <p className="phonetic">{isData[0].phonetic}</p>
          )}
          <div className="data">
            {isData[0].meanings.map((meaning, id) => (
              <div key={id} className="card">
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

      {["sahil", "Sahil"].includes(isWord) && (
        <div className="ifSahil">
          <div className="text">
            <h3>{isWord}</h3>
            <button
              onClick={() => {
                handleSpeak("sah HILL");
              }}
            >
              <FaPlay />
            </button>
          </div>
          <p className="phonetic">Sa·hel</p>
          <div className="data">
            <p className="meaning">meaning:</p>
            <p className="meanind-data">
              Sahil is an Arabic name for boys that means “shore”, “rive bank”,
              “beach”, “coastline”, “coast”.
            </p>
          </div>
          <div className="data">
            <p className="partOfSpeech">alternative</p>
            <p className="meaning">meaning:</p>
            <p className="meanind-data">
              He is a person who loves to take pictures and make things look
              pretty. He is also a developer with a passion for front-end
              development and design.
            </p>
          </div>
          <div className="data">
            <p className="partOfSpeech">alternative</p>
            <p className="meaning">meaning:</p>
            <p className="meanind-data">
              He is not only a photographer, but also a brand designer and
              front-end developer. He loves to work on projects that have a
              strong visual identity and he believes that the best way to
              communicate with people is through imagery.
            </p>
          </div>
          <div className="data">
            <p className="partOfSpeech">alternative</p>
            <p className="meaning">meaning:</p>
            <p className="meanind-data">
              Sahil is an individual who excels in the realm of web development
              and design. With a keen eye for aesthetics and a deep
              understanding of technical intricacies, he crafts web applications
              that are not only visually stunning but also functionally robust.
              <br />
              His expertise lies in front-end development, where he applies his
              design skills to create user interfaces that are intuitive,
              responsive, and engaging.
              <br />A true professional, Sahil combines creativity with
              technical proficiency to deliver digital solutions that elevate
              user experiences.
            </p>
          </div>

          <p className="source-link">
            Source:{" "}
            <Link href="https://www.sahilsatpute.in/">
              https://www.sahilsatpute.in/
            </Link>
          </p>
        </div>
      )}

      {isError && !["sahil", "Sahil"].includes(isWord) && (
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
