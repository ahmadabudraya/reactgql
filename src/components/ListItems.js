import React from "react";
import {Query} from 'react-apollo'
import gql from 'graphql-tag'

const ListItems = () => (
    
    
    <Query query={gql`
        {
            allArtists{
                id
                name
                age
                albumSet{
                    title
                    songSet{
                        name
                    }
                }
            }
        }
    `}>
        {({loading,error,data})=>{
            if(loading)return <p>Loading ..</p>;
            if(error)return <p>Error :(</p>;
            return data.allArtists.map((artist,index)=>{
                return ( 
                    <div key={index} className="artist">
                        <p>{`Name: `}<strong>{artist.name}</strong></p>
                        <p>{`Age: ${artist.age}`}</p>
                        <ul>
                        {
                            artist.albumSet.map((album,index) => {
                                return(
                                    <div key={index}>
                                        <li>{`Album name: `}<u>{album.title}</u>
                                            <ul>
                                            {
                                                album.songSet.map((song,index)=>{
                                                    return (
                                                        
                                                        <li key={index}>{song.name}</li>
                                                    )
                                                })
                                            }
                                            </ul>
                                        </li>
                                    </div>
                                )
                            })
                        }
                        </ul>
                    </div>
                )
                
                
            });
        }}
    
    </Query>
);
export default ListItems;