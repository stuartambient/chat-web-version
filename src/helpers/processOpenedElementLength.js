export default length => {
  /* console.log("length: ", length); */
  switch (length) {
    case 3: {
      return "450px";
    }
    case 2: {
      return "450px";
    }
    case 1: {
      return "225px";
    }
    case 0: {
      return "150px";
    }
    default:
      return;
  }
};
