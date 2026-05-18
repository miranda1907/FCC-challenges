function mongoIdToDate(id) {

  const parsedTime = parseInt(id.slice(0,8),16);
  console.log(parsedTime)

  return new Date(parsedTime * 1000).toISOString();
}

console.log(mongoIdToDate("6a094b50bcf86cd799439011"))