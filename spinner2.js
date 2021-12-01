// this string is the animation. no spaces btw because makes animation janky.
const animation = "\r|\r/\r-\r\\\r|\r/\r-\r\\\r|\n";
let x = 0;
for (const char of animation) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, x)
  x += 150;
}