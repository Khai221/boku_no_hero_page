document.addEventListener('DOMContentLoaded', function () {
const buttons = document.querySelectorAll('.contentpage__text--button');
const videos = document.querySelectorAll('.contentpage__video--contents')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');




        videos.forEach(video => video.classList.remove('show'));
        
        const videoId = button.getAttribute('content-id');
        document.getElementById(videoId).classList.add('show');
    })
})


})
