export function path(path = '') {
    return `${basePath}/${path}`
}

export function apiUrl(path = '', params = null) {
    var url = `${apiBase}/${path}`
    //TODO Add params as query string.
    return url;
}
