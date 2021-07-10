import styled from 'styled-components'
import {Link} from 'react-router-dom'



export const Container = styled.h1`
    width: 100%;
    margin: 0 auto;
    max-width: 991px;

`
export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
`

export const List = styled.ul`
    list-style: none;
    padding: 0;
    font-family: sans-serif;
`

export const ListItem = styled.li`
    margin: .5rem 0;
    background: #000;
    color: #fff;
    padding: .rem;
`
export const LinkHome = styled(Link)`
    display: block;
    width: 6.5rem;
    text-align: center;
    margin: 2rem auto;
    background-color: black;
    color: #fff;
    text-decoration: none;
`