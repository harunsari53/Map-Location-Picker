export const getAddressFromPoint = (
  lon: number,
  lat: number,
  onSuccsess: (value: any) => void,
) => {
  const URL = 'https://api.openrouteservice.org/geocode/reverse?';
  const API_KEY = '5b3ce3597851110001cf6248610d1b745e9b4590be73354c49ce4b4b';
  var request = new XMLHttpRequest();

  request.open(
    'GET',
    URL + `api_key=${API_KEY}&point.lon=${lon}&point.lat=${lat}`,
  );

  request.setRequestHeader(
    'Accept',
    'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8',
  );

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      onSuccsess(JSON.parse(this.responseText));
    }
  };

  request.send();
};
