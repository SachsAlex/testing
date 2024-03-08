const axios = require("axios");
const Quiz = require("./Quiz");

const Fragen = {
  Fragen: [
    {
      Frage: "Warum hat der Informatiker immer eine Jacke dabei?",
      Antwort: "Weil er immer kalt gelötet ist.",
      Frage_key: "frage_1",
    },
    {
      Frage: "Warum haben Programmierer keine Zeit für einen Haarschnitt?",
      Antwort: "Weil sie sich ständig im Code verheddern.",
      Frage_key: "frage_2",
    },
    {
      Frage: "Warum war der Computer krank?",
      Antwort: "Weil er einen Virus hatte.",
      Frage_key: "frage_3",
    },
    {
      Frage: "Was sagt ein Informatiker, wenn er das Haus verlässt?",
      Antwort: "Logout.",
      Frage_key: "frage_4",
    },
    {
      Frage: "Warum wurde die Website verhaftet?",
      Antwort: "Sie hatte zu viele Back-End-Probleme.",
      Frage_key: "frage_5",
    },
  ],
};

describe("Testing isRightSolutionForQuestion", () => {
  // Abfrage ob Inhalt in question
  // Quiz.js Zeile 1
  test("Teste Inhalt von question", () => {
    const question = Fragen;
    console.log("Inhalte von funktion: " + question);
  });

  // einzelne Fragen abfragen
  // Quiz.js Zeile 32
  test("Abfrage einer Frage mit Frage_key", () => {
    const questionKey = "frage_2";
    const question = Fragen.Fragen.find(
      (item) => item.Frage_key === questionKey
    );
    console.log("Frage mit Frage_key 2: " + question);
  });

  // ReferenceError mit falschen questionKey bestätigen -> .failing bestätigt Fehlerausgabe
  // Quiz.js Zeile 34
  test.failing("Abfrage einer Frage mit falschen Frage_key", () => {
    const questionKey = "frage_9";
    const question = Fragen.Fragen.find(
      (item) => item.Frage_key === questionKey
    );
    if (!question) throw ReferenceError("No such question");
  });

  // TypeError mit falschem answer-Type bestätigen -> .failing bestätigt Fehlerausgabe
  // Quiz.js Zeile 35 - 36
  test.failing("Abfrage einer Frage mit falschen Frage_key", () => {
    const answer = 3;
    if (typeof answer !== "string")
      throw TypeError("Answer can only be a string");
  });

  // Antwortkontrolle -> true
  // Quiz.js Zeile 38-39
  test("Abfrage einer Frage mit richtiger Antwort", () => {
    const questionKey = "frage_2";
    const question = Fragen.Fragen.find(
      (item) => item.Frage_key === questionKey
    );
    const answer = "Weil sie sich ständig im Code verheddern.";
    if (answer === question.Antwort) {
      return console.log("Antwort stimmt überein");
    }
  });

  // Antwortkontrolle -> false
  // Quiz.js Zeile 41
  test("Abfrage einer Frage mit falschen Antwort", () => {
    const questionKey = "frage_2";
    const question = Fragen.Fragen.find(
      (item) => item.Frage_key === questionKey
    );
    const answer = "Hello World.";
    if (answer !== question.Antwort) {
      return console.log("Antwort stimmt nicht überein");
    }
  });
});
