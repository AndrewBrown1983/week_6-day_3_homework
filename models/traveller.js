const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation)
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation)
};

Traveller.prototype.getModesOfTransport = function () {
  return this.journeys.map(journey => journey.transport)
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport )
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const travelled = this.journeys.reduce((running_total, journey) =>
  {return running_total + journey.distance}
,0);
return travelled
}

Traveller.prototype.getUniqueModesOfTransport = function () {
  TransportArray = this.journeys.map(journey => journey.transport);
  filteredArray = TransportArray.filter((item, pos) => {
    return TransportArray.indexOf(item) === pos;
  })
  return filteredArray
};


module.exports = Traveller;
