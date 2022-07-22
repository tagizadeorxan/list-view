// A mock function to mimic making an async request for data
export function fetchData() {
  return fetch('https://www.dnd5eapi.co/api/spells').then(res => res.json()).then(data => data)
}

export function fetchEachData(index) {
  return fetch(`https://www.dnd5eapi.co/api/spells/${index}`).then(res => res.json()).then(data => data)
}
