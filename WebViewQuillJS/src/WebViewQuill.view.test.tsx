import WebViewQuillView from './WebViewQuill.view';
import {render} from '@testing-library/react-native'
import * as React from 'react'

const props ={
    debugMessages:[],
    handleMessage:(message: string)=>{}
}

describe('WebViewQuill.view.test.tsx', () => {
    it('should run a test', () => {
        expect(1+1).toBe(2)
    });
   
 it('should render', () => {
         const {toJSON} = render(<WebViewQuillView {...props} />)
         console.log(toJSON)
    }); 

});