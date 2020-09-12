  
import React, { Component, createContext } from 'react';


export const MasterContext = createContext();

export class MasterProvider extends Component {
    state = {
        fetchData: async (url) => {
            let res = await fetch(url);
            let data = await res.json();
            return data;
        },
        protocol: 'https://',
        environment: '',
        locale: '',
        brand: '',
        book: '',
        queryString: '',
        optionalFields: {},
        generateUrl: (e) => {
            this.setState({
                [e.target.id]: e.target.value,
            });
        },
        formatQueryString: () => {

            let queryString = '';

            if(Object.entries(this.state.optionalFields).length > 0){

                Object.entries(this.state.optionalFields).forEach((val,idx) => {

                    queryString += (idx === 0)? '?' : '&'; // build the url by starting off by adding "?" at start then "&" inbetween params
                    queryString += val[0] + '=' + val[1]; // params key/value pairs 
                    
                });
            }

            this.setState({
                queryString: queryString
            });

        },
        buildOptionalParamsObject: (e) => {

            this.setState({
                optionalFields: {
                    ...this.state.optionalFields,
                    [e.target.name]: e.target.value
                }
            }, this.state.formatQueryString);            
        },
        toggleOptionalParams: (e) => {

            let optionalFields = Object.entries(this.state.optionalFields);

            if(!e.target.checked) {
                this.setState({
                    optionalFields: optionalFields.filter(x => x.name === e.target.name )
                }, this.state.formatQueryString)
            } 
        },
        createStandardDeeplink: () => {
            this.setState({
                environment: 'www3.hilton.com/',
                locale: 'en_US/',
                brand: 'hi/',
                book: 'reservation/book.htm'
            })
        },
        createOHWDeeplink: () => {
            this.setState({
                environment: 'www.hilton.com/',
                locale: 'en_US/',
                brand: '',
                book: 'book/reservation/deeplink'
            })
        }
    }

    render() { 
        
        return ( 
            <MasterContext.Provider value={{...this.state}}>
                {this.props.children}
            </MasterContext.Provider>
         );
    }
}