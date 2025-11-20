export const font_face_declarations = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
  
  /* Custom Font Faces */
  @font-face {
    font-family: 'Super Crawler';
    src: url('/fonts/Super Crawler.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Retro Block';
    src: url('/fonts/Retro Block.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Smoky Cloud';
    src: url('/fonts/smokycloud.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Bedane';
    src: url('/fonts/BEDANE.otf') format('opentype'),
         url('/fonts/BEDANE.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Foremost';
    src: url('/fonts/Foremost Regular.otf') format('opentype'),
         url('/fonts/Foremost Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Foremost';
    src: url('/fonts/Foremost Italic.otf') format('opentype'),
         url('/fonts/Foremost Italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Gaseno';
    src: url('/fonts/Gaseno-Normal.otf') format('opentype'),
         url('/fonts/Gaseno-Normal.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Gaseno';
    src: url('/fonts/Gaseno-Bold.otf') format('opentype'),
         url('/fonts/Gaseno-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Gaseno';
    src: url('/fonts/Gaseno-Light.otf') format('opentype'),
         url('/fonts/Gaseno-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Gaseno';
    src: url('/fonts/Gaseno-Rounded.otf') format('opentype'),
         url('/fonts/Gaseno-Rounded.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Gaseno Rounded';
    src: url('/fonts/Gaseno-Rounded.otf') format('opentype'),
         url('/fonts/Gaseno-Rounded.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Gaseno';
    src: url('/fonts/Gaseno-SemiBold.otf') format('opentype'),
         url('/fonts/Gaseno-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
`;

export const global_styles = `
  body { font-family: 'Outfit', sans-serif; }
  .hero-text-transition { transition: opacity 0.15s ease-in-out, transform 0.15s ease; }
  .fade-in { animation: fadeIn 0.5s ease-in-out; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  
  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: #0a0a0a; }
  ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
  ::-webkit-scrollbar-thumb:hover { background: #555; }
`;

