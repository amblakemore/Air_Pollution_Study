-- Average AQI by state and year
-- 1995
SELECT state_name AS "State", Round(AVG(aqi),2) AS "Average AQI"
FROM overall_aqi
WHERE years = 1995
GROUP BY "State";

-- 2000
SELECT state_name AS "State", Round(AVG(aqi),2) AS "Average AQI"
FROM overall_aqi
WHERE years = 2000
GROUP BY "State";

-- 2005
SELECT state_name AS "State", Round(AVG(aqi),2) AS "Average AQI"
FROM overall_aqi
WHERE years = 2005
GROUP BY "State";

-- 2010
SELECT state_name AS "State", Round(AVG(aqi),2) AS "Average AQI"
FROM overall_aqi
WHERE years = 2010
GROUP BY "State";

-- 2015
SELECT state_name AS "State", Round(AVG(aqi),2) AS "Average AQI"
FROM overall_aqi
WHERE years = 2015
GROUP BY "State";

-- 2020
SELECT state_name AS "State", Round(AVG(aqi),2) AS "Average AQI"
FROM overall_aqi
WHERE years = 2020
GROUP BY "State";

-- Average AQI in California by county
--1995
SELECT county_name AS "County", Round(AVG(aqi),2) AS "Average AQI"
FROM overall_aqi
WHERE state_name = 'California' AND years = 1995
GROUP BY "County";

--2000
SELECT county_name AS "County", Round(AVG(aqi),2) AS "Average AQI"
FROM overall_aqi
WHERE state_name = 'California' AND years = 2000
GROUP BY "County";

--2005
SELECT county_name AS "County", Round(AVG(aqi),2) AS "Average AQI"
FROM overall_aqi
WHERE state_name = 'California' AND years = 2005
GROUP BY "County";

--2010
SELECT county_name AS "County", Round(AVG(aqi),2) AS "Average AQI"
FROM overall_aqi
WHERE state_name = 'California' AND years = 2010
GROUP BY "County";

--2015
SELECT county_name AS "County", Round(AVG(aqi),2) AS "Average AQI"
FROM overall_aqi
WHERE state_name = 'California' AND years = 2015
GROUP BY "County";

--2020
SELECT county_name AS "County", Round(AVG(aqi),2) AS "Average AQI"
FROM overall_aqi
WHERE state_name = 'California' AND years = 2020
GROUP BY "County";