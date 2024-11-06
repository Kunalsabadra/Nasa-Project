const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "Chandrayan-1",
  rocket: "Dr-Abdul-Kalam",
  launchDate: new Date("August 7,2030"),
  destination: "Keler-42-b",
  customer: ["ISRO", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

module.exports = {
  launches,
};
