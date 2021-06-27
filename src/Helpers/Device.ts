export const getOperatingSystem = () => {
    const identification = navigator.appVersion.toLowerCase();

    if(identification.indexOf('win') !== -1) { return 'Windows OS'; }
    if(identification.indexOf('mac') !== -1) { return 'macOS'; }
    if(identification.indexOf('android') !== -1) { return 'Android OS'; }
    if(identification.indexOf('ios') !== -1) { return 'iOS'; }
    if(identification.indexOf('linux') !== -1) { return 'Linux OS'; }
    if(identification.indexOf('x11') !== -1) { return 'UNIX OS'; }

    return 'Unknown OS';
};

export const getBrowser = () => {
    const identification = navigator.userAgent.toLowerCase();

    if(identification.indexOf('opera') !== -1) { return 'Opera'; }
    if(identification.indexOf('chrome') !== -1) { return 'Chrome'; }
    if(identification.indexOf('safari') !== -1) { return 'Safari'; }
    if(identification.indexOf('firefox') !== -1) { return 'Firefox'; }
    if(identification.indexOf('edge') !== -1) { return 'Edge'; }

    return 'Unknown Browser';
};

export const getPublicIp = async () => {
    const response = await fetch('https://www.cloudflare.com/cdn-cgi/trace');
    const ip = (await response.text()).match(/[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/);

    return ip ? ip[0] : 'Unknown IP';
};