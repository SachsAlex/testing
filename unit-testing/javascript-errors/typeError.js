// Folgender Code wirft einen TypeError

const zahl = 1024;

try {
  zahl.map((item) => {
    console.log(item);
  });
} catch (error) {
  console.error("Mistakes were made", error);
} finally {
  console.log("Fix your code");
}
