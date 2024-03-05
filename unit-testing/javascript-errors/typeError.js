// Folgender Code wirft einen TypeError

const zahl = 1024;

try {
  zahl.map((item) => {
    console.log(item);
  });
} catch (error) {
  console.log("Mistakes were made");
} finally {
  console.log("Fix your code");
}
