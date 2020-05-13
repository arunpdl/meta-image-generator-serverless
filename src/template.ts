function getCss() {
    return `
    body {
        color: #fff;
        font-family: "Open Sans";
        background-color: #fff;
      }
      
      .banner {
        padding: 6em 0 8em 0;
        text-align: center;
        width: 100%;
        background: #f0c27b; /* fallback for old browsers */
        background: -webkit-linear-gradient(
          to right,
          #4b1248,
          #f0c27b
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
          to right,
          #4b1248,
          #f0c27b
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      
        box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
      }
      
      .border {
        width: 90%;
        margin: 0 auto;
        height: 50px;
        border: 2px solid #fff;
        border-bottom: 0;
      }
      .title {
        margin: 0;
        font-size: 3em;
        color: #ffffff;
        text-align: center;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 0.5em;
        padding: 0.5em 0 0 0;
      }
      
      .author {
        color: #ffffff;
        font-size: 1.2em;
        font-weight: bold;
        margin: 1em 0 0 0;
        line-height: 2em;
        letter-spacing: 2px;
        padding: 0 0 2em 0;
      }
      
      .logo {
        border-radius: 50%;
        height: 50px;
      }
      
      .site {
        color: #ffffff;
        font-size: 1em;
        font-weight: bold;
        line-height: 2em;
        letter-spacing: 2px;
      }
      
      .border-bottom {
        border-top: 0;
        border-bottom: 2px solid #fff !important;
      }
      
    `;
};

export const getHtml = (parsedReqs: ParsedReqs) => {
    const { author, title, website, image } = parsedReqs;

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
    ${getCss()}
  </style>
</head>
<body>
<div class="banner">
<div class="border"> </div>
<h2 class="title">${title}</h2>
<p class="author">${author}</span></p>
  <img class="logo" src="${image}" alt="icon" />
<p class="site">${website}</p>
<div class="border border-bottom"> </div>
</div>
</body>
</html>    
    `;
};
