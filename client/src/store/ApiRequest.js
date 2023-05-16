const ApiRequest = async (url, options) => {
  try {
    const response = await fetch(url, options);
    return response;
  } catch (err) {
    if (err) throw Error("Please reload the app.");
  }
};

export default ApiRequest;
