# Fonts Directory

Place your custom font files in this directory.

## Supported Formats
- `.ttf` (TrueType Font)
- `.otf` (OpenType Font)
- `.woff` (Web Open Font Format)
- `.woff2` (Web Open Font Format 2)

## Usage Example

After adding your font files, you can reference them in your CSS like this:

```css
@font-face {
  font-family: 'YourFontName';
  src: url('/fonts/your-font-file.ttf') format('truetype'),
       url('/fonts/your-font-file.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

Then use it in your styles:
```css
.your-element {
  font-family: 'YourFontName', sans-serif;
}
```

## Notes
- Font files in the `public` folder are served from the root path `/`
- Use `/fonts/` to reference fonts in this directory
- Make sure to check font licensing before using commercial fonts

