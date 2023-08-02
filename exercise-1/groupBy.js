const array = [
  { id: 1, name: 'Bilal', city: 'Lahore' },
  { id: 1, name: 'Bilal', city: 'Lahore' },
  { id: 3, name: 'Hafsa', city: 'Karachi' },
  { id: 4, name: 'Rehan', city: 'Lahore' },
  { id: 5, name: 'Saqib', city: 'Karachi' },
  { id: 6, name: 'Farhan', city: 'Islamabad' },
]

function groupBy(persons, key) {
  let groupObj = {}

  persons.forEach((element) => {
    if (!groupObj[element[key]]) {
      groupObj[element[key]] = []
    }
    groupObj[element[key]].push(element)
  })

  return groupObj
}

const groupedCities = groupBy(array, 'city')
console.log(groupedCities)
