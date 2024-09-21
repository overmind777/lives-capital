function ipToNumber(ip) {
  return (
    ip
      .split(".")
      .reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0
  );
}

function numberToIp(num) {
  return [
    (num >>> 24) & 255,
    (num >>> 16) & 255,
    (num >>> 8) & 255,
    num & 255,
  ].join(".");
}

function generateRandomIp(startIp, endIp, usedIps) {
  const startNum = ipToNumber(startIp);
  const endNum = ipToNumber(endIp);

  if (startNum > endNum) {
    throw new Error(
      "Invalid IP range: startIp should be less than or equal to endIp."
    );
  }

  if (usedIps.size >= endNum - startNum + 1) {
    throw new Error("All IP addresses in the range have been used.");
  }

  let randomNum;
  do {
    randomNum = Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;
  } while (usedIps.has(randomNum));

  usedIps.add(randomNum);
  return numberToIp(randomNum);
}

// Створюємо множину для збереження використаних IP
const usedIps = new Set();
const startIp = "192.168.1.1";
const endIp = "192.168.1.255";

// Функція для обробки запитів
function fetchIp(req, res, next) {
  try {
    const randomIp = generateRandomIp(startIp, endIp, usedIps); // Генеруємо нову IP-адресу
    res.status(200).json({
      status: "OK",
      code: 200,
      data: randomIp,
    });
  } catch (error) {
    res.status(500).json({
      status: "ERROR",
      code: 500,
      message: error.message,
    });
  }
  next();
}

export default fetchIp;
