export const showTimer = time => {
  const minutes = Math.floor(time / 60);
  const remainingSeconds = time - minutes * 60;
  let watch = '';
  if (remainingSeconds >= 0 && remainingSeconds < 10) {
    watch = `${minutes}:0${remainingSeconds}`;
  } else {
    watch = `${minutes}:${remainingSeconds}`;
  }
  return watch;
};

const shuffleArray = array => {
  return array.sort(() => 0.5 - Math.random());
};

export const generateCards = count => {
  let id = 0;
  var arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(i);
  }
  var result = arr.reduce((acc, value) => {
    acc.push({
      id: id++,
      value,
    });
    acc.push({
      id: id++,
      value,
    });
    return acc;
  }, []);

  return shuffleArray(result);
};
