import { CargoClient } from 'poro'

const cargo = new CargoClient()

const teams = await cargo.query({
  tables: ['Teams'],
  fields: ['Teams.Name', 'Teams.Region']
})