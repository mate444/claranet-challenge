export function getTimeSince(creationDate: Date): string {
  const currentDate = new Date();

  const timeDifferenceInMilliseconds = currentDate.getTime() - creationDate.getTime();
  const timeDifferenceInSeconds = Math.floor(timeDifferenceInMilliseconds / 1000);
  const timeDifferenceInMinutes = Math.floor(timeDifferenceInSeconds / 60);
  const timeDifferenceInHours = Math.floor(timeDifferenceInMinutes / 60);
  const timeDifferenceInDays = Math.floor(timeDifferenceInHours / 24);
  const timeDifferenceInWeeks = Math.floor(timeDifferenceInDays / 7);
  const timeDifferenceInMonths = Math.floor(timeDifferenceInDays / 30);
  const timeDifferenceInYears = Math.floor(timeDifferenceInDays / 365);

  if (timeDifferenceInYears > 0) {
    return `${timeDifferenceInYears} ${timeDifferenceInYears === 1 ? 'anno' : 'anni'} fa`;
  } else if (timeDifferenceInMonths > 0) {
    return `${timeDifferenceInMonths} ${timeDifferenceInMonths === 1 ? 'mese' : 'mesi'} fa`;
  } else if (timeDifferenceInWeeks > 0) {
    return `${timeDifferenceInWeeks} ${timeDifferenceInWeeks === 1 ? 'settimana' : 'settimane'} fa`;
  } else if (timeDifferenceInDays > 0) {
    return `${timeDifferenceInDays} ${timeDifferenceInDays === 1 ? 'giorno' : 'giorni'} fa`;
  } else {
    return 'oggi';
  }
}
