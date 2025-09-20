// const content  = document.querySelector("#content")
// const url = './data.json'
// const hitAPI = async (url) => {
//   const api = await fetch(url)
//   const data = await api.json()
//   return data
// }

// document.addEventListener('DOMContentLoaded', 
//   async () => {
//   let result = await hitAPI(url)
//   console.log(result)
//   let dataHTML = "<ul>"
//     result.data.forEach(e => {
//       dataHTML += `
//         <li>
//           <p>Nama : ${e.Nama}</p>
//           <p>Kelas : ${e.Kelas}</p>
//           <p>Umur : ${e.Umur}</p>
//         </li>`;
//     })
//   // console.log(data)
//   dataHTML += "</ul>"
//   content.innerHTML = dataHTML
// })

// url = "https://kitsu.io/api/edge/anime?filter[categories]=adventure"
// document.addEventListener('DOMContentLoaded', async () => {
//   let data = await hitAPI(url);
//   data = data.data
//   console.log(data)
//   let teks = '<ul class="movie">'
//   data.forEach(element => {
//     let attr = element.attributes
//     teks += `<li> <h3>${attr.titles.en}</h3>`;
//     teks += `<img src="${attr.posterImage.tiny}"><br>`
//     teks += `<a href="https://youtu.be/watch?v=${attr.youtubeVideoId}"
//     target=_black">Link Youtube</a>`;
//   });
//   teks += '</ul>'
//   content.innerHTML = teks
// })

const content = document.querySelector('#content')
const url = 'https://kitsu.io/api/edge/anime?filter[categories]=adventure'

const hitAPI = async(url) => {
    const api = await fetch(url)
    const data = await api.json(url)
    return data
}

document.addEventListener('DOMContentLoaded', async() => {
    let data = await hitAPI(url)
    data = data.data
    let teks = '<ul class ="movie">'
        data.forEach(element => {
            let attr = element.attributes
            teks += `<li> <h3>${attr.titles.en}</h3>`;
            teks += `<img src="${attr.posterImage.tiny}"><br>`
            teks += `<a href="https://youtu.be/watch?v=${attr.youtubeVideoId}"
            target="_blank">Link Youtube</a>`;
        });
        teks+= '</ul>'
        content.innerHTML = teks
})