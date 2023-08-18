export class HTTPAdapter {
  async fetch(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error al acceder a ${url}: ${response.statusText}`);
    }
    return await response.json();
  }
}
