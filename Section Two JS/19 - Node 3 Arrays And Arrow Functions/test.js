function outputForecast(forecast) {
    for (const [day, values] of Object.entries(forecast)) {
      const low = values[0];
      const high = values[1];
      const description = values[2];
      console.log(`Forecast for ${day}: Low of ${low} and high of ${high}, ${description}.`);
    }
  }
  
  const forecast = {
    Monday: [20, 10, "Cloudy"],
    Tuesday: [30, 11, "Sunny"],
    Wednesday: [26, 15, "Sunny"],
    Thursday: [30, 18, "Cloudy"],
    Friday: [30, 20, "Rain"],
    Saturday: [29, 13, "Rain"],
    Sunday: [25, 11, "Cloudy"]
  };
  
  outputForecast(forecast);