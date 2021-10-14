import { Schedule } from "src/interface/schedule";
import { Team } from "src/interface/team";

export const SEASON_SCHEDULE : Schedule [] = [
    {id: 1, PlayingDate: new Date(2021,08,10), HomeTeam: 'Persija',
    AwayTeam: 'Persib', HomeScore:3, AwayScore:4,
    RefName: 'Joko', notes: 'Pertandingan overtime'},
    {id: 2, PlayingDate: new Date(2021,08,11), HomeTeam: 'Persipon',
    AwayTeam: 'RRQ', HomeScore:3, AwayScore:5,
    RefName: 'John', notes: 'Pertandingan undertime'},
    {id: 3, PlayingDate: new Date(2021,08,12), HomeTeam: 'Persi',
    AwayTeam: 'Persis solo', HomeScore:3, AwayScore:1,
    RefName: 'Joko', notes: 'Pertandingannya agak aneh'},
    {id: 4, PlayingDate: new Date(2021,08,13), HomeTeam: 'Evos',
    AwayTeam: 'Persija', HomeScore:3, AwayScore:0,
    RefName: 'Sukasjo', notes: 'Pertandingan dimenangkan persipon'},
    {id: 5, PlayingDate: new Date(2021,08,14), HomeTeam: 'MU',
    AwayTeam: 'Real Madrid', HomeScore:2, AwayScore:4,
    RefName: 'Taufik', notes: 'Pertandingan overtime'},
]

export const TEAMS: Team [] =[
    { id:1, name:'Evos', type:'over 30'},
    { id:2, name:'Persib', type:'over 30'},
    { id:3, name:'Persija', type:'over 30'},
    { id:4, name:'Persipon', type:'over 30'},
    { id:5, name:'Bali United', type:'over 30'},
]