/* eslint-env browser */
const form = document.createElement('form')
const input = document.createElement('input')
input.required = true

input.type = 'number'
form.appendChild(input)
form.addEventListener('submit', async e => {
  e.preventDefault()
  if (document.querySelectorAll('p').length < 1) {
    let code = true
    const dialog = document.createElement('p')
    switch (+input.value) {
    case 0:
      dialog.innerHTML = 'I don’t want to troll you, I only want to give you something beautiful: <a href="https://youtu.be/NAh9oLs67Cw">https://youtu.be/NAh9oLs67Cw</a>'
      break
    case 420:
      dialog.innerText = 'Yuo see it is funny becaus drug!'

      break

    case 6969:
      dialog.innerText = 'You’re not funny, troll denied!'

      break
    case 1337:
      dialog.innerText = `
          You are the hackerman. You hack all the places!! You hack your moms iphone (You see all her secret messages!!) you hack brother computer (He watches porno!!!!) you hack your microwave (send radiation death ray) you hack your fridge (Freeze ray to troll people!!)

          Because of all of this and more, you are da hackerman...`

      break
    case 7851:
      dialog.innerText = '@Raymond Weiner'
      break
    case 1234:
      dialog.innerText = `5 6 7 8 9 10 11 12...

Listen mf if you want to start counting go somewhere else!`
      break
    case 100087628818818818181818: // What the fuck
      dialog.innerText = `
        A Three-Generation Legacy
        The Sequential Pro 1 and Pro 2 mono synths achieved nearly legendary status in their time. So it was only natural that we build on their strengths with an even more worthy successor. Enter the Pro 3, Sequential’s 2-VCO + wavetable mono/paraphonic synth — a new benchmark for raw sonic power and unrivalled versatility.

        The Power of 3
        The Pro 3 boasts three oscillators, three vintage filters, three LFOs, four loopable envelopes, a massive 32-slot mod matrix, and a 16 x 16 x 4 sequencer. Throw in dual digital effects and four control voltage ins and outs, and you’ve got a hugely powerful instrument that’s as exciting to program as it is to play.`
      break
    case 12:
      dialog.innerText = `${await fetch('https://ipv4.apimon.de').then(res => res.text())} wants to fuck 12 year olds girls, arrest them immediately!`
      break
    default:
      code = false
      input.animate([
        { left: 0 },
        { left: '-1em' },
        { left: '1em' },
        { left: 0 }
      ], {
        duration: 100
      })
    }
    if (code) {
      document.body.appendChild(dialog)
      setTimeout(dialog.remove.bind(dialog), 5000)
    }
  }
})
document.currentScript.replaceWith(form)
