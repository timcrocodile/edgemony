const formatImage = (name) => {
  const imgBaseDir = "./img/";
  const imgFormat = ".gif";

  return `${imgBaseDir}${name}${imgFormat}`;
};

const dataSet = {
  personages: {
    warOstrich: {
      walking: formatImage("ostrich-walk"),
      jumping: formatImage("ostrich-jump"),
    },
  },
  enemies: {
    mummy: {
      walking: formatImage("mummy-walk"),
    },
  },
};

export default dataSet;
