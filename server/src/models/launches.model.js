const launches = new Map();
let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Chandrayan-1",
  rocket: "Dr-Abdul-Kalam",
  launchDate: new Date("August 7,2030"),
  target: "Keler-42-b",
  customer: ["ISRO", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customers: ["NASA", "ISRO"],
      flightNumber: latestFlightNumber,
    })
  );
}

module.exports = {
  launches,
  addNewLaunch,
};
