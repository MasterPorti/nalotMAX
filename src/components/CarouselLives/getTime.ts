export function getTime(hoursToAdd: number): string {
    const date = new Date();
    date.setHours(date.getHours() + hoursToAdd);
    const day = date.getDate().toString().padStart(2, '0');
    const monthNames = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
    const monthIndex = date.getMonth();
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes} | ${day} de ${monthNames[monthIndex]} de ${year}`;
  }
  

