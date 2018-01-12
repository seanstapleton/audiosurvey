import loadDB from './db'

// hydrate comments based on an array of item ids
export default async function fetchSurveys() {
   const db = await loadDB()
   const surveys = await db
  .child('surveys')
  .once('value')
  return surveys.val();
}
