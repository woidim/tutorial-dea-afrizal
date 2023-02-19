document.title = 'ganti judul'
const body = document.body

const judul = document.createElement('h1')
judul.innerHTML = 'Bismillah Jadi Programmer'

const isi = document.createElement('p')
isi.innerText = 'Bismillah konsisten'

const pelengkap = document.createElement('article')
pelengkap.textContent = 'bingung mau nulis apa'

body.append(judul)
body.append(isi)
body.append(pelengkap)



//button
const btn1 = document.getElementById('btn1')

const defaultTextbtn1 = 'ini tulisan asli'

btn1.style.border = 'none'
btn1.style.padding = '16px'
btn1.style.fontWeight = '700'
btn1.style.fontSize = '36px'
btn1.style.background = 'blue'

const clickButton = () => {
  btn1.style.background = 'red'
  const salam = document.createElement('h1')
  salam.textContent = 'Halo bro'
  body.append(salam)
}

const mouseIn = () => {
  btn1.textContent = 'Mouse Datang'
}

const mouseOut = () => {
  btn1.textContent = defaultTextbtn1
}

//tugas

//onmouse over muncul tulisan
//onmouse out ganti warna tulisan yang muncul

const btn2 = document.querySelector('btn2')

const defaultTextbtn2 = 'arahkan cursor ke sini'

const namaSaya = 'Dimas Ahmat Husin'

const mouseIn2 = () => {
  const namaSaya = document.createElement('h1')
  namaSaya.innerHTML = 'Dimas Ahmat Husin'
  namaSaya.setAttribute('id', 'namaSaya')
  body.append(namaSaya)
  btn2.textContent = 'Keluarkan cursor'
}

const mouseOut2 = () => {
  document.getElementById('namaSaya').style.color = 'blue'
}