function randomThermometer(minimum, maximim) {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximim);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getContainers() {
  return {
    pilsner: randomThermometer(-3, -7),
    ipa: randomThermometer(-4, -7),
    larger: randomThermometer(-3, -8),
    stout: randomThermometer(-5, -9),
    wheatBeer: randomThermometer(-2, -5),
    paleAle: randomThermometer(-3, -7),
  };
}

function Containers(app) {
  setInterval(() => {
    const containers = getContainers();
    app.get('io').emit('containers', containers);
  }, 5000);
}

function getAll(req, res, app) {
  const containers = getContainers();
  app.get('io').emit('containers', containers);
  Containers(app);
  res.status(200).send(containers);
}

module.exports = { getAll };
