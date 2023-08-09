const array = [
  { id: 'three', next: 'null', value: null },
  { id: 'two', next: 'three', value: null },
  { id: 'one', next: 'two', value: null },
]

const findNext = (objects, next) => {
  if (next === 'null') {
    return null
  }

  let nextObj = objects.get(next)
  if (nextObj.value !== null) {
    return nextObj
  }

  if (nextObj.next !== 'null') {
    nextObj.value = findNext(objects, nextObj.next)
  }
  objects.set(nextObj.id, nextObj)
  return nextObj
}

const getArray = (objects) => {
  const idToObject = new Map()
  for (const obj of objects) {
    idToObject.set(obj.id, obj)
  }

  const updatedArray = objects.map((element) => {
    element.value = findNext(idToObject, element.next)
    return element
  })

  console.log(updatedArray)
}

getArray(array)
