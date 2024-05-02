window.addEventListener('DOMContentLoaded', () => {
  const webview = document.getElementById('webview'),
    showTeamsButton = document.querySelector('button'),
    teamColumns = document.querySelectorAll('span')

  webview.addEventListener('dom-ready', () => {
    webview.executeJavaScript(getTeams.toString())
  })

  showTeamsButton.addEventListener('click', () => {
    webview.executeJavaScript(`getTeams()`, true)
      .then((result = {
        team1_name: '',
        team2_name: '',
        team1_score: '',
        team2_score: ''
      }) => {
        teamColumns[0].innerText = 'Команда1: ' + result.team1_name
        teamColumns[2].innerText = 'Команда2: ' + result.team2_name
        teamColumns[1].innerText = 'Счет1: ' + result.team1_score
        teamColumns[3].innerText = 'Счет2: ' + result.team2_score
      })
  })
})

// возвращает данные для задачи 1 и можно использовать console.log(getTeams()), чтобы вывести в консоль разработчика
function getTeams() {
  const topCol = document.querySelectorAll('.column__t1--WCEcc')
  const bottomCol = document.querySelectorAll('.column__t2--rn4_E')
  if (topCol.length) {
    return {
      'team1_name': topCol[0].innerText,
      'team2_name': bottomCol[0].innerText,
      'team1_score': topCol[1].innerText,
      'team2_score': bottomCol[1].innerText
    }
  }
}