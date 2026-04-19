import { useState, useEffect } from 'react';

// a memory for if loading is in progress
// to avoid double fetching of each resource in strict mode
const inProgress = {};

export default function useFetch(...urls) {

  // create a data array (empty items initially)
  // will get the result for each url eventually
  const [data, setData] = useState(new Array(urls.length));
  // a flag if we are loading or finished
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // if a key consisting of all urls does not exist in inProgress
    // then add fetch + unpack/deserialize fetched data as promises
    // for each url
    inProgress[urls] = inProgress[urls] ||
      urls.map(url => fetch(url).then(response => response.json()));
    (async () => {
      // wait for all fetch+json promises to resolve
      // then set the data array
      setData(await Promise.all(inProgress[urls]));
      // set loading to false
      setLoading(false);
      // delete the urls key in inProgress
      delete inProgress[urls];
    })();
  }, []);
  // return the data + the loading flag as an array
  return [...data, loading];
}