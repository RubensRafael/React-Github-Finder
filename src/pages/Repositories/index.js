import React, {useEffect, useState} from 'react';
import * as S from './style';
import { useHistory } from 'react-router-dom'

export default function Repositories(){
    let history = useHistory()
    let [repositories, setRepositories] = useState([])
    

    useEffect(() => {

            let repositoriesName = localStorage.getItem('repositoriesName')
            if(repositoriesName !== null){
                repositoriesName = JSON.parse(repositoriesName)
                            setRepositories(repositoriesName)
                            localStorage.clear() 
            }else{history.push('/')}
            // eslint-disable-next-line    
    }, [])

    return(
        <>
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                { repositories.map(repository =>{
                    return (
                        <S.ListItem>Repositório: { repository }</S.ListItem>
                    )
                }) }  
            </S.List>
            <S.LinkHome to='/'>Voltar</S.LinkHome>
        </S.Container>
        
        </> 
    )
}