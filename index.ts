import type {Topology} from 'topojson-specification'

import land50mJSON from './dist/50m.json'
export let land50m: Topology = (land50mJSON as any) as Topology

import land110mJSON from './dist/110m.json'
export let land110m: Topology = (land110mJSON as any) as Topology
