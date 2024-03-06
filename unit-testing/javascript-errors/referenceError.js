// Folgender Code wirft einen ReferenceError

try {
  meineLieblingsFunktion();
} catch (error) {
  console.error("Mistakes were made", error);
} finally {
  console.log("Fix your code");
}
