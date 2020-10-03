  
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
        standardDeeplink: false,
        OHWDeeplink: true,
        finalResult: '',
        isCopied: false,
        manuallyOverrideUrl: (e) => {
            this.setState({
                finalResult: e.target.value
            })
        },
        buildRequiredFields: (e) => {
            this.setState({
                protocol: 'https://',
                [e.target.id]: e.target.value,
                standardDeeplink: false,
                OHWDeeplink: false
            }, this.state.formatQueryString);
        },
        formatQueryString: () => {

            const {protocol, environment, locale, brand, book, optionalFields} = this.state;

            let buildQueryString = '';
            
            if(Object.entries(optionalFields).length > 0){

                Object.entries(optionalFields).forEach((val,idx) => {

                    buildQueryString += (idx === 0)? '?' : '&'; // build the url by starting off by adding "?" at start then "&" inbetween params
                    buildQueryString += val[0] + '=' + val[1]; // params key/value pairs 
                    
                });
            }

            let buildFinalResult = protocol + environment + locale + brand + book;

            this.setState({
                    queryString: buildQueryString,
                    finalResult: buildFinalResult + buildQueryString
                });


        },
        buildOptionalParamsObject: (e) => {

            if(e.target.value.length <= 0) {

                let optionalFields = {...this.state.optionalFields};

                delete optionalFields[e.target.name];
                
                this.setState({
                    optionalFields: {
                        ...optionalFields
                    }
                }, this.state.formatQueryString)

            } else {
                this.setState({
                optionalFields: {
                    ...this.state.optionalFields,
                    [e.target.name]: e.target.value
                }
            }, this.state.formatQueryString); 

            }           
        },
        toggleOptionalParams: (e) => {

            let optionalFields = {...this.state.optionalFields};

            delete optionalFields[e.target.name]
         
            if(!e.target.checked) {
                this.setState({
                    optionalFields: {
                        ...optionalFields
                    }
                }, this.state.formatQueryString)
            }
        },
        createStandardDeeplink: () => {
            this.setState({
                protocol: 'https://',
                environment: 'www3.hilton.com/',
                locale: 'en_US/',
                brand: 'hi/',
                book: 'reservation/book.htm',
                standardDeeplink: true,
                OHWDeeplink: false
            }, this.state.formatQueryString)
        },
        createOHWDeeplink: () => {
            this.setState({
                protocol: 'https://',
                environment: 'www.hilton.com/',
                locale: 'en_US/',
                brand: '',
                book: 'book/reservation/deeplink',
                standardDeeplink: false,
                OHWDeeplink: true
            }, this.state.formatQueryString)
        },
        clearUrl: () => {
            this.setState({
                protocol: '',
                environment: '',
                locale: '',
                brand: '',
                book: '',
                queryString: '',
                standardDeeplink: false,
                OHWDeeplink: false
            }, this.state.formatQueryString)
        },
        setIsCopied: (val) => {
            this.setState({
                isCopied: val
            })
        }
    }

    componentDidMount() {
         this.state.OHWDeeplink ? this.state.createOHWDeeplink() : this.state.standardDeeplink && this.state.createStandardDeeplink();
    }

    render() { 
        
        return ( 
            <MasterContext.Provider value={{...this.state}}>
                {this.props.children}
            </MasterContext.Provider>
         );
    }
}