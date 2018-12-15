$(document).ready(async function() {
  $('.Pdownload').html((await getString("tab.installed.instructions.download")).replace("{{github_link}}", '<a target="_blank" href="https://github.com/Timeraa/PreMiD/releases/latest">' + await getString("tab.installed.instructions.github") + '</a>'))
  $('.PlikeThisProject').html((await getString("tab.installed.likeThisProject")).replace("{{github_link}}", '<a target="_blank" href="https://github.com/Timeraa/PreMiD">GitHub</a>'))
})