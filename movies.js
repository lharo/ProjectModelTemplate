// https://gist.github.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4
import data from "./Film.json" assert {type: "json"};
import * as fs from 'fs';

// console.log('data', data)

let titleArr = []
let yearArr = []
let plotArr = []
let directorArr = []

data.forEach((entry) => {
    titleArr.push(entry.Title)
    yearArr.push(entry.Year)
    plotArr.push(entry.Plot)
    directorArr.push(entry.Director)
})

const getResources = ({title, entries}) => {
    let resources = `
    <string-array name="${title}">`
    
    entries.forEach(value => {
        resources += `
        <item>${value}</item>`
    })
    resources += `
    </string-array>`
    return resources
}

let content = `<?xml version="1.0" encoding="utf-8"?>
<resources>`
content += getResources({title: `title`, entries: titleArr})
content += getResources({title: `year`, entries: yearArr})
content += getResources({title: `plot`, entries: plotArr})
content += getResources({title: `director`, entries: directorArr})
content += "</resources>"

console.log('content', content)

fs.writeFile('./string-resources.xml', content, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log('File created succesfully')
})
  