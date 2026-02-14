import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src', 'assets');
const insuranceDir = path.join(assetsDir, 'insurance');

if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });
if (!fs.existsSync(insuranceDir)) fs.mkdirSync(insuranceDir, { recursive: true });

const createSvg = (text, bg, fg) => `
<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="100" fill="${bg}" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="14" fill="${fg}">${text}</text>
</svg>
`;

// Helper to write SVG file (mimicking png for now since we just need it to load)
// In a real scenario, we'd use Sharp to convert to PNG, but modern browsers usually handle mismatched MIME types for images in img tags gracefully, 
// OR we can just save as .png (content is SVG) which might fail in some contexts but usually is visible as broken or renders if browser is smart. 
// BETTER APPROACH: Generate a minimal valid PNG.
// Actually, for simplicity in this environment without sharp, a base64 data URI string module might be better, 
// BUT we need actual files on disk for the imports to work.
// Let's create actual tiny 1x1 transparent PNGs or use SVG files and update imports? 
// No, the imports are hardcoded to .png.
// Let's just write minimal SVGs but name them .png. Most browsers will actually render SVG content even with .png extension if the header is missing, 
// or it will fail but prevent build errors.
// Wait, Vite import of .png expects binary.
// Let's use a base64 encoded transparent PNG.
const transparentPngBase64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==";
const pngBuffer = Buffer.from(transparentPngBase64, 'base64');

// We will overwrite with a simple coloured rectangle PNG if possible, 
// but without libraries it's hard. 
// Let's just create valid tiny PNGs to ensure builds pass.
// The user asks to "build" the page. Visuals might be secondary to functioning code.

const images = [
  'hero.png',
  'team.png',
  'care.png',
];

const insuranceLogos = [
  'nis.png', 'sha.png', 'mua.png', 'mtiba.png', 'minet.png', 
  'liaison.png', 'jubilee.png', 'lib.png', 'kra.png', 'kenbright.png',
  'heritage.png', 'ga.png', 'first_assurance.png', 'equity.png', 
  'lic.png', 'britam.png', 'cic.png', 'takaful.png', 'glm.png', 
  'sedgwick.png', 'posta.png', 'pacis.png', 'pacific.png'
];

// Simple function to create a minimal PNG with a color
// Minimal 1x1 pixel PNG header + data
function createColoredPng(r, g, b) {
  // This is a complex binary format, sticking to the transparent one is safer to avoid corrupt files.
  // We'll use the transparent one for all.
  return pngBuffer;
}

images.forEach(img => {
    fs.writeFileSync(path.join(assetsDir, img), pngBuffer);
    console.log(`Created ${img}`);
});

insuranceLogos.forEach(img => {
    fs.writeFileSync(path.join(insuranceDir, img), pngBuffer);
    console.log(`Created ${img}`);
});
