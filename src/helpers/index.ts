export function crearUrl(texto:string):string {
    const url = texto.trim().replace(/[^a-zA-Z0-9]/g, '-');
    return url.toLowerCase();
  }
  