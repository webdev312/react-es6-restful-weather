import moment from 'moment';


export const kelvinToCelcius = kelvin => {
  if (!kelvin || kelvin < (0)) {
		return '';
	} else {
		return Math.round((kelvin-273.15));
	}
}

export const getDateTime = (UNIX_timestamp, timezone = 0) => {
  return moment(UNIX_timestamp * 1000).utcOffset(timezone / 60).format('LLLL');
}

export const getTime = (UNIX_timestamp, timezone = 0) => {
  return moment(UNIX_timestamp * 1000).utcOffset(timezone / 60).format('hh : mm');
}

export const getShortDate = (UNIX_timestamp, timezone = 0) => {
  return moment(UNIX_timestamp * 1000).utcOffset(timezone / 60).format('MMMM D');
}


export const capitalizeWords = str => {
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}