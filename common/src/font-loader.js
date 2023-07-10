import './styles.css'; // Import the CSS file that will reference the font
import customFont from './fonts/Kalam/Kalam-Regular.ttf'; // Import the font file

// Dynamically load the font
const font = new FontFace('CustomFont-Regular', `url(${customFont})`);
font.load().then(() => {
  document.fonts.add(font);
  // Any other code that relies on the font being loaded
});
