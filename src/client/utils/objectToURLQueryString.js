export default function objectToURLQueryString(obj) {
  let query = '';
  const ownPropertyNames = Object.getOwnPropertyNames(obj);

  for (let i = 0; i < ownPropertyNames.length; i++) {
    let tmpPropValue;
    // Test if it is a string that contains whitespaces
    if (typeof obj[ownPropertyNames[i]] === 'string') {
      tmpPropValue = obj[ownPropertyNames[i]].replace(' ', '+');
    } else {
      tmpPropValue = obj[ownPropertyNames[i]];
    }

    query += `${ownPropertyNames[i]}=${tmpPropValue}`;
    query += i < ownPropertyNames.length - 1 ? '&' : '';
  }

  return query;
}
