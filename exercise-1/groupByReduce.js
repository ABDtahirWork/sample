const array = [
  { id: 1, name: 'Bilal', city: 'Lahore' },
  { id: 1, name: 'Bilal', city: 'Lahore' },
  { id: 3, name: 'Hafsa', city: 'Karachi' },
  { id: 4, name: 'Rehan', city: 'Lahore' },
  { id: 5, name: 'Saqib', city: 'Karachi' },
  { id: 6, name: 'Farhan', city: 'Islamabad' },
]

function groupBy(persons, key) {
  const groupedObj = persons.reduce(function (group, element) {
    if (!group[element[key]]) {
      group[element[key]] = []
    }
    group[element[key]].push(element)
    return group
  }, {})

  return groupedObj
}

const groupedCities = groupBy(array, 'city')
console.log(groupedCities)
