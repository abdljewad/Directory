import React, {Component} from 'react'
class Contacts extends React.Component {
    
    constructor(){
        super();
        this.state={
            contacts:[
                {
                    id:1,
                    Name:'Cbe head quartes',
                    email:'ceo@cbe.com.et',
                    phone1:'0112457896',
                    phone2:'123456789',
                    phone3:'123456789'

                },
                {
                    id:2,
                    Name:'Cbe Abiy Branch',
                    email:'abiybranch@cbe.com.et',
                    phone1:'0112457896',
                    phone2:'123456789',
                    phone3:'123456789'

                },
                {
                    id:3,
                    Name:'Cbe Mexico Branch',
                    email:'mexicobranch@cbe.com.et',
                    phone1:'0112457896',
                    phone2:'123456789',
                    phone3:'123456789'

                }
            ]
        }
    }
    render(){
        const { contacts }= this.state;

        return(
            <div>
                { contacts.map(contact=><li>{contact.Name}</li>) }

            </div>);
            
    }
} export default Contacts;