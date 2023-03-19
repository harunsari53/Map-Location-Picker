export const getAddressWithComplete = (
  searched: string,
  onSuccess: (value: any) => void,
) => {
  var request = new XMLHttpRequest();

  request.open(
    'GET',
    'https://api.openrouteservice.org/geocode/autocomplete?api_key=5b3ce3597851110001cf6248610d1b745e9b4590be73354c49ce4b4b&text=' +
      searched + '&boundary.country=TR',
  );

  request.setRequestHeader(
    'Accept',
    'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8',
  );

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      onSuccess(JSON.parse(this.responseText));
    }
  };

  request.send();
};
