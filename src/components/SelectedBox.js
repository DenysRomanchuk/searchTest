import { React } from 'react'
import './SelectedBox.css'

export const SelectedBox = ({ name, height, mass, hair_color, skin_color, eye_color, birth_year, gender }) => {
    return (
        <div className={'list-item-container'}>
            <div><strong>name:</strong> {name}</div>
            <div><strong>height:</strong> {height}</div>
            <div><strong>mass:</strong> {mass}</div>
            <div><strong>hair color:</strong> {hair_color}</div>
            <div><strong>skin color:</strong> {skin_color}</div>
            <div><strong>eye color:</strong> {eye_color}</div>
            <div><strong>birth year:</strong> {birth_year}</div>
            <div><strong>gender:</strong> {gender}</div>
        </div>
    )
}