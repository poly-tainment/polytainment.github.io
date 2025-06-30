// load theme

if (!document.getElementById('theme')) {
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'tangerine.css');
    }

    document.head.innerHTML += `<link id='theme' rel="stylesheet" href="/_a/styles/themes/${localStorage.getItem('theme')}" />`;
}
function changeTheme(theme) {
    localStorage.setItem('theme', theme);
    document.getElementById('theme').href = '/_a/styles/themes/' + localStorage.getItem('theme');
}
document.getElementById('themeSelect').value = localStorage.getItem('theme');