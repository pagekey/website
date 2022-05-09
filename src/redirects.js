// Leaving this as an example.. the real mapping here got too complicated for me to simply map it
// let docsPaths = [
//     '/docs/',
//     '/docs/ftp/',
//     '/docs/pfl/',
//     '/docs/pkos',
//     '/docs/pkos/os1',
//     '/docs/pkos/os2',
//     '/docs/pkos/os3',
//     '/docs/pkos/os4',
//     '/docs/pkos/os5',
//     '/docs/pkos/os6',
//     '/docs/pkos/os7',
//     '/docs/pkos/os8',
//     '/docs/pkos/os9',
//     '/docs/pkos/os10',
//     '/docs/pkos/os11',
//     '/docs/pkos/os12',
//     '/docs/pkos/os13',
//     '/docs/pkos/os14',
// ].map(path => {
//     return {from: [path], to: path.replace('/docs', '/projects')};
// });
let redirects = [
    // One-off redirects here
    { from: ['/docs/ftp'], to: '/projects/ftp' },
    { from: ['/docs/ftp/get-your-feet-wet'], to: '/projects/ftp/1' },
    { from: ['/docs/pfl'], to: '/projects/pfl/' },
    { from: ['/docs/pfl/initial-setup'], to: '/projects/pfl/1' },
    { from: ['/docs/pkos'], to: '/projects/pkos/' },
    { from: ['/docs/pkos/os1'], to: '/projects/pkos/1' },
    { from: ['/docs/pkos/os2'], to: '/projects/pkos/2' },
    { from: ['/docs/pkos/os3'], to: '/projects/pkos/3' },
    { from: ['/docs/pkos/os4'], to: '/projects/pkos/4' },
    { from: ['/docs/pkos/os5'], to: '/projects/pkos/5' },
    { from: ['/docs/pkos/os6'], to: '/projects/pkos/6' },
    { from: ['/docs/pkos/os7'], to: '/projects/pkos/7' },
    { from: ['/docs/pkos/os8'], to: '/projects/pkos/8' },
    { from: ['/docs/pkos/os9'], to: '/projects/pkos/9' },
    { from: ['/docs/pkos/os10'], to: '/projects/pkos/10' },
    { from: ['/docs/pkos/os11'], to: '/projects/pkos/11' },
    { from: ['/docs/pkos/os12'], to: '/projects/pkos/12' },
    { from: ['/docs/pkos/os13'], to: '/projects/pkos/13' },
    { from: ['/docs/pkos/os14'], to: '/projects/pkos/14' },
]; //.concat(docsPaths);

module.exports = redirects;