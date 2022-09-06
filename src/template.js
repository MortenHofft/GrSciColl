export default ({ body, title, initialState }) =>
  `
    <!DOCTYPE html>
    <html>
      <head>
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />
        <link href='https://cdnjs.cloudflare.com/ajax/libs/openlayers/6.1.1/ol.min.css' rel='stylesheet' />
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <title>${title}</title>
      </head>
      
      <body>
        <div id="root">${body}</div>
      </body>
      
      <script src="/scripts/bundle.js"></script>
    </html>
  `;
