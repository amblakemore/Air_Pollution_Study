-- CREATE aqi TABLE
DROP TABLE overall_aqi;

CREATE TABLE overall_aqi (
	id SERIAL PRIMARY KEY,
	state_name TEXT,
	county_name TEXT,
	years INT,
	aqi INT
);